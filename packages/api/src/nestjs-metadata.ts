/* eslint-disable */
export default async () => {
    const t = {
        ["../src/server/dto/responses/user-get-response.dto"]: await import("../src/server/dto/responses/user-get-response.dto"),
        ["../src/server/dto/responses/user-list-response.dto"]: await import("../src/server/dto/responses/user-list-response.dto"),
        ["../src/users/dto/responses/viewer-get-response.dto"]: await import("../src/users/dto/responses/viewer-get-response.dto"),
        ["../src/auth/dto/responses/login-response.dto"]: await import("../src/auth/dto/responses/login-response.dto"),
        ["../src/auth/dto/responses/signup-response.dto"]: await import("../src/auth/dto/responses/signup-response.dto"),
        ["../src/auth/dto/responses/token-refresh-response.dto"]: await import("../src/auth/dto/responses/token-refresh-response.dto"),
        ["../src/event/dto/responses/event-get-response.dto"]: await import("../src/event/dto/responses/event-get-response.dto"),
        ["../src/event/dto/responses/event-list-response.dto"]: await import("../src/event/dto/responses/event-list-response.dto"),
        ["../src/server/dto/responses/settings-get-response.dto"]: await import("../src/server/dto/responses/settings-get-response.dto"),
        ["../src/server/dto/responses/setting-set-response.dto"]: await import("../src/server/dto/responses/setting-set-response.dto"),
        ["../src/server/dto/responses/server-storage-location-get-response.dto"]: await import("../src/server/dto/responses/server-storage-location-get-response.dto"),
        ["../src/server/dto/responses/user-storage-provision-list-response.dto"]: await import("../src/server/dto/responses/user-storage-provision-list-response.dto"),
        ["../src/server/dto/responses/user-storage-provision-get-response.dto"]: await import("../src/server/dto/responses/user-storage-provision-get-response.dto"),
        ["../src/storage/dto/responses/access-key-list-response.dto"]: await import("../src/storage/dto/responses/access-key-list-response.dto"),
        ["../src/storage/dto/responses/access-key-get-response.dto"]: await import("../src/storage/dto/responses/access-key-get-response.dto"),
        ["../src/storage/dto/responses/access-key-rotate-response.dto"]: await import("../src/storage/dto/responses/access-key-rotate-response.dto"),
        ["../src/storage/dto/responses/access-key-buckets-list-response.dto"]: await import("../src/storage/dto/responses/access-key-buckets-list-response.dto"),
        ["../src/task/dto/responses/task-get-response.dto"]: await import("../src/task/dto/responses/task-get-response.dto"),
        ["../src/task/dto/responses/task-list-response.dto"]: await import("../src/task/dto/responses/task-list-response.dto"),
        ["../src/folders/dto/responses/folder-get-response.dto"]: await import("../src/folders/dto/responses/folder-get-response.dto"),
        ["../src/folders/dto/responses/folder-get-metadata-response.dto"]: await import("../src/folders/dto/responses/folder-get-metadata-response.dto"),
        ["../src/folders/dto/responses/folder-list-response.dto"]: await import("../src/folders/dto/responses/folder-list-response.dto"),
        ["../src/folders/dto/responses/folder-create-response.dto"]: await import("../src/folders/dto/responses/folder-create-response.dto"),
        ["../src/folders/dto/responses/folder-object-list-response.dto"]: await import("../src/folders/dto/responses/folder-object-list-response.dto"),
        ["../src/folders/dto/responses/folder-object-get-response.dto"]: await import("../src/folders/dto/responses/folder-object-get-response.dto"),
        ["../src/folders/dto/responses/folder-create-signed-urls-response.dto"]: await import("../src/folders/dto/responses/folder-create-signed-urls-response.dto"),
        ["../src/app/dto/responses/app-list-response.dto"]: await import("../src/app/dto/responses/app-list-response.dto"),
        ["../src/app/dto/responses/app-get-response.dto"]: await import("../src/app/dto/responses/app-get-response.dto")
    };
    return { "@nestjs/swagger": { "models": [[import("../src/users/dto/user-create-input.dto"), { "UserCreateInputDTO": {} }], [import("../src/users/dto/user-update-input.dto"), { "UserUpdateInputDTO": {} }], [import("../src/users/dto/users-list-query-params.dto"), { "UsersListQueryParamsDTO": {} }], [import("../src/users/dto/user.dto"), { "UserDTO": {} }], [import("../src/server/dto/responses/user-get-response.dto"), { "UserGetResponse": {} }], [import("../src/server/dto/responses/user-list-response.dto"), { "UserListResponse": {} }], [import("../src/users/dto/responses/viewer-get-response.dto"), { "ViewerGetResponse": {} }], [import("../src/users/dto/viewer-update-input.dto"), { "ViewerUpdateInputDTO": {} }], [import("../src/auth/dto/login-credentials.dto"), { "LoginCredentialsDTO": {} }], [import("../src/auth/dto/signup-credentials.dto"), { "SignupCredentialsDTO": {} }], [import("../src/auth/dto/responses/login-response.dto"), { "LoginResponse": {} }], [import("../src/auth/dto/responses/signup-response.dto"), { "SignupResponse": {} }], [import("../src/auth/dto/responses/token-refresh-response.dto"), { "TokenRefreshResponse": {} }], [import("../src/event/dto/event.dto"), { "EventDTO": {} }], [import("../src/app/dto/app.dto"), { "AppDTO": {} }], [import("../src/server/dto/server-storage-location.dto"), { "ServerStorageLocationDTO": {} }], [import("../src/server/dto/server-storage-location-input.dto"), { "ServerStorageLocationInputDTO": {} }], [import("../src/server/dto/settings.dto"), { "SettingsDTO": {} }], [import("../src/server/dto/user-storage-provision.dto"), { "UserStorageProvisionDTO": {} }], [import("../src/server/dto/user-storage-provision-input.dto"), { "UserStorageProvisionInputDTO": {} }], [import("../src/storage/dto/storage-location-input.dto"), { "StorageLocationInputDTO": {} }], [import("../src/folders/dto/folders-list-query-params.dto"), { "FoldersListQueryParamsDTO": {} }], [import("../src/event/dto/events-list-query-params.dto"), { "EventsListQueryParamsDTO": {} }], [import("../src/event/dto/responses/event-get-response.dto"), { "EventGetResponse": {} }], [import("../src/event/dto/responses/event-list-response.dto"), { "EventListResponse": {} }], [import("../src/server/dto/responses/setting-set-response.dto"), { "SettingSetResponse": {} }], [import("../src/server/dto/responses/settings-get-response.dto"), { "SettingsGetResponse": {} }], [import("../src/server/dto/set-setting-input.dto"), { "SetSettingInputDTO": {} }], [import("../src/server/dto/responses/server-storage-location-get-response.dto"), { "ServerStorageLocationGetResponse": {} }], [import("../src/server/dto/responses/user-storage-provision-get-response.dto"), { "UserStorageProvisionGetResponse": {} }], [import("../src/server/dto/responses/user-storage-provision-list-response.dto"), { "UserStorageProvisionListResponse": {} }], [import("../src/server/dto/user-storage-provisions-list-query-params.dto"), { "StorageProvisionsListQueryParamsDTO": {} }], [import("../src/storage/dto/access-key.dto"), { "AccessKeyDTO": {} }], [import("../src/storage/dto/rotate-access-key-input.dto"), { "RotateAccessKeyInputDTO": {} }], [import("../src/storage/dto/access-key-list-query-params.dto"), { "AccessKeyListQueryParamsDTO": {} }], [import("../src/storage/dto/responses/access-key-buckets-list-response.dto"), { "AccessKeyBucketsListResponseDTO": {} }], [import("../src/storage/dto/responses/access-key-get-response.dto"), { "AccessKeyGetResponse": {} }], [import("../src/storage/dto/responses/access-key-list-response.dto"), { "AccessKeyListResponse": {} }], [import("../src/storage/dto/responses/access-key-rotate-response.dto"), { "AccessKeyRotateResponse": {} }], [import("../src/task/dto/task.dto"), { "TaskDTO": {} }], [import("../src/task/dto/responses/task-get-response.dto"), { "TaskGetResponse": {} }], [import("../src/task/dto/responses/task-list-response.dto"), { "TaskListResponse": {} }], [import("../src/task/dto/folder-tasks-list-query-params.dto"), { "FolderTasksListQueryParamsDTO": {} }], [import("../src/task/dto/tasks-list-query-params.dto"), { "TasksListQueryParamsDTO": {} }], [import("../src/storage/dto/storage-location.dto"), { "StorageLocationDTO": {} }], [import("../src/folders/dto/folder.dto"), { "FolderDTO": {} }], [import("../src/folders/dto/folder-create-input.dto"), { "FolderCreateInputDTO": {} }], [import("../src/folders/dto/folder-create-signed-url-input.dto"), { "FolderCreateSignedUrlInputDTO": {} }], [import("../src/folders/dto/folder-object-content-attributes.dto"), { "FolderObjectContentAttributesDTO": {} }], [import("../src/folders/dto/folder-object-content-metadata.dto"), { "FolderObjectContentMetadataDTO": {} }], [import("../src/folders/dto/folder-object.dto"), { "FolderObjectDTO": {} }], [import("../src/folders/dto/folder-objects-list-query-params.dto"), { "FolderObjectsListQueryParamsDTO": {} }], [import("../src/folders/dto/responses/folder-create-response.dto"), { "FolderCreateResponse": {} }], [import("../src/folders/dto/responses/folder-create-signed-urls-response.dto"), { "FolderCreateSignedUrlsResponse": {} }], [import("../src/folders/dto/responses/folder-get-metadata-response.dto"), { "FolderGetMetadataResponse": {} }], [import("../src/folders/dto/responses/folder-get-response.dto"), { "FolderGetResponse": {} }], [import("../src/folders/dto/responses/folder-list-response.dto"), { "FolderListResponse": {} }], [import("../src/folders/dto/responses/folder-object-get-response.dto"), { "FolderObjectGetResponse": {} }], [import("../src/folders/dto/responses/folder-object-list-response.dto"), { "FolderObjectListResponse": {} }], [import("../src/folders/dto/trigger-app-task-input.dto"), { "TriggerAppTaskInputDTO": {} }], [import("../src/app/dto/responses/app-get-response.dto"), { "AppGetResponse": {} }], [import("../src/app/dto/responses/app-list-response.dto"), { "AppListResponse": {} }], [import("../src/users/dto/user-email-update-input.dto"), { "UserEmailUpdateInputDTO": {} }], [import("../src/app/dto/responses/app-worker.dto"), { "AppWorker": {} }], [import("../src/app/dto/task-config.dto"), { "TaskConfigDTO": {} }]], "controllers": [[import("../src/users/controllers/users.controller"), { "UsersController": { "createUser": { summary: "Create a user.", type: t["../src/server/dto/responses/user-get-response.dto"].UserGetResponse }, "updateUser": { summary: "Update a user.", type: t["../src/server/dto/responses/user-get-response.dto"].UserGetResponse }, "listUsers": { summary: "List the users.", type: t["../src/server/dto/responses/user-list-response.dto"].UserListResponse }, "getUser": { summary: "Get a user by id.", type: t["../src/server/dto/responses/user-get-response.dto"].UserGetResponse }, "deleteUser": { summary: "Delete a server user by id." } } }], [import("../src/users/controllers/viewer.controller"), { "ViewerController": { "getViewer": { type: t["../src/users/dto/responses/viewer-get-response.dto"].ViewerGetResponse }, "updateViewer": { type: t["../src/users/dto/responses/viewer-get-response.dto"].ViewerGetResponse } } }], [import("../src/auth/controllers/auth.controller"), { "AuthController": { "login": { summary: "Authenticate the user and return access and refresh tokens.", type: t["../src/auth/dto/responses/login-response.dto"].LoginResponse }, "signup": { summary: "Register a new user.", type: t["../src/auth/dto/responses/signup-response.dto"].SignupResponse }, "logout": { summary: "Logout. Kill the current session.", type: Boolean }, "refreshToken": { summary: "Refresh a session with a refresh token.", type: t["../src/auth/dto/responses/token-refresh-response.dto"].TokenRefreshResponse } } }], [import("../src/event/controllers/server-events.controller"), { "ServerEventsController": { "getEvent": { summary: "Get an event by id.", type: t["../src/event/dto/responses/event-get-response.dto"].EventGetResponse }, "listEvents": { summary: "List events.", type: t["../src/event/dto/responses/event-list-response.dto"].EventListResponse } } }], [import("../src/server/controllers/server.controller"), { "ServerController": { "getServerSettings": { summary: "Get the server settings object.", type: t["../src/server/dto/responses/settings-get-response.dto"].SettingsGetResponse }, "setServerSetting": { summary: "Set a setting in the server settings objects.", type: t["../src/server/dto/responses/setting-set-response.dto"].SettingSetResponse }, "resetServerSetting": { summary: "Reset a setting in the server settings objects.", type: t["../src/server/dto/responses/setting-set-response.dto"].SettingSetResponse } } }], [import("../src/server/controllers/server-storage-location.controller"), { "ServerStorageLocationController": { "getServerStorageLocation": { summary: "Get the server storage location.", type: t["../src/server/dto/responses/server-storage-location-get-response.dto"].ServerStorageLocationGetResponse }, "setServerStorageLocation": { summary: "Create a new server provision.", type: t["../src/server/dto/responses/server-storage-location-get-response.dto"].ServerStorageLocationGetResponse }, "deleteServerStorageLocation": { summary: "Delete any set server storage location." } } }], [import("../src/server/controllers/user-storage-provisions.controller"), { "UserStorageProvisionsController": { "listUserStorageProvisions": { summary: "List the user storage provisions.", type: t["../src/server/dto/responses/user-storage-provision-list-response.dto"].UserStorageProvisionListResponse }, "getUserStorageProvision": { summary: "Get a user storage provision by id.", type: t["../src/server/dto/responses/user-storage-provision-get-response.dto"].UserStorageProvisionGetResponse }, "createUserStorageProvision": { summary: "Create a new user storage provision.", type: t["../src/server/dto/responses/user-storage-provision-list-response.dto"].UserStorageProvisionListResponse }, "updateUserStorageProvision": { summary: "Update a server provision by id.", type: t["../src/server/dto/responses/user-storage-provision-list-response.dto"].UserStorageProvisionListResponse }, "deleteUserStorageProvision": { summary: "Delete a server provision by id.", type: t["../src/server/dto/responses/user-storage-provision-list-response.dto"].UserStorageProvisionListResponse } } }], [import("../src/storage/controllers/access-keys.controller"), { "AccessKeysController": { "listAccessKeys": { summary: "List access keys.", type: t["../src/storage/dto/responses/access-key-list-response.dto"].AccessKeyListResponse }, "getAccessKey": { summary: "Get an access key by id.", type: t["../src/storage/dto/responses/access-key-get-response.dto"].AccessKeyGetResponse }, "rotateAccessKey": { summary: "Rotate an access key.", type: t["../src/storage/dto/responses/access-key-rotate-response.dto"].AccessKeyRotateResponse }, "listAccessKeyBuckets": { summary: "List buckets for an access key.", type: t["../src/storage/dto/responses/access-key-buckets-list-response.dto"].AccessKeyBucketsListResponseDTO } } }], [import("../src/storage/controllers/server-access-keys.controller"), { "ServerAccessKeysController": { "listServerAccessKeys": { summary: "List server access keys.", type: t["../src/storage/dto/responses/access-key-list-response.dto"].AccessKeyListResponse }, "getServerAccessKey": { summary: "Get server access key by id.", type: t["../src/storage/dto/responses/access-key-get-response.dto"].AccessKeyGetResponse }, "rotateServerAccessKey": { summary: "Rotate a server access key.", type: t["../src/storage/dto/responses/access-key-rotate-response.dto"].AccessKeyRotateResponse } } }], [import("../src/task/controllers/server-tasks.controller"), { "ServerTasksController": { "getTask": { summary: "Get a task by id.", type: t["../src/task/dto/responses/task-get-response.dto"].TaskGetResponse }, "listTasks": { summary: "List tasks.", type: t["../src/task/dto/responses/task-list-response.dto"].TaskListResponse } } }], [import("../src/task/controllers/tasks.controller"), { "TasksController": { "getFolderTask": { summary: "Get a folder task by id.", type: t["../src/task/dto/responses/task-get-response.dto"].TaskGetResponse }, "listFolderTasks": { summary: "List tasks.", type: t["../src/task/dto/responses/task-list-response.dto"].TaskListResponse } } }], [import("../src/folders/controllers/folders.controller"), { "FoldersController": { "getFolder": { summary: "Get a folder by id.", type: t["../src/folders/dto/responses/folder-get-response.dto"].FolderGetResponse }, "getFolderMetadata": { summary: "Get the metadata for a folder by id.", type: t["../src/folders/dto/responses/folder-get-metadata-response.dto"].FolderGetMetadataResponse }, "listFolders": { summary: "List folders.", type: t["../src/folders/dto/responses/folder-list-response.dto"].FolderListResponse }, "createFolder": { summary: "Create a folder.", type: t["../src/folders/dto/responses/folder-create-response.dto"].FolderCreateResponse }, "deleteFolder": { summary: "Delete a folder by id." }, "reindexFolder": { summary: "Scan the underlying S3 location and update our local representation of it." }, "listFolderObjects": { summary: "List folder objects by folderId.", type: t["../src/folders/dto/responses/folder-object-list-response.dto"].FolderObjectListResponse }, "getFolderObject": { summary: "Get a folder object by folderId and objectKey.", type: t["../src/folders/dto/responses/folder-object-get-response.dto"].FolderObjectGetResponse }, "deleteFolderObject": { summary: "Delete a folder object by folderId and objectKey." }, "createPresignedUrls": { summary: "Create presigned urls for objects in a folder.", type: t["../src/folders/dto/responses/folder-create-signed-urls-response.dto"].FolderCreateSignedUrlsResponse }, "refreshFolderObjectS3Metadata": { summary: "Scan the object again in the underlying storage, and update its state in our db.", type: t["../src/folders/dto/responses/folder-object-get-response.dto"].FolderObjectGetResponse }, "handleAppTaskTrigger": { summary: "Handle app task trigger" } } }], [import("../src/app/controllers/apps.controller"), { "AppsController": { "listApps": { type: t["../src/app/dto/responses/app-list-response.dto"].AppListResponse }, "getApp": { type: t["../src/app/dto/responses/app-get-response.dto"].AppGetResponse } } }]] } };
};