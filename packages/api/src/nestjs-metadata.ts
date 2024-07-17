/* eslint-disable */
export default async () => {
  const t = {
    ['../src/server/dto/responses/user-get-response.dto']: await import(
      '../src/server/dto/responses/user-get-response.dto'
    ),
    ['../src/server/dto/responses/user-list-response.dto']: await import(
      '../src/server/dto/responses/user-list-response.dto'
    ),
    ['../src/users/dto/responses/viewer-get-response.dto']: await import(
      '../src/users/dto/responses/viewer-get-response.dto'
    ),
    ['../src/auth/dto/responses/login-response.dto']: await import(
      '../src/auth/dto/responses/login-response.dto'
    ),
    ['../src/auth/dto/responses/signup-response.dto']: await import(
      '../src/auth/dto/responses/signup-response.dto'
    ),
    ['../src/auth/dto/responses/token-refresh-response.dto']: await import(
      '../src/auth/dto/responses/token-refresh-response.dto'
    ),
    ['../src/event/dto/responses/event-get-response.dto']: await import(
      '../src/event/dto/responses/event-get-response.dto'
    ),
    ['../src/server/dto/responses/settings-get-response.dto']: await import(
      '../src/server/dto/responses/settings-get-response.dto'
    ),
    ['../src/server/dto/responses/setting-set-response.dto']: await import(
      '../src/server/dto/responses/setting-set-response.dto'
    ),
    ['../src/server/dto/responses/storage-provision-list-response.dto']:
      await import(
        '../src/server/dto/responses/storage-provision-list-response.dto'
      ),
    ['../src/folders/dto/responses/folder-get-response.dto']: await import(
      '../src/folders/dto/responses/folder-get-response.dto'
    ),
    ['../src/folders/dto/responses/folder-get-metadata-response.dto']:
      await import(
        '../src/folders/dto/responses/folder-get-metadata-response.dto'
      ),
    ['../src/folders/dto/responses/folder-list-response.dto']: await import(
      '../src/folders/dto/responses/folder-list-response.dto'
    ),
    ['../src/folders/dto/responses/folder-create-response.dto']: await import(
      '../src/folders/dto/responses/folder-create-response.dto'
    ),
    ['../src/folders/dto/responses/folder-object-list-response.dto']:
      await import(
        '../src/folders/dto/responses/folder-object-list-response.dto'
      ),
    ['../src/folders/dto/responses/folder-object-get-response.dto']:
      await import(
        '../src/folders/dto/responses/folder-object-get-response.dto'
      ),
    ['../src/folders/dto/responses/folder-create-signed-urls-response.dto']:
      await import(
        '../src/folders/dto/responses/folder-create-signed-urls-response.dto'
      ),
    ['../src/app/dto/responses/app-list-response.dto']: await import(
      '../src/app/dto/responses/app-list-response.dto'
    ),
  }
  return {
    '@nestjs/swagger': {
      models: [
        [
          import('../src/users/dto/user-create-input.dto'),
          { UserCreateInputDTO: {} },
        ],
        [
          import('../src/users/dto/user-update-input.dto'),
          { UserUpdateInputDTO: {} },
        ],
        [import('../src/users/dto/user.dto'), { UserDTO: {} }],
        [
          import('../src/server/dto/responses/user-get-response.dto'),
          { UserGetResponse: {} },
        ],
        [
          import('../src/server/dto/responses/user-list-response.dto'),
          { UserListResponse: {} },
        ],
        [
          import('../src/users/dto/users-list-query-params.dto'),
          { UsersListQueryParamsDTO: {} },
        ],
        [
          import('../src/users/dto/responses/viewer-get-response.dto'),
          { ViewerGetResponse: {} },
        ],
        [
          import('../src/users/dto/update-viewer-input.dto'),
          {
            UpdateViewerInputDTO: {
              name: { required: true, type: () => String },
            },
          },
        ],
        [
          import('../src/auth/dto/login-credentials.dto'),
          { LoginCredentialsDTO: {} },
        ],
        [
          import('../src/auth/dto/signup-credentials.dto'),
          { SignupCredentialsDTO: {} },
        ],
        [
          import('../src/auth/dto/responses/login-response.dto'),
          { LoginResponse: {} },
        ],
        [
          import('../src/auth/dto/responses/signup-response.dto'),
          { SignupResponse: {} },
        ],
        [
          import('../src/auth/dto/responses/token-refresh-response.dto'),
          { TokenRefreshResponse: {} },
        ],
        [import('../src/event/dto/event.dto'), { EventDTO: {} }],
        [
          import('../src/event/dto/responses/event-get-response.dto'),
          { EventGetResponse: {} },
        ],
        [
          import('./storage/dto/user-location-input.dto'),
          {
            UserLocationInputDTO: {
              serverLocationId: { required: false, type: () => String },
              userLocationId: { required: false, type: () => String },
              userLocationBucketOverride: {
                required: false,
                type: () => String,
              },
              userLocationPrefixOverride: {
                required: false,
                type: () => String,
              },
              accessKeyId: { required: false, type: () => String },
              secretAccessKey: { required: false, type: () => String },
              endpoint: { required: false, type: () => String },
              bucket: { required: false, type: () => String },
              region: { required: false, type: () => String },
              prefix: { required: false, type: () => String },
            },
          },
        ],
        [import('../src/server/dto/settings.dto'), { SettingsDTO: {} }],
        [
          import('../src/server/dto/storage-provision.dto'),
          { StorageProvisionDTO: {} },
        ],
        [
          import('../src/server/dto/storage-provision-input.dto'),
          { StorageProvisionInputDTO: {} },
        ],
        [
          import('../src/folders/dto/folder-object-content-attributes.dto'),
          { FolderObjectContentAttributesDTO: {} },
        ],
        [
          import('../src/folders/dto/folder-object-content-metadata.dto'),
          { FolderObjectContentMetadataDTO: {} },
        ],
        [
          import('../src/folders/dto/folder-object.dto'),
          { FolderObjectDTO: {} },
        ],
        [
          import('../src/server/dto/responses/setting-set-response.dto'),
          { SettingSetResponse: {} },
        ],
        [
          import('../src/server/dto/responses/settings-get-response.dto'),
          { SettingsGetResponse: {} },
        ],
        [
          import('../src/server/dto/set-setting-input.dto'),
          { SetSettingInputDTO: {} },
        ],
        [
          import(
            '../src/server/dto/responses/storage-provision-list-response.dto'
          ),
          { StorageProvisionListResponse: {} },
        ],
        [
          import('../src/server/dto/storage-provisions-list-query-params.dto'),
          { StorageProvisionsListQueryParamsDTO: {} },
        ],
        [import('./storage/dto/storage-location.dto'), { LocationDTO: {} }],
        [import('../src/folders/dto/folder.dto'), { FolderDTO: {} }],
        [
          import('../src/folders/dto/folder-location-input.dto'),
          { FolderLocationInputDTO: {} },
        ],
        [
          import('../src/folders/dto/folder-create-input.dto'),
          { FolderCreateInputDTO: {} },
        ],
        [
          import('../src/folders/dto/folder-create-signed-url-input.dto'),
          { FolderCreateSignedUrlInputDTO: {} },
        ],
        [
          import('../src/folders/dto/folder-objects-list-query-params.dto'),
          { FolderObjectsListQueryParamsDTO: {} },
        ],
        [
          import('../src/folders/dto/folders-list-query-params.dto'),
          { FoldersListQueryParamsDTO: {} },
        ],
        [
          import('../src/folders/dto/responses/folder-create-response.dto'),
          { FolderCreateResponse: {} },
        ],
        [
          import(
            '../src/folders/dto/responses/folder-create-signed-urls-response.dto'
          ),
          { FolderCreateSignedUrlsResponse: {} },
        ],
        [
          import(
            '../src/folders/dto/responses/folder-get-metadata-response.dto'
          ),
          { FolderGetMetadataResponse: {} },
        ],
        [
          import('../src/folders/dto/responses/folder-get-response.dto'),
          { FolderGetResponse: {} },
        ],
        [
          import('../src/folders/dto/responses/folder-list-response.dto'),
          { FolderListResponse: {} },
        ],
        [
          import('../src/folders/dto/responses/folder-object-get-response.dto'),
          { FolderObjectGetResponse: {} },
        ],
        [
          import(
            '../src/folders/dto/responses/folder-object-list-response.dto'
          ),
          { FolderObjectListResponse: {} },
        ],
        [import('../src/app/dto/app.dto'), { AppDTO: {} }],
        [
          import('../src/app/dto/responses/app-list-response.dto'),
          { AppListResponse: {} },
        ],
        [
          import('../src/core/core-info.dto'),
          { CoreInfoDTO: { version: { required: true, type: () => String } } },
        ],
      ],
      controllers: [
        [
          import('../src/users/controllers/users.controller'),
          {
            UsersController: {
              createUser: {
                description: 'Create a user.',
                type: t['../src/server/dto/responses/user-get-response.dto']
                  .UserGetResponse,
              },
              updateUser: {
                description: 'Update a user.',
                type: t['../src/server/dto/responses/user-get-response.dto']
                  .UserGetResponse,
              },
              listUsers: {
                description: 'List the users.',
                type: t['../src/server/dto/responses/user-list-response.dto']
                  .UserListResponse,
              },
              getUser: {
                description: 'Get a user by id.',
                type: t['../src/server/dto/responses/user-get-response.dto']
                  .UserGetResponse,
              },
              deleteUser: { description: 'Delete a server user by id.' },
            },
          },
        ],
        [
          import('../src/users/controllers/viewer.controller'),
          {
            ViewerController: {
              getViewer: {
                type: t['../src/users/dto/responses/viewer-get-response.dto']
                  .ViewerGetResponse,
              },
              updateViewer: {
                type: t['../src/users/dto/responses/viewer-get-response.dto']
                  .ViewerGetResponse,
              },
            },
          },
        ],
        [
          import('../src/auth/controllers/auth.controller'),
          {
            AuthController: {
              login: {
                description:
                  'Authenticate the user and return access and refresh tokens.',
                type: t['../src/auth/dto/responses/login-response.dto']
                  .LoginResponse,
              },
              signup: {
                description: 'Register a new user.',
                type: t['../src/auth/dto/responses/signup-response.dto']
                  .SignupResponse,
              },
              logout: {
                description: 'Logout. Kill the current session.',
                type: Boolean,
              },
              refreshToken: {
                description: 'Refresh a session with a refresh token.',
                type: t['../src/auth/dto/responses/token-refresh-response.dto']
                  .TokenRefreshResponse,
              },
            },
          },
        ],
        [
          import('../src/event/controllers/event.controller'),
          {
            EventController: {
              getEvent: {
                description: 'Get an event by id.',
                type: t['../src/event/dto/responses/event-get-response.dto']
                  .EventGetResponse,
              },
            },
          },
        ],
        [
          import('../src/server/controllers/server.controller'),
          {
            ServerController: {
              getServerSettings: {
                description: 'Get the server settings object.',
                type: t['../src/server/dto/responses/settings-get-response.dto']
                  .SettingsGetResponse,
              },
              setServerSetting: {
                description: 'Set a setting in the server settings objects.',
                type: t['../src/server/dto/responses/setting-set-response.dto']
                  .SettingSetResponse,
              },
              resetServerSetting: {
                description: 'Reset a setting in the server settings objects.',
                type: t['../src/server/dto/responses/setting-set-response.dto']
                  .SettingSetResponse,
              },
            },
          },
        ],
        [
          import('../src/server/controllers/storage-provisions.controller'),
          {
            StorageProvisionsController: {
              listStorageProvisions: {
                description: 'List the server provisions.',
                type: t[
                  '../src/server/dto/responses/storage-provision-list-response.dto'
                ].StorageProvisionListResponse,
              },
              createServerProvision: {
                description: 'Create a new server provision.',
                type: t[
                  '../src/server/dto/responses/storage-provision-list-response.dto'
                ].StorageProvisionListResponse,
              },
              updateStorageProvision: {
                description: 'Update a server provision by id.',
                type: t[
                  '../src/server/dto/responses/storage-provision-list-response.dto'
                ].StorageProvisionListResponse,
              },
              deleteStorageProvision: {
                description: 'Delete a server provision by id.',
                type: t[
                  '../src/server/dto/responses/storage-provision-list-response.dto'
                ].StorageProvisionListResponse,
              },
            },
          },
        ],
        [
          import('../src/folders/controllers/folders.controller'),
          {
            FoldersController: {
              getFolder: {
                description: 'Get a folder by id.',
                type: t['../src/folders/dto/responses/folder-get-response.dto']
                  .FolderGetResponse,
              },
              getFolderMetadata: {
                description: 'Get the metadata for a folder by id.',
                type: t[
                  '../src/folders/dto/responses/folder-get-metadata-response.dto'
                ].FolderGetMetadataResponse,
              },
              listFolders: {
                description: 'List folders.',
                type: t['../src/folders/dto/responses/folder-list-response.dto']
                  .FolderListResponse,
              },
              createFolder: {
                description: 'Create a folder.',
                type: t[
                  '../src/folders/dto/responses/folder-create-response.dto'
                ].FolderCreateResponse,
              },
              deleteFolder: { description: 'Delete a folder by id.' },
              rescanFolder: {
                description:
                  'Scan the underlying S3 location and update our local representation of it.',
              },
              listFolderObjects: {
                description: 'List folder objects by folderId.',
                type: t[
                  '../src/folders/dto/responses/folder-object-list-response.dto'
                ].FolderObjectListResponse,
              },
              getFolderObject: {
                description: 'Get a folder object by folderId and objectKey.',
                type: t[
                  '../src/folders/dto/responses/folder-object-get-response.dto'
                ].FolderObjectGetResponse,
              },
              deleteFolderObject: {
                description:
                  'Delete a folder object by folderId and objectKey.',
              },
              createPresignedUrls: {
                description: 'Create presigned urls for objects in a folder.',
                type: t[
                  '../src/folders/dto/responses/folder-create-signed-urls-response.dto'
                ].FolderCreateSignedUrlsResponse,
              },
              refreshFolderObjectS3Metadata: {
                description:
                  'Scan the object again in the underlying storage, and update its state in our db.',
                type: t[
                  '../src/folders/dto/responses/folder-object-get-response.dto'
                ].FolderObjectGetResponse,
              },
            },
          },
        ],
        [
          import('../src/app/controllers/apps.controller'),
          {
            AppsController: {
              listApps: {
                type: t['../src/app/dto/responses/app-list-response.dto']
                  .AppListResponse,
              },
            },
          },
        ],
      ],
    },
  }
}
