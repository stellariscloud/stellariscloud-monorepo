import { Controller, Get, Param } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { FolderService } from '../services/folder.service'

@Controller('/folders')
@ApiTags('Folders')
export class FoldersController {
  constructor(private readonly folderService: FolderService) {}

  /**
   * Get a folder by id.
   */
  @Get('/:folderId')
  getFolder(@Param('folderId') folderId: string) {
    return this.folderService.getFolderAsUser({ folderId, userId: '' })
  }
}
