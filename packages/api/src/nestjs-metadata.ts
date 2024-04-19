/* eslint-disable */
export default async () => {
  const t = {
    ['../src/auth/dto/user-session.dto']: await import(
      '../src/auth/dto/user-session.dto'
    ),
    ['../src/users/dto/user.dto']: await import('../src/users/dto/user.dto'),
    ['../src/event/dto/event.dto']: await import('../src/event/dto/event.dto'),
    ['../src/auth/dto/responses/login-response.dto']: await import(
      '../src/auth/dto/responses/login-response.dto'
    ),
    ['../src/auth/dto/responses/signup-response.dto']: await import(
      '../src/auth/dto/responses/signup-response.dto'
    ),
    ['../src/users/dto/responses/viewer-get-response.dto']: await import(
      '../src/users/dto/responses/viewer-get-response.dto'
    ),
  }
  return {
    '@nestjs/swagger': {
      models: [
        [
          import('../src/locations/transfer-objects/user-location-input.dto'),
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
        [
          import('../src/locations/transfer-objects/server-location-input.dto'),
          {
            ServerLocationInputDTO: {
              name: { required: true, type: () => String },
              endpoint: { required: true, type: () => String },
              accessKeyId: { required: true, type: () => String },
              secretAccessKey: { required: true, type: () => String },
              region: { required: true, type: () => String },
              bucket: { required: true, type: () => String },
              prefix: { required: false, type: () => String },
            },
          },
        ],
        [
          import('../src/folders/dto/folder-object.dto'),
          { FolderObjectDTO: {} },
        ],
        [
          import('../src/event/dto/event.dto'),
          {
            EventDTO: {
              id: { required: true, type: () => String },
              eventKey: { required: true, type: () => String },
            },
          },
        ],
        [
          import('../src/auth/dto/login-credentials.dto'),
          { LoginCredentialsDTO: {} },
        ],
        [
          import('../src/auth/dto/user-session.dto'),
          {
            UserSessionDTO: {
              accessToken: { required: true, type: () => String },
              refreshToken: { required: true, type: () => String },
            },
          },
        ],
        [
          import('../src/auth/dto/responses/login-response.dto'),
          {
            LoginResponse: {
              session: {
                required: true,
                type: () =>
                  t['../src/auth/dto/user-session.dto'].UserSessionDTO,
              },
            },
          },
        ],
        [import('../src/users/dto/user.dto'), { UserDTO: {} }],
        [
          import('../src/auth/dto/responses/signup-response.dto'),
          {
            SignupResponse: {
              user: {
                required: true,
                type: () => t['../src/users/dto/user.dto'].UserDTO,
              },
            },
          },
        ],
        [
          import('../src/auth/dto/signup-credentials.dto'),
          { SignupCredentialsDTO: {} },
        ],
        [
          import('../src/users/dto/responses/viewer-get-response.dto'),
          {
            ViewerGetResponse: {
              user: {
                required: true,
                type: () => t['../src/users/dto/user.dto'].UserDTO,
              },
            },
          },
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
          import('../src/users/dto/create-user.dto'),
          {
            CreateUserDTO: {
              username: { required: true, type: () => String },
              password: { required: true, type: () => String },
              isAdmin: { required: false, type: () => Boolean },
              emailVerified: { required: false, type: () => Boolean },
              name: { required: false, type: () => String },
              email: { required: false, type: () => String },
              permissions: { required: false, type: () => [String] },
            },
          },
        ],
        [
          import('../src/users/dto/update-user.dto'),
          {
            UpdateUserDTO: {
              isAdmin: { required: false, type: () => Boolean },
              emailVerified: { required: false, type: () => Boolean },
              password: { required: false, type: () => String },
              name: { required: false, type: () => String },
              email: { required: false, type: () => String },
              permissions: { required: false, type: () => [String] },
            },
          },
        ],
        [
          import('../src/core/core-info.dto'),
          { CoreInfoDTO: { version: { required: true, type: () => String } } },
        ],
        [
          import('../src/locations/transfer-objects/location.dto'),
          { LocationDTO: {} },
        ],
        [import('../src/folders/dto/folder.dto'), { FolderDTO: {} }],
        [
          import('../src/locations/transfer-objects/location-input.dto'),
          {
            LocationInputDTO: {
              name: { required: true, type: () => String },
              endpoint: { required: true, type: () => String },
              accessKeyId: { required: true, type: () => String },
              secretAccessKey: { required: true, type: () => String },
              region: { required: true, type: () => String },
              bucket: { required: true, type: () => String },
              prefix: { required: false, type: () => String },
            },
          },
        ],
      ],
      controllers: [
        [
          import('../src/event/controllers/event.controller'),
          {
            EventController: {
              getAppInfo: {
                description: 'Get an event by id.',
                type: t['../src/event/dto/event.dto'].EventDTO,
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
                type: Object,
              },
              setServerSetting: {
                description: 'Set a setting in the server settings objects.',
                type: Object,
              },
            },
          },
        ],
        [
          import('../src/folders/controllers/folders.controller'),
          {
            FoldersController: {
              getAppInfo: { description: 'Get a folder by id.' },
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
      ],
    },
  }
}
