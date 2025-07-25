import type { paths } from './api-paths'
import type createFetchClient from 'openapi-fetch'

export type StellarisApiClient = ReturnType<typeof createFetchClient<paths>>

export type UserDTO =
  paths['/api/v1/server/users/{userId}']['get']['responses']['200']['content']['application/json']['user']
export type AppDTO =
  paths['/api/v1/server/apps/{appIdentifier}']['get']['responses']['200']['content']['application/json']['app']
export type ListServerTasksRequest = NonNullable<
  paths['/api/v1/server/tasks']['get']['parameters']['query']
>
export type ListServerTasksResponse =
  paths['/api/v1/server/tasks']['get']['responses']['200']['content']['application/json']

export type ListServerEventsRequest = NonNullable<
  paths['/api/v1/server/events']['get']['parameters']['query']
>
export type ListServerEventsResponse =
  paths['/api/v1/server/events']['get']['responses']['200']['content']['application/json']

// API Types for UI imports
export type FolderDTO =
  paths['/api/v1/folders/{folderId}']['get']['responses']['200']['content']['application/json']['folder']
export type FolderGetResponse =
  paths['/api/v1/folders/{folderId}']['get']['responses']['200']['content']['application/json']
export type FolderGetMetadataResponse =
  paths['/api/v1/folders/{folderId}/metadata']['get']['responses']['200']['content']['application/json']
export type FolderObjectDTO =
  paths['/api/v1/folders/{folderId}/objects/{objectKey}']['get']['responses']['200']['content']['application/json']['folderObject']
export type TaskDTO =
  paths['/api/v1/server/tasks/{taskId}']['get']['responses']['200']['content']['application/json']['task']
export type EventDTO =
  paths['/api/v1/server/events/{eventId}']['get']['responses']['200']['content']['application/json']['event']
export type AppDTOManifestInner = NonNullable<AppDTO['manifest']>[number]
export type AppExternalWorkersDTO = AppDTO['externalWorkers'][number]
export type AccessKeyPublicDTO =
  paths['/api/v1/access-keys']['get']['responses']['200']['content']['application/json']['result'][number]
export type AccessKeysListRequest = NonNullable<
  paths['/api/v1/access-keys']['get']['parameters']['query']
>
export type UserStorageProvisionDTO =
  paths['/api/v1/server/user-storage-provisions']['get']['responses']['200']['content']['application/json']['result'][number]
export type ServerStorageLocationDTO = NonNullable<
  paths['/api/v1/server/server-storage-location']['get']['responses']['200']['content']['application/json']['serverStorageLocation']
>
export type ServerStorageLocationInputDTO =
  paths['/api/v1/server/server-storage-location']['post']['requestBody']['content']['application/json']
export type ServerSettingsGetResponse =
  paths['/api/v1/server/settings']['get']['responses']['200']['content']['application/json']

export type AppsListResponse =
  paths['/api/v1/server/apps']['get']['responses']['200']['content']['application/json']

export type ListFolderObjectsSortRequest = NonNullable<
  paths['/api/v1/folders/{folderId}/objects']['get']['parameters']['query']
>

export type ServerSettingsListResponse =
  paths['/api/v1/server/settings']['get']['responses']['200']['content']['application/json']

export type ServerUsersListRequest = NonNullable<
  paths['/api/v1/server/users']['get']['parameters']['query']
>
export type ServerTasksApiListTasksRequest = NonNullable<
  paths['/api/v1/server/tasks']['get']['parameters']['query']
>
export type ServerEventsApiListEventsRequest = NonNullable<
  paths['/api/v1/server/events']['get']['parameters']['query']
>
export type FolderEventsListRequest = NonNullable<
  paths['/api/v1/folders/{folderId}/events']['get']['parameters']['query']
>

export type FolderCreateInputDTO =
  paths['/api/v1/folders']['post']['requestBody']['content']['application/json']

export type AccessKeyBucketsListResponse =
  paths['/api/v1/access-keys/{accessKeyHashId}/buckets']['get']['responses']['200']['content']['application/json']

export type RotateAccessKeyInputDTO =
  paths['/api/v1/access-keys/{accessKeyHashId}/rotate']['post']['requestBody']['content']['application/json']

export type RotateServerAccessKeyInputDTO =
  paths['/api/v1/server/access-keys/{accessKeyHashId}/rotate']['post']['requestBody']['content']['application/json']

export type FolderShareListResponse =
  paths['/api/v1/folders/{folderId}/shares']['get']['responses']['200']['content']['application/json']
export type FolderShareUserListResponse =
  paths['/api/v1/folders/{folderId}/user-share-options']['get']['responses']['200']['content']['application/json']

export type LoginCredentialsDTO =
  paths['/api/v1/auth/login']['post']['requestBody']['content']['application/json']
export type SignupCredentialsDTO =
  paths['/api/v1/auth/signup']['post']['requestBody']['content']['application/json']
export type ViewerGetResponse =
  paths['/api/v1/viewer']['get']['responses']['200']['content']['application/json']
export type SignupResponse =
  paths['/api/v1/auth/signup']['post']['responses']['201']['content']['application/json']
export type LoginResponse =
  paths['/api/v1/auth/login']['post']['responses']['201']['content']['application/json']
