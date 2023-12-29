export enum FolderPushMessage {
  OBJECTS_ADDED = 'OBJECTS_ADDED',
  OBJECTS_REMOVED = 'OBJECTS_REMOVED',
  OBJECTS_UPDATED = 'OBJECTS_UPDATED',
  OBJECT_ADDED = 'OBJECT_ADDED',
  OBJECT_REMOVED = 'OBJECT_REMOVED',
  OBJECT_UPDATED = 'OBJECT_UPDATED',
}

export interface ModuleLogEntry {
  level: 'error' | 'warning' | 'info' | 'debug'
  name: string
  message: string
  data: {
    [key: string]: any
  }
}
