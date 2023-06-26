/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, TsoaRoute, HttpStatusCodeLiteral, TsoaResponse } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AppConfigController } from './../controllers/app-config.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AuthController } from './../controllers/auth.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { FoldersController } from './../controllers/folders.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { S3ConnectionsController } from './../controllers/s3-connections.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ViewerController } from './../controllers/viewer.controller';
import { expressAuthentication } from './../middleware/auth.middleware';
import { iocContainer } from './../ioc';
import { IocContainer, IocContainerFactory } from '@tsoa/runtime';
import * as express from 'express';
import type { OpenApiValidator } from 'express-openapi-validate';

// From https://github.com/lukeautry/tsoa/blob/641f12c/packages/cli/src/utils/pathUtils.ts#L23
const convertPath = (path: string) => path.replace(/:([^\/]+)/g, '{$1}');

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: express.Router, validator: OpenApiValidator) {

  // ###########################################################################################################
  //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
  //  Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
  // ###########################################################################################################
  app.put(
    '/api/v1/app-config',
    authenticateMiddleware([{"AccessToken":["app-config:create"]}]),
    validator.validate('put', convertPath('/app-config')),
    function AppConfigController_setAppConfig(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          body: {"in":"body","name":"body","required":true,"ref":"AppConfigCreateData"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<AppConfigController>(AppConfigController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.setAppConfig.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, 201, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/v1/app-config/:key',
    authenticateMiddleware([{"AccessToken":["app-config:read"]}]),
    validator.validate('get', convertPath('/app-config/:key')),
    function AppConfigController_getAppConfig(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          key: {"in":"path","name":"key","required":true,"dataType":"string"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<AppConfigController>(AppConfigController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.getAppConfig.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/api/v1/token',
    authenticateMiddleware([{"RefreshToken":[]}]),
    validator.validate('post', convertPath('/token')),
    function AuthController_refreshToken(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<AuthController>(AuthController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.refreshToken.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/api/v1/login',
    authenticateMiddleware([{"Public":[]}]),
    validator.validate('post', convertPath('/login')),
    function AuthController_login(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          _body: {"in":"body","name":"_body","required":true,"ref":"LoginParams"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<AuthController>(AuthController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.login.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/v1/logout',
    authenticateMiddleware([{"AccessToken":[]},{"RefreshToken":[]}]),
    validator.validate('get', convertPath('/logout')),
    function AuthController_logout(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<AuthController>(AuthController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.logout.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, 204, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/api/v1/folders',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('post', convertPath('/folders')),
    function FoldersController_createFolder(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          body: {"in":"body","name":"body","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"prefix":{"dataType":"string"},"bucket":{"dataType":"string","required":true},"name":{"dataType":"string","required":true},"s3ConnectionId":{"dataType":"string","required":true}}},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.createFolder.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/v1/folders/:folderId',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('get', convertPath('/folders/:folderId')),
    function FoldersController_getFolder(request: any, response: any, next: any) {
      const args = {
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.getFolder.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/v1/folders',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('get', convertPath('/folders')),
    function FoldersController_listFolders(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.listFolders.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.delete(
    '/api/v1/folders/:folderId',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('delete', convertPath('/folders/:folderId')),
    function FoldersController_deleteFolder(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.deleteFolder.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/v1/folders/:folderId/metadata',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('get', convertPath('/folders/:folderId/metadata')),
    function FoldersController_getFolderMetadata(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.getFolderMetadata.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/v1/folders/:folderId/objects/:objectKey',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('get', convertPath('/folders/:folderId/objects/:objectKey')),
    function FoldersController_getFolderObject(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
          objectKey: {"in":"path","name":"objectKey","required":true,"dataType":"string"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.getFolderObject.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.delete(
    '/api/v1/folders/:folderId/objects/:objectKey',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('delete', convertPath('/folders/:folderId/objects/:objectKey')),
    function FoldersController_deleteFolderObject(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
          objectKey: {"in":"path","name":"objectKey","required":true,"dataType":"string"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.deleteFolderObject.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/v1/folders/:folderId/objects',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('get', convertPath('/folders/:folderId/objects')),
    function FoldersController_listFolderObjects(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
          search: {"in":"query","name":"search","dataType":"string"},
          tagId: {"in":"query","name":"tagId","dataType":"string"},
          offset: {"in":"query","name":"offset","dataType":"double"},
          limit: {"in":"query","name":"limit","dataType":"double"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.listFolderObjects.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/api/v1/folders/:folderId/shares',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('post', convertPath('/folders/:folderId/shares')),
    function FoldersController_createFolderShare(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
          share: {"in":"body","name":"share","required":true,"ref":"CreateFolderSharePayload"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.createFolderShare.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.delete(
    '/api/v1/folders/:folderId/shares/:shareId',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('delete', convertPath('/folders/:folderId/shares/:shareId')),
    function FoldersController_deleteFolderShare(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
          shareId: {"in":"path","name":"shareId","required":true,"dataType":"string"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.deleteFolderShare.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.put(
    '/api/v1/folders/:folderId/shares/:shareId',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('put', convertPath('/folders/:folderId/shares/:shareId')),
    function FoldersController_updateFolderShare(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
          shareId: {"in":"path","name":"shareId","required":true,"dataType":"string"},
          share: {"in":"body","name":"share","required":true,"ref":"UpdateFolderSharePayload"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.updateFolderShare.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/v1/folders/:folderId/shares',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('get', convertPath('/folders/:folderId/shares')),
    function FoldersController_listFolderShares(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.listFolderShares.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/v1/folders/:folderId/tags',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('get', convertPath('/folders/:folderId/tags')),
    function FoldersController_listTags(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.listTags.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/api/v1/folders/:folderId/tags',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('post', convertPath('/folders/:folderId/tags')),
    function FoldersController_createTag(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
          body: {"in":"body","name":"body","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string","required":true}}},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.createTag.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/api/v1/folders/:folderId/tags/:tagId',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('post', convertPath('/folders/:folderId/tags/:tagId')),
    function FoldersController_updateTag(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
          tagId: {"in":"path","name":"tagId","required":true,"dataType":"string"},
          body: {"in":"body","name":"body","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string","required":true}}},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.updateTag.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.delete(
    '/api/v1/folders/:folderId/tags/:tagId',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('delete', convertPath('/folders/:folderId/tags/:tagId')),
    function FoldersController_deleteTag(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
          tagId: {"in":"path","name":"tagId","required":true,"dataType":"string"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.deleteTag.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/api/v1/folders/:folderId/objects/:objectKey/:tagId',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('post', convertPath('/folders/:folderId/objects/:objectKey/:tagId')),
    function FoldersController_tagObjectAsUser(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
          objectKey: {"in":"path","name":"objectKey","required":true,"dataType":"string"},
          tagId: {"in":"path","name":"tagId","required":true,"dataType":"string"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.tagObjectAsUser.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.delete(
    '/api/v1/folders/:folderId/objects/:objectKey/:tagId',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('delete', convertPath('/folders/:folderId/objects/:objectKey/:tagId')),
    function FoldersController_untagObjectAsUser(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
          objectKey: {"in":"path","name":"objectKey","required":true,"dataType":"string"},
          tagId: {"in":"path","name":"tagId","required":true,"dataType":"string"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.untagObjectAsUser.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.put(
    '/api/v1/folders/:folderId/objects/:objectKey/content-metadata',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('put', convertPath('/folders/:folderId/objects/:objectKey/content-metadata')),
    function FoldersController_updateFolderObjectContentMetadata(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
          objectKey: {"in":"path","name":"objectKey","required":true,"dataType":"string"},
          body: {"in":"body","name":"body","required":true,"ref":"FolderObjectContentMetadata"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.updateFolderObjectContentMetadata.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.put(
    '/api/v1/folders/:folderId/objects/:objectKey',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('put', convertPath('/folders/:folderId/objects/:objectKey')),
    function FoldersController_refreshFolderObjectS3Metadata(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
          objectKey: {"in":"path","name":"objectKey","required":true,"dataType":"string"},
          body: {"in":"body","name":"body","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"eTag":{"dataType":"string"}}},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.refreshFolderObjectS3Metadata.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/api/v1/folders/:folderId/refresh',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('post', convertPath('/folders/:folderId/refresh')),
    function FoldersController_refreshFolder(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.refreshFolder.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/api/v1/folders/:folderId/presigned-urls',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('post', convertPath('/folders/:folderId/presigned-urls')),
    function FoldersController_createPresignedURLs(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          folderId: {"in":"path","name":"folderId","required":true,"dataType":"string"},
          body: {"in":"body","name":"body","required":true,"ref":"SignedURLsRequestPayload"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<FoldersController>(FoldersController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.createPresignedURLs.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/v1/s3-connections/:s3ConnectionId',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('get', convertPath('/s3-connections/:s3ConnectionId')),
    function S3ConnectionsController_getS3Connection(request: any, response: any, next: any) {
      const args = {
          s3ConnectionId: {"in":"path","name":"s3ConnectionId","required":true,"dataType":"string"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<S3ConnectionsController>(S3ConnectionsController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.getS3Connection.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/v1/s3-connections',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('get', convertPath('/s3-connections')),
    function S3ConnectionsController_listS3Connections(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<S3ConnectionsController>(S3ConnectionsController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.listS3Connections.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/api/v1/s3-connections',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('post', convertPath('/s3-connections')),
    function S3ConnectionsController_createS3Connection(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          body: {"in":"body","name":"body","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"region":{"dataType":"string","required":true},"endpoint":{"dataType":"string","required":true},"secretAccessKey":{"dataType":"string","required":true},"accessKeyId":{"dataType":"string","required":true},"name":{"dataType":"string","required":true}}},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<S3ConnectionsController>(S3ConnectionsController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.createS3Connection.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/api/v1/s3-connections/test',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('post', convertPath('/s3-connections/test')),
    function S3ConnectionsController_testS3Connection(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          body: {"in":"body","name":"body","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"region":{"dataType":"string","required":true},"endpoint":{"dataType":"string","required":true},"secretAccessKey":{"dataType":"string","required":true},"accessKeyId":{"dataType":"string","required":true},"name":{"dataType":"string","required":true}}},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<S3ConnectionsController>(S3ConnectionsController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.testS3Connection.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/api/v1/s3-connections/:s3ConnectionId',
    authenticateMiddleware([{"AccessToken":[]}]),
    validator.validate('post', convertPath('/s3-connections/:s3ConnectionId')),
    function S3ConnectionsController_deleteS3Connection(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
          s3ConnectionId: {"in":"path","name":"s3ConnectionId","required":true,"dataType":"string"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<S3ConnectionsController>(S3ConnectionsController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.deleteS3Connection.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/v1/viewer',
    authenticateMiddleware([{"AccessToken":["viewer:read"]}]),
    validator.validate('get', convertPath('/viewer')),
    function ViewerController_getUser(request: any, response: any, next: any) {
      const args = {
          req: {"in":"request","name":"req","required":true,"dataType":"object"},
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

      const controller: any = container.get<ViewerController>(ViewerController);
      if (typeof controller['setStatus'] === 'function') {
        controller.setStatus(undefined);
      }

      const promise = controller.getUser.apply(controller, getArgs(args, request, response));
      promiseHandler(controller, promise, response, undefined, next);
    }
  );
  
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function isController(object: any): object is Controller {
    return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
  }

  function promiseHandler(controllerObj: any, promise: any, response: any, successStatus: any, next: any) {
    return Promise.resolve(promise)
      .then((data: any) => {
        let statusCode = successStatus;
        let headers;
        if (isController(controllerObj)) {
          headers = controllerObj.getHeaders();
          statusCode = controllerObj.getStatus() || statusCode;
        }

        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

        returnHandler(response, statusCode, data, headers)
      })
      .catch((error: any) => next(error));
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function returnHandler(response: any, statusCode?: number, data?: any, headers: any = {}) {
    if (response.headersSent) {
      return;
    }
    Object.keys(headers).forEach((name: string) => {
      response.set(name, headers[name]);
    });
    if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
      data.pipe(response);
    } else if (data !== null && data !== undefined) {
      response.status(statusCode || 200).json(data);
    } else {
      response.status(statusCode || 204).end();
    }
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function responder(response: any): TsoaResponse<HttpStatusCodeLiteral, unknown>  {
    return function(status, data, headers) {
      returnHandler(response, status, data, headers);
    };
  };

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function getArgs(args: any, request: any, response: any): any[] {
    const values = Object.keys(args).map((key) => {
      const name = args[key].name;
      switch (args[key].in) {
        case 'request':
          return request;
        case 'query':
          return request.query[name];
        case 'path':
          return request.params[name];
        case 'header':
          return request.header(name);
        case 'body':
          return request.body;
        case 'body-prop':
          return request.body[name];
        case 'formData':
          if (args[key].dataType === 'file') {
            return request.file;
          } else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
            return request.files;
          } else {
            return request.body[name];
          }
        case 'res':
          return responder(response);
      }
    });
    
    return values;
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function authenticateMiddleware(security: TsoaRoute.Security[] = []) {
  return function runAuthenticationMiddleware(request: any, _response: any, next: any) {
    let responded = 0;
    let success = false;

    const succeed = function(user: any) {
      if (!success) {
        success = true;
        responded++;
        request['user'] = user;
        next();
      }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    const fail = function(error: any) {
      responded++;
      if (responded == security.length && !success) {
        error.status = error.status || 401;
        next(error)
      }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    for (const secMethod of security) {
      if (Object.keys(secMethod).length > 1) {
        let promises: Promise<any>[] = [];

        for (const name in secMethod) {
          promises.push(expressAuthentication(request, name, secMethod[name]));
        }

        Promise.all(promises)
          .then((users) => { succeed(users[0]); })
          .catch(fail);
      } else {
        for (const name in secMethod) {
          expressAuthentication(request, name, secMethod[name])
            .then(succeed)
            .catch(fail);
        }
      }
    }
  }
}
