export const schema = {
    "openapi": "3.0.0",
    "paths": {
        "/auth/login": {
            "post": {
                "operationId": "login",
                "parameters": [],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/LoginCredentialsDTO"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Authenticate the user and return access and refresh tokens.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/LoginResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Auth"
                ]
            }
        },
        "/auth/signup": {
            "post": {
                "operationId": "signup",
                "parameters": [],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/SignupCredentialsDTO"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Register a new user.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/SignupResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Auth"
                ]
            }
        },
        "/auth/logout": {
            "post": {
                "operationId": "logout",
                "parameters": [],
                "responses": {
                    "201": {
                        "description": "Logout. Kill the current session.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "boolean"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Auth"
                ]
            }
        },
        "/auth/refresh-token": {
            "post": {
                "operationId": "refreshToken",
                "parameters": [],
                "responses": {
                    "201": {
                        "description": "Logout. Kill the current session.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/TokenRefreshResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Auth"
                ]
            }
        },
        "/viewer": {
            "get": {
                "operationId": "getViewer",
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ViewerGetResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Viewer"
                ]
            },
            "put": {
                "operationId": "updateViewer",
                "parameters": [],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/UpdateViewerInputDTO"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ViewerGetResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Viewer"
                ]
            }
        },
        "/folders/{folderId}": {
            "get": {
                "operationId": "getFolder",
                "parameters": [
                    {
                        "name": "folderId",
                        "required": true,
                        "in": "path",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Get a folder by id.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/FolderGetResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ]
            }
        },
        "/folders": {
            "post": {
                "operationId": "createFolder",
                "parameters": [],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/FolderCreateInputDTO"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Create a folder.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/FolderCreateResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ]
            }
        },
        "/folders/{folderId}/rescan": {
            "post": {
                "operationId": "rescanFolder",
                "parameters": [
                    {
                        "name": "folderId",
                        "required": true,
                        "in": "path",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Scan the underlying S3 location and update our local representation of it."
                    }
                },
                "tags": [
                    "Folders"
                ]
            }
        },
        "/folders/{folderId}/objects": {
            "get": {
                "operationId": "listFolderObjects",
                "parameters": [
                    {
                        "name": "folderId",
                        "required": true,
                        "in": "path",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "search",
                        "required": true,
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "offset",
                        "required": true,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    },
                    {
                        "name": "limit",
                        "required": true,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "List folder objects.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/FolderObjectsListResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ]
            }
        },
        "/server/settings": {
            "get": {
                "operationId": "getServerSettings",
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "Get the server settings object.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Server"
                ]
            }
        },
        "/server/settings/{settingKey}": {
            "put": {
                "operationId": "setServerSetting",
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "Set a setting in the server settings objects.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Server"
                ]
            }
        },
        "/events/{eventId}": {
            "get": {
                "operationId": "getAppInfo",
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "Get an event by id.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/EventDTO"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Event"
                ]
            }
        }
    },
    "info": {
        "title": "@stellariscloud/api",
        "description": "The Stellaris Cloud core API",
        "version": "1.0",
        "contact": {}
    },
    "tags": [],
    "servers": [],
    "components": {
        "securitySchemes": {
            "bearer": {
                "scheme": "bearer",
                "bearerFormat": "JWT",
                "type": "http"
            }
        },
        "schemas": {
            "LoginCredentialsDTO": {
                "type": "object",
                "properties": {
                    "login": {
                        "type": "string"
                    },
                    "password": {
                        "type": "string"
                    }
                },
                "required": [
                    "login",
                    "password"
                ]
            },
            "LoginResponse": {
                "type": "object",
                "properties": {
                    "session": {
                        "type": "object",
                        "properties": {
                            "accessToken": {
                                "type": "string"
                            },
                            "refreshToken": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "accessToken",
                            "refreshToken"
                        ]
                    }
                },
                "required": [
                    "session"
                ]
            },
            "SignupCredentialsDTO": {
                "type": "object",
                "properties": {
                    "username": {
                        "type": "string",
                        "minLength": 3,
                        "maxLength": 64
                    },
                    "email": {
                        "type": "string",
                        "maxLength": 255
                    },
                    "password": {
                        "type": "string",
                        "maxLength": 255
                    }
                },
                "required": [
                    "username",
                    "password"
                ]
            },
            "SignupResponse": {
                "type": "object",
                "properties": {
                    "user": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": [
                                    "string",
                                    "null"
                                ]
                            },
                            "email": {
                                "type": [
                                    "string",
                                    "null"
                                ]
                            },
                            "emailVerified": {
                                "type": "boolean"
                            },
                            "isAdmin": {
                                "type": "boolean"
                            },
                            "username": {
                                "type": "string"
                            },
                            "permissions": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "createdAt": {
                                "type": "string",
                                "format": "date-time"
                            },
                            "updatedAt": {
                                "type": "string",
                                "format": "date-time"
                            }
                        },
                        "required": [
                            "emailVerified",
                            "isAdmin",
                            "username",
                            "permissions",
                            "createdAt",
                            "updatedAt"
                        ]
                    }
                },
                "required": [
                    "user"
                ]
            },
            "TokenRefreshResponse": {
                "type": "object",
                "properties": {
                    "session": {
                        "type": "object",
                        "properties": {
                            "accessToken": {
                                "type": "string"
                            },
                            "refreshToken": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "accessToken",
                            "refreshToken"
                        ]
                    }
                },
                "required": [
                    "session"
                ]
            },
            "ViewerGetResponse": {
                "type": "object",
                "properties": {
                    "user": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": [
                                    "string",
                                    "null"
                                ]
                            },
                            "email": {
                                "type": [
                                    "string",
                                    "null"
                                ]
                            },
                            "emailVerified": {
                                "type": "boolean"
                            },
                            "isAdmin": {
                                "type": "boolean"
                            },
                            "username": {
                                "type": "string"
                            },
                            "permissions": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "createdAt": {
                                "type": "string",
                                "format": "date-time"
                            },
                            "updatedAt": {
                                "type": "string",
                                "format": "date-time"
                            }
                        },
                        "required": [
                            "emailVerified",
                            "isAdmin",
                            "username",
                            "permissions",
                            "createdAt",
                            "updatedAt"
                        ]
                    }
                },
                "required": [
                    "user"
                ]
            },
            "UpdateViewerInputDTO": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    }
                },
                "required": [
                    "name"
                ]
            },
            "FolderGetResponse": {
                "type": "object",
                "properties": {
                    "folder": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string"
                            },
                            "ownerId": {
                                "type": "string"
                            },
                            "name": {
                                "type": "string"
                            },
                            "metadataLocation": {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "type": "string"
                                    },
                                    "userId": {
                                        "type": "string"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "endpoint": {
                                        "type": "string"
                                    },
                                    "region": {
                                        "type": "string"
                                    },
                                    "bucket": {
                                        "type": "string"
                                    },
                                    "prefix": {
                                        "type": "string"
                                    },
                                    "accessKeyId": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "id",
                                    "name",
                                    "endpoint",
                                    "region",
                                    "bucket",
                                    "accessKeyId"
                                ]
                            },
                            "contentLocation": {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "type": "string"
                                    },
                                    "userId": {
                                        "type": "string"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "endpoint": {
                                        "type": "string"
                                    },
                                    "region": {
                                        "type": "string"
                                    },
                                    "bucket": {
                                        "type": "string"
                                    },
                                    "prefix": {
                                        "type": "string"
                                    },
                                    "accessKeyId": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "id",
                                    "name",
                                    "endpoint",
                                    "region",
                                    "bucket",
                                    "accessKeyId"
                                ]
                            }
                        },
                        "required": [
                            "id",
                            "ownerId",
                            "name",
                            "metadataLocation",
                            "contentLocation"
                        ]
                    },
                    "permissions": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                },
                "required": [
                    "folder",
                    "permissions"
                ]
            },
            "FolderCreateInputDTO": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "metadataLocation": {
                        "type": "object",
                        "properties": {
                            "serverLocationId": {
                                "type": "string"
                            },
                            "userLocationId": {
                                "type": "string"
                            },
                            "userLocationBucketOverride": {
                                "type": "string"
                            },
                            "userLocationPrefixOverride": {
                                "type": "string"
                            },
                            "accessKeyId": {
                                "type": "string"
                            },
                            "secretAccessKey": {
                                "type": "string"
                            },
                            "endpoint": {
                                "type": "string"
                            },
                            "bucket": {
                                "type": "string"
                            },
                            "region": {
                                "type": "string"
                            },
                            "prefix": {
                                "type": "string"
                            }
                        }
                    },
                    "contentLocation": {
                        "type": "object",
                        "properties": {
                            "serverLocationId": {
                                "type": "string"
                            },
                            "userLocationId": {
                                "type": "string"
                            },
                            "userLocationBucketOverride": {
                                "type": "string"
                            },
                            "userLocationPrefixOverride": {
                                "type": "string"
                            },
                            "accessKeyId": {
                                "type": "string"
                            },
                            "secretAccessKey": {
                                "type": "string"
                            },
                            "endpoint": {
                                "type": "string"
                            },
                            "bucket": {
                                "type": "string"
                            },
                            "region": {
                                "type": "string"
                            },
                            "prefix": {
                                "type": "string"
                            }
                        }
                    }
                },
                "required": [
                    "name",
                    "metadataLocation",
                    "contentLocation"
                ]
            },
            "FolderCreateResponse": {
                "type": "object",
                "properties": {
                    "folder": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string"
                            },
                            "ownerId": {
                                "type": "string"
                            },
                            "name": {
                                "type": "string"
                            },
                            "metadataLocation": {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "type": "string"
                                    },
                                    "userId": {
                                        "type": "string"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "endpoint": {
                                        "type": "string"
                                    },
                                    "region": {
                                        "type": "string"
                                    },
                                    "bucket": {
                                        "type": "string"
                                    },
                                    "prefix": {
                                        "type": "string"
                                    },
                                    "accessKeyId": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "id",
                                    "name",
                                    "endpoint",
                                    "region",
                                    "bucket",
                                    "accessKeyId"
                                ]
                            },
                            "contentLocation": {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "type": "string"
                                    },
                                    "userId": {
                                        "type": "string"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "endpoint": {
                                        "type": "string"
                                    },
                                    "region": {
                                        "type": "string"
                                    },
                                    "bucket": {
                                        "type": "string"
                                    },
                                    "prefix": {
                                        "type": "string"
                                    },
                                    "accessKeyId": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "id",
                                    "name",
                                    "endpoint",
                                    "region",
                                    "bucket",
                                    "accessKeyId"
                                ]
                            }
                        },
                        "required": [
                            "id",
                            "ownerId",
                            "name",
                            "metadataLocation",
                            "contentLocation"
                        ]
                    }
                },
                "required": [
                    "folder"
                ]
            },
            "FolderObjectsListResponse": {
                "type": "object",
                "properties": {
                    "meta": {
                        "type": "object",
                        "properties": {
                            "totalCount": {
                                "type": "number"
                            }
                        },
                        "required": [
                            "totalCount"
                        ]
                    },
                    "result": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "string"
                                },
                                "objectKey": {
                                    "type": "string"
                                },
                                "folderId": {
                                    "type": "string"
                                },
                                "hash": {
                                    "type": [
                                        "string",
                                        "null"
                                    ]
                                },
                                "lastModified": {
                                    "type": "number"
                                },
                                "eTag": {
                                    "type": "string"
                                },
                                "sizeBytes": {
                                    "type": "number"
                                },
                                "mimeType": {
                                    "type": "string"
                                },
                                "mediaType": {
                                    "type": "string",
                                    "enum": [
                                        "IMAGE",
                                        "VIDEO",
                                        "AUDIO",
                                        "DOCUMENT",
                                        "UNKNOWN"
                                    ]
                                }
                            },
                            "required": [
                                "id",
                                "objectKey",
                                "folderId",
                                "lastModified",
                                "eTag",
                                "sizeBytes",
                                "mimeType",
                                "mediaType"
                            ]
                        }
                    }
                },
                "required": [
                    "meta",
                    "result"
                ]
            },
            "EventDTO": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "eventKey": {
                        "type": "string"
                    }
                },
                "required": [
                    "id",
                    "eventKey"
                ]
            }
        }
    }
};
