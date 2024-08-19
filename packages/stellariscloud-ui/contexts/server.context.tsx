import type {
  AppAction,
  AppMenuItem,
  AppPushMessage,
} from '@stellariscloud/types'
import { ServerPushMessage } from '@stellariscloud/types'
import React from 'react'
import type { Socket } from 'socket.io-client'

import { useWebsocket } from '../hooks/use-websocket'
import { apiClient } from '../services/api'
import { useLocalFileCacheContext } from './local-file-cache.context'
import type { LogLevel } from './logging.context'
import {
  AppListResponse,
  SettingsGetResponseSettings,
} from '@stellariscloud/api-client'
import { useAuthContext } from '@stellariscloud/auth-utils'

export interface IServerContext {
  refreshApps: () => Promise<void>
  refreshSettings: () => Promise<void>
  menuItems: AppMenuItemAndHref[]
  appFolderActions: { action: AppAction; appIdentifier: string }[]
  appFolderObjectActions: { action: AppAction; appIdentifier: string }[]
  settings?: SettingsGetResponseSettings
  apps?: AppListResponse
  subscribeToMessages: (handler: SocketMessageHandler) => void
  unsubscribeFromMessages: (handler: SocketMessageHandler) => void
  socketConnected: boolean
  socket: Socket | undefined
}

export type SocketMessageHandler = (
  name: ServerPushMessage,
  msg: { [key: string]: any },
) => void

export const ServerContext = React.createContext<IServerContext>(
  {} as IServerContext,
)

export interface Notification {
  level: LogLevel
  message: string
  thumbnailSrc?: string
  id?: string
}

export type AppMenuItemAndHref = {
  href: string
  appIdentifier: string
} & AppMenuItem

export const ServerContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [serverSettings, setServerSettings] =
    React.useState<SettingsGetResponseSettings>()
  const [menuItems, setMenuItems] = React.useState<AppMenuItemAndHref[]>()
  const [appFolderActions, setAppFolderActions] =
    React.useState<{ action: AppAction; appIdentifier: string }[]>()
  const [appFolderObjectActions, setAppFolderObjectActions] =
    React.useState<{ action: AppAction; appIdentifier: string }[]>()
  const [serverApps, setServerApps] = React.useState<AppListResponse>()
  const authContext = useAuthContext()

  const fetchServerSettings = React.useCallback(async () => {
    if (authContext.viewer?.isAdmin) {
      void apiClient.serverApi
        .getServerSettings()
        .then((response) => setServerSettings(response.data.settings))
    }
  }, [authContext.viewer?.isAdmin])

  const fetchServerApps = React.useCallback(
    async () =>
      apiClient.appsApi.listApps().then((response) => {
        setServerApps(response.data)
        setMenuItems(
          response.data.installed.result.reduce<AppMenuItemAndHref[]>(
            (acc, next) => {
              return acc.concat(
                next.config.menuItems.map((item) => ({
                  iconPath: item.iconPath,
                  href: `/apps/${next.identifier}/${item.uiName}`,
                  label: item.label,
                  uiName: item.uiName,
                  appIdentifier: next.identifier,
                })),
              )
            },
            [],
          ),
        )
        setAppFolderActions(
          response.data.installed.result.reduce<
            { action: AppAction; appIdentifier: string }[]
          >((acc, next) => {
            return acc.concat(
              next.config.folderTaskTriggers.map((item) => ({
                action: {
                  description: '__some_folder_task__',
                  key: item.taskTriggerKey,
                },
                appIdentifier: next.identifier,
              })),
            )
          }, []),
        )
        setAppFolderObjectActions(
          response.data.installed.result.reduce<
            { action: AppAction; appIdentifier: string }[]
          >((acc, next) => {
            return acc.concat(
              next.config.objectTaskTriggers.map((item) => ({
                action: {
                  description: '__some_object_task__',
                  key: item.taskTriggerKey,
                },
                appIdentifier: next.identifier,
              })),
            )
          }, []),
        )
      }),
    [],
  )

  const messageHandler = React.useCallback(
    (message: { name: AppPushMessage; payload: { [key: string]: any } }) => {
      if (ServerPushMessage.APPS_UPDATED === message.name) {
        void fetchServerApps()
      } else if (ServerPushMessage.SETTINGS_UPDATED === message.name) {
        void fetchServerSettings()
      }
    },
    [fetchServerApps, fetchServerSettings],
  )

  const { socket, connected: socketConnected } = useWebsocket(
    'user',
    messageHandler,
  )

  React.useEffect(() => {
    void fetchServerApps()
    void fetchServerSettings()
  }, [fetchServerApps, fetchServerSettings])

  const subscribeToMessages = (handler: SocketMessageHandler) => {
    socket?.onAny(handler)
  }

  const unsubscribeFromMessages = (handler: SocketMessageHandler) => {
    socket?.offAny(handler)
  }

  return (
    <ServerContext.Provider
      value={{
        refreshApps: fetchServerApps,
        refreshSettings: fetchServerSettings,
        socketConnected,
        menuItems: menuItems ?? [],
        appFolderActions: appFolderActions ?? [],
        appFolderObjectActions: appFolderObjectActions ?? [],
        settings: serverSettings,
        apps: serverApps,
        subscribeToMessages,
        unsubscribeFromMessages,
        socket,
      }}
    >
      {children}
    </ServerContext.Provider>
  )
}

export const useServerContext = (messageHandler?: SocketMessageHandler) => {
  const context = React.useContext(ServerContext)
  const { subscribeToMessages, unsubscribeFromMessages } = context
  React.useEffect(() => {
    if (messageHandler) {
      subscribeToMessages(messageHandler)
    }

    return () => {
      if (messageHandler) {
        unsubscribeFromMessages(messageHandler)
      }
    }
  }, [messageHandler, subscribeToMessages, unsubscribeFromMessages])

  return context
}
