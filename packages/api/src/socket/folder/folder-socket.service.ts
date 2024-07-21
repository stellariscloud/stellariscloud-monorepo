import type { OnModuleInit } from '@nestjs/common'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'
import { FolderPushMessage } from '@stellariscloud/types'
import * as r from 'runtypes'
import { Server, Socket } from 'socket.io'
import { FolderService } from 'src/folders/services/folder.service'

import { AccessTokenJWT, JWTService } from '../../auth/services/jwt.service'

const UserAuthPayload = r.Record({
  userId: r.String,
  token: r.String,
})

@Injectable()
export class FolderSocketService implements OnModuleInit {
  private readonly connectedClients: Map<string, Socket> = new Map()
  private server: Server
  setServer(server: Server) {
    this.server = server
  }
  private folderService: FolderService

  constructor(
    private readonly moduleRef: ModuleRef,
    private readonly jwtService: JWTService,
  ) {}

  async handleConnection(socket: Socket): Promise<void> {
    const folderId = socket.nsp.name.slice('/folders/'.length)
    // console.log('FolderSocketService handleConnection:', folderId)

    const clientId = socket.id
    this.connectedClients.set(clientId, socket)
    socket.on('disconnect', () => {
      this.connectedClients.delete(clientId)
    })

    // Handle other events and messages from the client
    const auth = socket.handshake.auth
    // console.log('folder socket auth:', auth)
    if (UserAuthPayload.guard(auth)) {
      const token = auth.token
      if (typeof token !== 'string') {
        throw new UnauthorizedException()
      }
      try {
        const verifiedToken = AccessTokenJWT.parse(
          this.jwtService.verifyUserJWT(token),
        )
        // console.log('verifiedToken:', verifiedToken)

        if (verifiedToken.sub.startsWith('USER')) {
          // folder event subscribe
          await this.folderService
            .getFolderAsUser({
              folderId,
              userId: verifiedToken.sub.split(':')[1],
            })
            .then(({ folder }) => socket.join(`folder:${folder.id}`))
        } else {
          throw new UnauthorizedException()
        }
      } catch (e: any) {
        console.log('SOCKET ERROR:', e)
        socket.conn.close()
        throw e ?? new Error('Undefined Error.')
      }
    } else {
      // auth payload does not match expected
      console.log('Bad auth payload.', auth)
      socket.disconnect(true)
      throw new UnauthorizedException()
    }
  }

  getRoomId(folderId: string) {
    return `folder:${folderId}`
  }

  getNamespace(folderId: string) {
    return `/folders/${folderId}`
  }

  onModuleInit() {
    this.folderService = this.moduleRef.get(FolderService)
  }

  sendToFolderRoom(folderId: string, name: FolderPushMessage, msg: any) {
    // console
    //   .log(
    //     'this.server:',
    //     typeof this.server,
    //     this.server.constructor.name,
    //   )
    // this.server?.to(this.getRoomId(folderId)).emit(name, msg)
    // console.log(
    //   'folderSocketGateway:',
    //   this.folderSocketGateway.namespace.server,
    // )

    this.server.to(this.getRoomId(folderId)).emit(name, msg)
  }
}
