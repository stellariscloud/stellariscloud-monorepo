/* tslint:disable */
/* eslint-disable */
/**
 * @stellariscloud/api
 * The Stellaris Cloud core API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface EventDTO
 */
export interface EventDTO {
    /**
     * 
     * @type {string}
     * @memberof EventDTO
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof EventDTO
     */
    'eventKey': string;
}
/**
 * 
 * @export
 * @interface LoginCredentialsDTO
 */
export interface LoginCredentialsDTO {
    /**
     * 
     * @type {string}
     * @memberof LoginCredentialsDTO
     */
    'login': string;
    /**
     * 
     * @type {string}
     * @memberof LoginCredentialsDTO
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface LoginResponse
 */
export interface LoginResponse {
    /**
     * 
     * @type {LoginResponseSession}
     * @memberof LoginResponse
     */
    'session': LoginResponseSession;
}
/**
 * 
 * @export
 * @interface LoginResponseSession
 */
export interface LoginResponseSession {
    /**
     * 
     * @type {string}
     * @memberof LoginResponseSession
     */
    'accessToken': string;
    /**
     * 
     * @type {string}
     * @memberof LoginResponseSession
     */
    'refreshToken': string;
}
/**
 * 
 * @export
 * @interface SignupCredentialsDTO
 */
export interface SignupCredentialsDTO {
    /**
     * 
     * @type {string}
     * @memberof SignupCredentialsDTO
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof SignupCredentialsDTO
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof SignupCredentialsDTO
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface SignupResponse
 */
export interface SignupResponse {
    /**
     * 
     * @type {UserDTO}
     * @memberof SignupResponse
     */
    'user': UserDTO;
}
/**
 * 
 * @export
 * @interface UpdateViewerInputDTO
 */
export interface UpdateViewerInputDTO {
    /**
     * 
     * @type {string}
     * @memberof UpdateViewerInputDTO
     */
    'name': string;
}
/**
 * 
 * @export
 * @interface UserDTO
 */
export interface UserDTO {
    /**
     * 
     * @type {any}
     * @memberof UserDTO
     */
    'name'?: any;
    /**
     * 
     * @type {any}
     * @memberof UserDTO
     */
    'email'?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UserDTO
     */
    'emailVerified': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserDTO
     */
    'isAdmin': boolean;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    'username': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserDTO
     */
    'permissions': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    'updatedAt': string;
}
/**
 * 
 * @export
 * @interface ViewerGetResponse
 */
export interface ViewerGetResponse {
    /**
     * 
     * @type {ViewerGetResponseUser}
     * @memberof ViewerGetResponse
     */
    'user': ViewerGetResponseUser;
}
/**
 * 
 * @export
 * @interface ViewerGetResponseUser
 */
export interface ViewerGetResponseUser {
    /**
     * 
     * @type {any}
     * @memberof ViewerGetResponseUser
     */
    'name'?: any;
    /**
     * 
     * @type {any}
     * @memberof ViewerGetResponseUser
     */
    'email'?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ViewerGetResponseUser
     */
    'emailVerified': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ViewerGetResponseUser
     */
    'isAdmin': boolean;
    /**
     * 
     * @type {string}
     * @memberof ViewerGetResponseUser
     */
    'username': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ViewerGetResponseUser
     */
    'permissions': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ViewerGetResponseUser
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof ViewerGetResponseUser
     */
    'updatedAt': string;
}

/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {LoginCredentialsDTO} loginCredentialsDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login: async (loginCredentialsDTO: LoginCredentialsDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginCredentialsDTO' is not null or undefined
            assertParamExists('login', 'loginCredentialsDTO', loginCredentialsDTO)
            const localVarPath = `/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loginCredentialsDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {SignupCredentialsDTO} signupCredentialsDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signup: async (signupCredentialsDTO: SignupCredentialsDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'signupCredentialsDTO' is not null or undefined
            assertParamExists('signup', 'signupCredentialsDTO', signupCredentialsDTO)
            const localVarPath = `/auth/signup`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(signupCredentialsDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {LoginCredentialsDTO} loginCredentialsDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async login(loginCredentialsDTO: LoginCredentialsDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.login(loginCredentialsDTO, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {SignupCredentialsDTO} signupCredentialsDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signup(signupCredentialsDTO: SignupCredentialsDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SignupResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signup(signupCredentialsDTO, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * 
         * @param {AuthApiLoginRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(requestParameters: AuthApiLoginRequest, options?: AxiosRequestConfig): AxiosPromise<LoginResponse> {
            return localVarFp.login(requestParameters.loginCredentialsDTO, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AuthApiSignupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signup(requestParameters: AuthApiSignupRequest, options?: AxiosRequestConfig): AxiosPromise<SignupResponse> {
            return localVarFp.signup(requestParameters.signupCredentialsDTO, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for login operation in AuthApi.
 * @export
 * @interface AuthApiLoginRequest
 */
export interface AuthApiLoginRequest {
    /**
     * 
     * @type {LoginCredentialsDTO}
     * @memberof AuthApiLogin
     */
    readonly loginCredentialsDTO: LoginCredentialsDTO
}

/**
 * Request parameters for signup operation in AuthApi.
 * @export
 * @interface AuthApiSignupRequest
 */
export interface AuthApiSignupRequest {
    /**
     * 
     * @type {SignupCredentialsDTO}
     * @memberof AuthApiSignup
     */
    readonly signupCredentialsDTO: SignupCredentialsDTO
}

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @param {AuthApiLoginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public login(requestParameters: AuthApiLoginRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).login(requestParameters.loginCredentialsDTO, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AuthApiSignupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public signup(requestParameters: AuthApiSignupRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).signup(requestParameters.signupCredentialsDTO, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * EventApi - axios parameter creator
 * @export
 */
export const EventApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAppInfo: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/events/{eventId}`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EventApi - functional programming interface
 * @export
 */
export const EventApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EventApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAppInfo(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EventDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAppInfo(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EventApi - factory interface
 * @export
 */
export const EventApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EventApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAppInfo(options?: AxiosRequestConfig): AxiosPromise<EventDTO> {
            return localVarFp.getAppInfo(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EventApi - object-oriented interface
 * @export
 * @class EventApi
 * @extends {BaseAPI}
 */
export class EventApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventApi
     */
    public getAppInfo(options?: AxiosRequestConfig) {
        return EventApiFp(this.configuration).getAppInfo(options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * FoldersApi - axios parameter creator
 * @export
 */
export const FoldersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} folderId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolder: async (folderId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolder', 'folderId', folderId)
            const localVarPath = `/folders/{folderId}`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FoldersApi - functional programming interface
 * @export
 */
export const FoldersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FoldersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} folderId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFolder(folderId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolder(folderId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FoldersApi - factory interface
 * @export
 */
export const FoldersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FoldersApiFp(configuration)
    return {
        /**
         * 
         * @param {FoldersApiGetFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolder(requestParameters: FoldersApiGetFolderRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getFolder(requestParameters.folderId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getFolder operation in FoldersApi.
 * @export
 * @interface FoldersApiGetFolderRequest
 */
export interface FoldersApiGetFolderRequest {
    /**
     * 
     * @type {string}
     * @memberof FoldersApiGetFolder
     */
    readonly folderId: string
}

/**
 * FoldersApi - object-oriented interface
 * @export
 * @class FoldersApi
 * @extends {BaseAPI}
 */
export class FoldersApi extends BaseAPI {
    /**
     * 
     * @param {FoldersApiGetFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolder(requestParameters: FoldersApiGetFolderRequest, options?: AxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolder(requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * ServerApi - axios parameter creator
 * @export
 */
export const ServerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerSettings: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/server/settings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setServerSetting: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/server/settings/{settingKey}`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ServerApi - functional programming interface
 * @export
 */
export const ServerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ServerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getServerSettings(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getServerSettings(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setServerSetting(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setServerSetting(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ServerApi - factory interface
 * @export
 */
export const ServerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ServerApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerSettings(options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.getServerSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setServerSetting(options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.setServerSetting(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ServerApi - object-oriented interface
 * @export
 * @class ServerApi
 * @extends {BaseAPI}
 */
export class ServerApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServerApi
     */
    public getServerSettings(options?: AxiosRequestConfig) {
        return ServerApiFp(this.configuration).getServerSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServerApi
     */
    public setServerSetting(options?: AxiosRequestConfig) {
        return ServerApiFp(this.configuration).setServerSetting(options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * ViewerApi - axios parameter creator
 * @export
 */
export const ViewerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getViewer: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/viewer`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {UpdateViewerInputDTO} updateViewerInputDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateViewer: async (updateViewerInputDTO: UpdateViewerInputDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'updateViewerInputDTO' is not null or undefined
            assertParamExists('updateViewer', 'updateViewerInputDTO', updateViewerInputDTO)
            const localVarPath = `/viewer`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateViewerInputDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ViewerApi - functional programming interface
 * @export
 */
export const ViewerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ViewerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getViewer(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ViewerGetResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getViewer(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {UpdateViewerInputDTO} updateViewerInputDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateViewer(updateViewerInputDTO: UpdateViewerInputDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ViewerGetResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateViewer(updateViewerInputDTO, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ViewerApi - factory interface
 * @export
 */
export const ViewerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ViewerApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getViewer(options?: AxiosRequestConfig): AxiosPromise<ViewerGetResponse> {
            return localVarFp.getViewer(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ViewerApiUpdateViewerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateViewer(requestParameters: ViewerApiUpdateViewerRequest, options?: AxiosRequestConfig): AxiosPromise<ViewerGetResponse> {
            return localVarFp.updateViewer(requestParameters.updateViewerInputDTO, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for updateViewer operation in ViewerApi.
 * @export
 * @interface ViewerApiUpdateViewerRequest
 */
export interface ViewerApiUpdateViewerRequest {
    /**
     * 
     * @type {UpdateViewerInputDTO}
     * @memberof ViewerApiUpdateViewer
     */
    readonly updateViewerInputDTO: UpdateViewerInputDTO
}

/**
 * ViewerApi - object-oriented interface
 * @export
 * @class ViewerApi
 * @extends {BaseAPI}
 */
export class ViewerApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ViewerApi
     */
    public getViewer(options?: AxiosRequestConfig) {
        return ViewerApiFp(this.configuration).getViewer(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ViewerApiUpdateViewerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ViewerApi
     */
    public updateViewer(requestParameters: ViewerApiUpdateViewerRequest, options?: AxiosRequestConfig) {
        return ViewerApiFp(this.configuration).updateViewer(requestParameters.updateViewerInputDTO, options).then((request) => request(this.axios, this.basePath));
    }
}



