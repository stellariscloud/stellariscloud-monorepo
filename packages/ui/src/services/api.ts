import type { StellarisCloudAPI } from '@stellariscloud/app-browser-sdk'
import { StellarisCloudAppBrowserSdk } from '@stellariscloud/app-browser-sdk'
import type { ApiQueryHooks } from '@stellariscloud/auth-utils'
import { capitalize } from '@stellariscloud/utils'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { QueryFunctionContext } from 'react-query'
import { useQuery } from 'react-query'

export const sdkInstance = new StellarisCloudAppBrowserSdk({
  basePath: (import.meta.env.VITE_BACKEND_HOST as string | undefined) ?? '',
})

export const createQueryHooks = <
  T extends StellarisCloudAPI[keyof StellarisCloudAPI & `${string}Api`],
>(
  api: T,
) => {
  const hooks: Partial<ApiQueryHooks<T>> = {}

  Object.getOwnPropertyNames(api.constructor.prototype).forEach((key) => {
    const method = key as string & keyof T

    if (typeof api[method] === 'function') {
      const hook = `use${capitalize(method)}` as keyof ApiQueryHooks<T>
      const f = (requestParameters: unknown, options: unknown) => {
        return useQuery(
          [hook, requestParameters],
          ({ signal }: QueryFunctionContext) => {
            const fn = api[method] as unknown as (
              params: typeof requestParameters,
              config: AxiosRequestConfig,
            ) => Promise<AxiosResponse>

            const promise = fn
              .call(api, requestParameters, { signal })
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              .then((response: AxiosResponse) => response.data)

            return promise
          },
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
          options as any,
        )
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
      hooks[hook] = f as any
    }
  })

  return hooks as unknown as ApiQueryHooks<T>
}

export const authApiHooks = createQueryHooks(sdkInstance.apiClient.authApi)
export const foldersApiHooks = createQueryHooks(
  sdkInstance.apiClient.foldersApi,
)
export const tasksApiHooks = createQueryHooks(sdkInstance.apiClient.tasksApi)
export const serverEventsApiHooks = createQueryHooks(
  sdkInstance.apiClient.serverEventsApi,
)
export const folderEventsApiHooks = createQueryHooks(
  sdkInstance.apiClient.folderEventsApi,
)
export const serverAccessKeysApiHooks = createQueryHooks(
  sdkInstance.apiClient.serverAccessKeysApi,
)
export const userStorageProvisionsApiHooks = createQueryHooks(
  sdkInstance.apiClient.userStorageProvisionsApi,
)
export const accessKeysApiHooks = createQueryHooks(
  sdkInstance.apiClient.accessKeysApi,
)
export const apiClient = sdkInstance.apiClient
