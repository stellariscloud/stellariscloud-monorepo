"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
exports.schema = {
    "components": {
        "examples": {},
        "headers": {},
        "parameters": {},
        "requestBodies": {},
        "responses": {},
        "schemas": {
            "ErrorMetaData": {
                "properties": {},
                "type": "object",
                "additionalProperties": {}
            },
            "ErrorData": {
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "title": {
                        "type": "string"
                    },
                    "detail": {
                        "type": "string"
                    },
                    "meta": {
                        "$ref": "#/components/schemas/ErrorMetaData"
                    },
                    "pointer": {
                        "type": "string"
                    }
                },
                "required": [
                    "code"
                ],
                "type": "object",
                "additionalProperties": false
            },
            "ErrorResponse": {
                "properties": {
                    "errors": {
                        "items": {
                            "$ref": "#/components/schemas/ErrorData"
                        },
                        "type": "array"
                    }
                },
                "required": [
                    "errors"
                ],
                "type": "object",
                "additionalProperties": false
            },
            "AppConfigCreateData": {
                "properties": {
                    "key": {
                        "type": "string"
                    },
                    "value": {}
                },
                "required": [
                    "key"
                ],
                "type": "object",
                "additionalProperties": false
            },
            "AppConfigGetResponse": {
                "properties": {
                    "value": {}
                },
                "required": [
                    "value"
                ],
                "type": "object",
                "additionalProperties": false
            },
            "SessionResponse": {
                "properties": {
                    "data": {
                        "properties": {
                            "expiresAt": {
                                "type": "string",
                                "format": "date-time"
                            },
                            "refreshToken": {
                                "type": "string"
                            },
                            "accessToken": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "expiresAt",
                            "refreshToken",
                            "accessToken"
                        ],
                        "type": "object"
                    }
                },
                "required": [
                    "data"
                ],
                "type": "object",
                "additionalProperties": false
            },
            "LoginParams": {
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
                ],
                "type": "object",
                "additionalProperties": false
            },
            "FolderData": {
                "properties": {
                    "createdAt": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "updatedAt": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "id": {
                        "type": "string"
                    },
                    "ownerId": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "accessKeyId": {
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
                    }
                },
                "required": [
                    "createdAt",
                    "updatedAt",
                    "id",
                    "name",
                    "accessKeyId",
                    "endpoint",
                    "bucket"
                ],
                "type": "object",
                "additionalProperties": false
            },
            "FolderPermissionName": {
                "enum": [
                    "folder_refresh",
                    "folder_manage_shares",
                    "folder_forget",
                    "object_edit",
                    "object_manage",
                    "tag_create",
                    "tag_associate"
                ],
                "type": "string"
            },
            "FolderAndPermission": {
                "properties": {
                    "folder": {
                        "$ref": "#/components/schemas/FolderData"
                    },
                    "permissions": {
                        "items": {
                            "type": "string"
                        },
                        "type": "array"
                    }
                },
                "required": [
                    "folder",
                    "permissions"
                ],
                "type": "object",
                "additionalProperties": false
            },
            "ListFoldersResponse": {
                "properties": {
                    "meta": {
                        "properties": {
                            "totalCount": {
                                "type": "number",
                                "format": "double"
                            }
                        },
                        "required": [
                            "totalCount"
                        ],
                        "type": "object"
                    },
                    "result": {
                        "items": {
                            "$ref": "#/components/schemas/FolderAndPermission"
                        },
                        "type": "array"
                    }
                },
                "required": [
                    "meta",
                    "result"
                ],
                "type": "object",
                "additionalProperties": false
            },
            "ImagePreview": {
                "properties": {
                    "size": {
                        "type": "number",
                        "format": "double"
                    },
                    "path": {
                        "type": "string"
                    }
                },
                "required": [
                    "size",
                    "path"
                ],
                "type": "object",
                "additionalProperties": false
            },
            "ImagePreviews": {
                "properties": {
                    "large": {
                        "$ref": "#/components/schemas/ImagePreview"
                    },
                    "medium": {
                        "$ref": "#/components/schemas/ImagePreview"
                    },
                    "small": {
                        "$ref": "#/components/schemas/ImagePreview"
                    }
                },
                "type": "object",
                "additionalProperties": false
            },
            "FolderObjectContentMetadata": {
                "properties": {
                    "hash": {
                        "type": "string"
                    },
                    "mimeType": {
                        "type": "string"
                    },
                    "previews": {
                        "$ref": "#/components/schemas/ImagePreviews"
                    },
                    "lengthMilliseconds": {
                        "type": "number",
                        "format": "double"
                    },
                    "imageOrientation": {
                        "type": "number",
                        "format": "double"
                    },
                    "height": {
                        "type": "number",
                        "format": "double"
                    },
                    "width": {
                        "type": "number",
                        "format": "double"
                    },
                    "createdAt": {
                        "type": "string",
                        "format": "date-time"
                    }
                },
                "required": [
                    "hash",
                    "mimeType",
                    "previews",
                    "lengthMilliseconds",
                    "height",
                    "width"
                ],
                "type": "object",
                "additionalProperties": false
            },
            "MediaType": {
                "enum": [
                    "IMAGE",
                    "VIDEO",
                    "AUDIO",
                    "DOCUMENT",
                    "UNKNOWN"
                ],
                "type": "string"
            },
            "FolderObjectData": {
                "properties": {
                    "createdAt": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "updatedAt": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "id": {
                        "type": "string"
                    },
                    "objectKey": {
                        "type": "string"
                    },
                    "folder": {
                        "properties": {
                            "id": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "id"
                        ],
                        "type": "object"
                    },
                    "contentMetadata": {
                        "$ref": "#/components/schemas/FolderObjectContentMetadata"
                    },
                    "lastModified": {
                        "type": "number",
                        "format": "double"
                    },
                    "tags": {
                        "items": {
                            "type": "string"
                        },
                        "type": "array"
                    },
                    "eTag": {
                        "type": "string"
                    },
                    "sizeBytes": {
                        "type": "number",
                        "format": "double"
                    },
                    "mediaType": {
                        "$ref": "#/components/schemas/MediaType"
                    }
                },
                "required": [
                    "createdAt",
                    "updatedAt",
                    "id",
                    "objectKey",
                    "folder",
                    "lastModified",
                    "tags",
                    "eTag",
                    "sizeBytes",
                    "mediaType"
                ],
                "type": "object",
                "additionalProperties": false
            },
            "FolderShareConfig": {
                "properties": {
                    "permissions": {
                        "items": {
                            "$ref": "#/components/schemas/FolderPermissionName"
                        },
                        "type": "array"
                    }
                },
                "required": [
                    "permissions"
                ],
                "type": "object",
                "additionalProperties": false
            },
            "FolderShareData": {
                "properties": {
                    "createdAt": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "updatedAt": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "id": {
                        "type": "string"
                    },
                    "userId": {
                        "type": "string"
                    },
                    "userLabel": {
                        "type": "string"
                    },
                    "userInviteEmail": {
                        "type": "string"
                    },
                    "folder": {
                        "properties": {
                            "id": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "id"
                        ],
                        "type": "object"
                    },
                    "shareConfiguration": {
                        "$ref": "#/components/schemas/FolderShareConfig"
                    }
                },
                "required": [
                    "createdAt",
                    "updatedAt",
                    "id",
                    "userLabel",
                    "userInviteEmail",
                    "folder",
                    "shareConfiguration"
                ],
                "type": "object",
                "additionalProperties": false
            },
            "CreateFolderSharePayload": {
                "properties": {
                    "userInviteEmail": {
                        "type": "string"
                    },
                    "shareConfiguration": {
                        "$ref": "#/components/schemas/FolderShareConfig"
                    }
                },
                "required": [
                    "userInviteEmail",
                    "shareConfiguration"
                ],
                "type": "object",
                "additionalProperties": false
            },
            "UpdateFolderSharePayload": {
                "properties": {
                    "shareConfiguration": {
                        "$ref": "#/components/schemas/FolderShareConfig"
                    }
                },
                "required": [
                    "shareConfiguration"
                ],
                "type": "object",
                "additionalProperties": false
            },
            "ObjectTagData": {
                "properties": {
                    "createdAt": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "updatedAt": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "id": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    }
                },
                "required": [
                    "createdAt",
                    "updatedAt",
                    "id",
                    "name"
                ],
                "type": "object",
                "additionalProperties": false
            },
            "SignedURLsRequestPayload": {
                "items": {
                    "properties": {
                        "method": {
                            "type": "string",
                            "enum": [
                                "PUT",
                                "DELETE",
                                "GET"
                            ]
                        },
                        "objectKey": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "method",
                        "objectKey"
                    ],
                    "type": "object"
                },
                "type": "array"
            },
            "S3ConnectionData": {
                "properties": {
                    "createdAt": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "updatedAt": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "id": {
                        "type": "string"
                    },
                    "ownerId": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "accessKeyId": {
                        "type": "string"
                    },
                    "endpoint": {
                        "type": "string"
                    },
                    "region": {
                        "type": "string"
                    }
                },
                "required": [
                    "createdAt",
                    "updatedAt",
                    "id",
                    "name",
                    "accessKeyId",
                    "endpoint"
                ],
                "type": "object",
                "additionalProperties": false
            },
            "PlatformRole": {
                "enum": [
                    "ANONYMOUS",
                    "AUTHENTICATED",
                    "ADMIN"
                ],
                "type": "string"
            },
            "EmailFormat": {
                "type": "string",
                "format": "email",
                "maxLength": 255
            },
            "UserData": {
                "properties": {
                    "createdAt": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "updatedAt": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "id": {
                        "type": "string"
                    },
                    "role": {
                        "$ref": "#/components/schemas/PlatformRole"
                    },
                    "email": {
                        "$ref": "#/components/schemas/EmailFormat"
                    },
                    "username": {
                        "type": "string"
                    }
                },
                "required": [
                    "createdAt",
                    "updatedAt",
                    "id",
                    "role",
                    "username"
                ],
                "type": "object",
                "additionalProperties": false
            }
        },
        "securitySchemes": {
            "RefreshToken": {
                "type": "apiKey",
                "in": "query",
                "name": "refresh_token"
            },
            "AccessToken": {
                "type": "http",
                "scheme": "bearer",
                "bearerFormat": "JWT"
            }
        }
    },
    "info": {
        "title": "@stellariscloud/api",
        "version": "1.0.0",
        "contact": {}
    },
    "openapi": "3.0.0",
    "paths": {
        "/app-config": {
            "put": {
                "operationId": "setAppConfig",
                "responses": {
                    "201": {
                        "description": ""
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "AppConfig"
                ],
                "security": [
                    {
                        "AccessToken": [
                            "app-config:create"
                        ]
                    }
                ],
                "parameters": [],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AppConfigCreateData"
                            }
                        }
                    }
                }
            }
        },
        "/app-config/{key}": {
            "get": {
                "operationId": "getAppConfig",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/AppConfigGetResponse"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "AppConfig"
                ],
                "security": [
                    {
                        "AccessToken": [
                            "app-config:read"
                        ]
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "key",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ]
            }
        },
        "/token": {
            "post": {
                "operationId": "refreshToken",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/SessionResponse"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Auth"
                ],
                "security": [
                    {
                        "RefreshToken": []
                    }
                ],
                "parameters": []
            }
        },
        "/login": {
            "post": {
                "operationId": "login",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/SessionResponse"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Auth"
                ],
                "security": [
                    {
                        "Public": []
                    }
                ],
                "parameters": [],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/LoginParams"
                            }
                        }
                    }
                }
            }
        },
        "/logout": {
            "get": {
                "operationId": "logout",
                "responses": {
                    "204": {
                        "description": ""
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Auth"
                ],
                "security": [
                    {
                        "AccessToken": []
                    },
                    {
                        "RefreshToken": []
                    }
                ],
                "parameters": []
            }
        },
        "/folders": {
            "post": {
                "operationId": "createFolder",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "folder": {
                                            "$ref": "#/components/schemas/FolderData"
                                        }
                                    },
                                    "required": [
                                        "folder"
                                    ],
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "prefix": {
                                        "type": "string"
                                    },
                                    "bucket": {
                                        "type": "string"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "s3ConnectionId": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "bucket",
                                    "name",
                                    "s3ConnectionId"
                                ],
                                "type": "object"
                            }
                        }
                    }
                }
            },
            "get": {
                "operationId": "listFolders",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListFoldersResponse"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": []
            }
        },
        "/folders/{folderId}": {
            "get": {
                "operationId": "getFolder",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "permissions": {
                                            "items": {
                                                "$ref": "#/components/schemas/FolderPermissionName"
                                            },
                                            "type": "array"
                                        },
                                        "folder": {
                                            "$ref": "#/components/schemas/FolderData"
                                        }
                                    },
                                    "required": [
                                        "permissions",
                                        "folder"
                                    ],
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ]
            },
            "delete": {
                "operationId": "deleteFolder",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "success": {
                                            "type": "boolean"
                                        }
                                    },
                                    "required": [
                                        "success"
                                    ],
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ]
            }
        },
        "/folders/{folderId}/metadata": {
            "get": {
                "operationId": "getFolderMetadata",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "totalSizeBytes": {
                                            "type": "number",
                                            "format": "double"
                                        },
                                        "totalCount": {
                                            "type": "number",
                                            "format": "double"
                                        }
                                    },
                                    "required": [
                                        "totalSizeBytes",
                                        "totalCount"
                                    ],
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ]
            }
        },
        "/folders/{folderId}/objects/{objectKey}": {
            "get": {
                "operationId": "getFolderObject",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/FolderObjectData"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "in": "path",
                        "name": "objectKey",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ]
            },
            "delete": {
                "operationId": "deleteFolderObject",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "success": {
                                            "type": "boolean"
                                        }
                                    },
                                    "required": [
                                        "success"
                                    ],
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "in": "path",
                        "name": "objectKey",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ]
            },
            "put": {
                "operationId": "refreshFolderObjectS3Metadata",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/FolderObjectData"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "in": "path",
                        "name": "objectKey",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "eTag": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            }
                        }
                    }
                }
            }
        },
        "/folders/{folderId}/objects": {
            "get": {
                "operationId": "listFolderObjects",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "meta": {
                                            "properties": {
                                                "totalCount": {
                                                    "type": "number",
                                                    "format": "double"
                                                }
                                            },
                                            "required": [
                                                "totalCount"
                                            ],
                                            "type": "object"
                                        },
                                        "result": {
                                            "items": {
                                                "$ref": "#/components/schemas/FolderObjectData"
                                            },
                                            "type": "array"
                                        }
                                    },
                                    "required": [
                                        "meta",
                                        "result"
                                    ],
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "in": "query",
                        "name": "search",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "in": "query",
                        "name": "tagId",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "in": "query",
                        "name": "offset",
                        "required": false,
                        "schema": {
                            "format": "double",
                            "type": "number"
                        }
                    },
                    {
                        "in": "query",
                        "name": "limit",
                        "required": false,
                        "schema": {
                            "format": "double",
                            "type": "number"
                        }
                    }
                ]
            }
        },
        "/folders/{folderId}/shares": {
            "post": {
                "operationId": "createFolderShare",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/FolderShareData"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/CreateFolderSharePayload"
                            }
                        }
                    }
                }
            },
            "get": {
                "operationId": "listFolderShares",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "meta": {
                                            "properties": {
                                                "totalCount": {
                                                    "type": "number",
                                                    "format": "double"
                                                }
                                            },
                                            "required": [
                                                "totalCount"
                                            ],
                                            "type": "object"
                                        },
                                        "result": {
                                            "items": {
                                                "$ref": "#/components/schemas/FolderShareData"
                                            },
                                            "type": "array"
                                        }
                                    },
                                    "required": [
                                        "meta",
                                        "result"
                                    ],
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ]
            }
        },
        "/folders/{folderId}/shares/{shareId}": {
            "delete": {
                "operationId": "deleteFolderShare",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "success": {
                                            "type": "boolean"
                                        }
                                    },
                                    "required": [
                                        "success"
                                    ],
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "in": "path",
                        "name": "shareId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ]
            },
            "put": {
                "operationId": "updateFolderShare",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/FolderShareData"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "in": "path",
                        "name": "shareId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/UpdateFolderSharePayload"
                            }
                        }
                    }
                }
            }
        },
        "/folders/{folderId}/tags": {
            "get": {
                "operationId": "listTags",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "meta": {
                                            "properties": {
                                                "totalCount": {
                                                    "type": "number",
                                                    "format": "double"
                                                }
                                            },
                                            "required": [
                                                "totalCount"
                                            ],
                                            "type": "object"
                                        },
                                        "result": {
                                            "items": {
                                                "$ref": "#/components/schemas/ObjectTagData"
                                            },
                                            "type": "array"
                                        }
                                    },
                                    "required": [
                                        "meta",
                                        "result"
                                    ],
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ]
            },
            "post": {
                "operationId": "createTag",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ObjectTagData"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "name": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "name"
                                ],
                                "type": "object"
                            }
                        }
                    }
                }
            }
        },
        "/folders/{folderId}/tags/{tagId}": {
            "post": {
                "operationId": "updateTag",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ObjectTagData"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "in": "path",
                        "name": "tagId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "name": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "name"
                                ],
                                "type": "object"
                            }
                        }
                    }
                }
            },
            "delete": {
                "operationId": "deleteTag",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "success": {
                                            "type": "boolean"
                                        }
                                    },
                                    "required": [
                                        "success"
                                    ],
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "in": "path",
                        "name": "tagId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ]
            }
        },
        "/folders/{folderId}/objects/{objectKey}/{tagId}": {
            "post": {
                "operationId": "tagObject",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "success": {
                                            "type": "boolean"
                                        }
                                    },
                                    "required": [
                                        "success"
                                    ],
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "in": "path",
                        "name": "objectKey",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "in": "path",
                        "name": "tagId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ]
            },
            "delete": {
                "operationId": "untagObject",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "success": {
                                            "type": "boolean"
                                        }
                                    },
                                    "required": [
                                        "success"
                                    ],
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "in": "path",
                        "name": "objectKey",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "in": "path",
                        "name": "tagId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ]
            }
        },
        "/folders/{folderId}/objects/{objectKey}/content-metadata": {
            "put": {
                "operationId": "updateFolderObjectContentMetadata",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/FolderObjectData"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "in": "path",
                        "name": "objectKey",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/FolderObjectContentMetadata"
                            }
                        }
                    }
                }
            }
        },
        "/folders/{folderId}/refresh": {
            "post": {
                "operationId": "refreshFolder",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "boolean"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ]
            }
        },
        "/folders/{folderId}/presigned-urls": {
            "post": {
                "operationId": "createPresignedURLs",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "items": {
                                        "properties": {
                                            "method": {
                                                "type": "string",
                                                "enum": [
                                                    "PUT",
                                                    "DELETE",
                                                    "GET"
                                                ]
                                            },
                                            "url": {
                                                "type": "string"
                                            },
                                            "objectKey": {
                                                "type": "string"
                                            }
                                        },
                                        "required": [
                                            "method",
                                            "url",
                                            "objectKey"
                                        ],
                                        "type": "object"
                                    },
                                    "type": "array"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Folders"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "folderId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/SignedURLsRequestPayload"
                            }
                        }
                    }
                }
            }
        },
        "/s3-connections/{s3ConnectionId}": {
            "get": {
                "operationId": "getS3Connection",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/S3ConnectionData"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "S3Connections"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "s3ConnectionId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ]
            },
            "post": {
                "operationId": "deleteS3Connection",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "success": {
                                            "type": "boolean"
                                        }
                                    },
                                    "required": [
                                        "success"
                                    ],
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "S3Connections"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "s3ConnectionId",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ]
            }
        },
        "/s3-connections": {
            "get": {
                "operationId": "listS3Connections",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "result": {
                                            "items": {
                                                "$ref": "#/components/schemas/S3ConnectionData"
                                            },
                                            "type": "array"
                                        },
                                        "meta": {
                                            "properties": {
                                                "totalCount": {
                                                    "type": "number",
                                                    "format": "double"
                                                }
                                            },
                                            "required": [
                                                "totalCount"
                                            ],
                                            "type": "object"
                                        }
                                    },
                                    "required": [
                                        "result",
                                        "meta"
                                    ],
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "S3Connections"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": []
            },
            "post": {
                "operationId": "createS3Connection",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/S3ConnectionData"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "S3Connections"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "region": {
                                        "type": "string"
                                    },
                                    "endpoint": {
                                        "type": "string"
                                    },
                                    "secretAccessKey": {
                                        "type": "string"
                                    },
                                    "accessKeyId": {
                                        "type": "string"
                                    },
                                    "name": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "region",
                                    "endpoint",
                                    "secretAccessKey",
                                    "accessKeyId",
                                    "name"
                                ],
                                "type": "object"
                            }
                        }
                    }
                }
            }
        },
        "/s3-connections/test": {
            "post": {
                "operationId": "testS3Connection",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "success": {
                                            "type": "boolean"
                                        }
                                    },
                                    "required": [
                                        "success"
                                    ],
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "4XX": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "S3Connections"
                ],
                "security": [
                    {
                        "AccessToken": []
                    }
                ],
                "parameters": [],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "region": {
                                        "type": "string"
                                    },
                                    "endpoint": {
                                        "type": "string"
                                    },
                                    "secretAccessKey": {
                                        "type": "string"
                                    },
                                    "accessKeyId": {
                                        "type": "string"
                                    },
                                    "name": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "region",
                                    "endpoint",
                                    "secretAccessKey",
                                    "accessKeyId",
                                    "name"
                                ],
                                "type": "object"
                            }
                        }
                    }
                }
            }
        },
        "/viewer": {
            "get": {
                "operationId": "getViewer",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "data": {
                                            "$ref": "#/components/schemas/UserData"
                                        }
                                    },
                                    "required": [
                                        "data"
                                    ],
                                    "type": "object"
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "Viewer"
                ],
                "security": [
                    {
                        "AccessToken": [
                            "viewer:read"
                        ]
                    }
                ],
                "parameters": []
            }
        }
    },
    "servers": [
        {
            "url": "http://localhost:3001/api/v1"
        }
    ]
};
