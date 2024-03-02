/* eslint-disable */
export default async () => {
  const t = {
    ['../../shared/packages/stellaris-types/src/types/content.types']:
      await import('@stellariscloud/types/src/types/content.types'),
    ['./event/dto/event.dto']: await import('./event/dto/event.dto'),
    ['./auth/transfer-objects/user-session.dto']: await import(
      './auth/transfer-objects/user-session.dto'
    ),
  }
  return {
    '@nestjs/swagger': {
      models: [
        [
          import('./event/dto/event.dto'),
          {
            EventDTO: {
              id: { required: true, type: () => String },
              eventKey: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./locations/transfer-objects/user-location-input.dto'),
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
          import('./locations/transfer-objects/server-location-input.dto'),
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
          import('./core/transfer-objects/timestamps.dto'),
          {
            TimestampDTO: {
              createdAt: { required: true, type: () => Date },
              updatedAt: { required: true, type: () => Date },
            },
          },
        ],
        [
          import('./folders/transfer-objects/folder-object.dto'),
          {
            FolderObjectDTO: {
              id: { required: true, type: () => String },
              objectKey: { required: true, type: () => String },
              folderId: { required: true, type: () => String },
              contentAttributes: { required: true, type: () => Object },
              contentMetadata: { required: true, type: () => Object },
              hash: { required: true, type: () => String, nullable: true },
              lastModified: { required: true, type: () => Number },
              eTag: { required: true, type: () => String },
              sizeBytes: { required: true, type: () => Number },
              mediaType: {
                required: true,
                enum: t[
                  '../../shared/packages/stellaris-types/src/types/content.types'
                ].MediaType,
              },
              mimeType: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./auth/transfer-objects/signup.dto'),
          {
            SignupDTO: {
              email: { required: true, type: () => String },
              username: { required: true, type: () => String },
              password: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./auth/transfer-objects/login.dto'),
          {
            LoginDTO: {
              login: { required: true, type: () => String },
              password: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./auth/transfer-objects/user-session.dto'),
          {
            UserSessionDTO: {
              accessToken: { required: true, type: () => String },
              refreshToken: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./users/transfer-objects/create-user.dto'),
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
          import('./users/transfer-objects/update-user.dto'),
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
          import('./users/transfer-objects/update-viewer-input.dto'),
          {
            UpdateViewerInputDTO: {
              name: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./core/core-info.dto'),
          { CoreInfoDTO: { version: { required: true, type: () => String } } },
        ],
        [
          import('./folders/transfer-objects/folder.dto'),
          {
            FolderDTO: {
              id: { required: true, type: () => String },
              ownerId: { required: false, type: () => String },
              name: { required: true, type: () => String },
              metadataLocation: { required: true, type: () => Object },
              contentLocation: { required: true, type: () => Object },
            },
          },
        ],
        [
          import('./locations/transfer-objects/location-input.dto'),
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
          import('./event/controllers/event.controller'),
          {
            EventController: {
              getAppInfo: {
                description: 'Get an event by id.',
                type: t['./event/dto/event.dto'].EventDTO,
              },
            },
          },
        ],
        [
          import('./server/controllers/server.controller'),
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
          import('./folders/controllers/folders.controller'),
          {
            FoldersController: {
              getAppInfo: { description: 'Get a folder by id.' },
            },
          },
        ],
        [
          import('./auth/auth.controller'),
          {
            AuthController: {
              login: {
                description:
                  'Authenticate the user and return access and refresh tokens.',
                type: t['./auth/transfer-objects/user-session.dto']
                  .UserSessionDTO,
              },
            },
          },
        ],
        [
          import('./users/controllers/viewer.controller'),
          { ViewerController: { getViewer: {}, updateViewer: {} } },
        ],
      ],
    },
  }
}
