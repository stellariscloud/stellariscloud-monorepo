import { Test } from '@nestjs/testing'
import type { FolderDTO } from '@stellariscloud/types'
import { SignedURLsRequestMethod } from '@stellariscloud/types'
import { eq } from 'drizzle-orm'
import fs from 'fs'
import path from 'path'
import { KVService } from 'src/cache/kv.service'
import { OrmService, TEST_DB_PREFIX } from 'src/orm/orm.service'
import { HttpExceptionFilter } from 'src/shared/http-exception-filter'
import { configureS3Client } from 'src/storage/s3.service'
import { createS3PresignedUrls } from 'src/storage/s3.utils'
import { CoreTestModule } from 'src/test/core-test.module'
import { usersTable } from 'src/users/entities/user.entity'

import { ormConfig } from '../orm/config'
import { setApp, setAppInitializing } from '../shared/app-helper'
import type { TestApiClient, TestModule } from './test.types'
import { buildSupertestApiClient } from './test-api-client'

const MINIO_LOCAL_PATH = '/minio-test-data'
const MINIO_ACCESS_KEY_ID = 'testaccesskeyid'
const MINIO_SECRET_ACCESS_KEY = 'testsecretaccesskey'
const MINIO_ENDPOINT = 'http://miniotest:9000'
const MINIO_REGION = 'auto'

export async function buildTestModule({
  testModuleKey,
}: {
  testModuleKey: string
}) {
  const dbName = `test_db_${testModuleKey}`
  const bucketPathsToRemove: string[] = []

  const appPromise = Test.createTestingModule({
    imports: [CoreTestModule],
    providers: [],
  })
    .overrideProvider(ormConfig.KEY)
    .useValue({ ...ormConfig(), dbName: `${TEST_DB_PREFIX}${dbName}` })
    .compile()
    .then((moduleRef) => moduleRef.createNestApplication())

  setAppInitializing(appPromise)

  const app = await appPromise
  app.useGlobalFilters(new HttpExceptionFilter('NONE'))

  setApp(app)

  const ormService = await app.resolve(OrmService)
  const kvService = await app.resolve(KVService)

  // truncate the db before running first init (which will migrate the db)
  await ormService.truncateAllTestTables()

  await app.enableShutdownHooks().init()

  return {
    app,
    apiClient: buildSupertestApiClient(app),
    shutdown: async () => {
      // remove created minio buckets
      for (const p of bucketPathsToRemove) {
        fs.rmSync(p, { recursive: true })
      }

      // shutdown the app
      await app.close()
    },
    getOrmService: () => {
      return ormService
    },
    resetAppState: async () => {
      kvService.ops.flushall()
      await ormService.resetTestDb()
    },
    testS3ClientConfig: () => ({
      accessKeyId: MINIO_ACCESS_KEY_ID,
      secretAccessKey: MINIO_SECRET_ACCESS_KEY,
      endpoint: MINIO_ENDPOINT,
      region: MINIO_REGION,
    }),
    testS3Client: () =>
      configureS3Client({
        accessKeyId: MINIO_ACCESS_KEY_ID,
        secretAccessKey: MINIO_SECRET_ACCESS_KEY,
        endpoint: MINIO_ENDPOINT,
        region: MINIO_REGION,
      }),
    initMinioTestBucket: async (
      createFiles: { objectKey: string; content: Buffer | string }[] = [],
    ) => {
      const bucketName = `test-bucket-${(Math.random() + 1).toString(36).substring(7)}`
      const bucketPath = path.join(MINIO_LOCAL_PATH, bucketName)
      bucketPathsToRemove.push(bucketPath)

      if (fs.existsSync(bucketPath)) {
        throw new Error('Test bucket somehow already exists.')
      }

      fs.mkdirSync(bucketPath)

      const uploadUrls = createS3PresignedUrls(
        createFiles.map(({ objectKey }) => {
          return {
            accessKeyId: MINIO_ACCESS_KEY_ID,
            secretAccessKey: MINIO_SECRET_ACCESS_KEY,
            endpoint: MINIO_ENDPOINT,
            region: MINIO_REGION,
            bucket: bucketName,
            expirySeconds: 3000,
            method: SignedURLsRequestMethod.PUT,
            objectKey,
          }
        }),
      )

      await Promise.all(
        uploadUrls.map((uploadUrl, i) =>
          fetch(uploadUrl, { method: 'PUT', body: createFiles[i].content }),
        ),
      )
      return bucketName
    },
    createS3PresignedUrls: (
      presignedRequests: {
        bucket: string
        objectKey: string
        method: SignedURLsRequestMethod
      }[],
    ) => {
      return createS3PresignedUrls(
        presignedRequests.map((presignedRequest) => ({
          endpoint: MINIO_ENDPOINT,
          accessKeyId: MINIO_ACCESS_KEY_ID,
          secretAccessKey: MINIO_SECRET_ACCESS_KEY,
          region: MINIO_REGION,
          bucket: presignedRequest.bucket,
          objectKey: presignedRequest.objectKey,
          method: presignedRequest.method,
          expirySeconds: 3000,
        })),
      )
    },
  }
}

export async function createTestUser(
  testModule: TestModule,
  {
    username,
    name,
    email,
    password,
    admin = false,
  }: {
    username: string
    email?: string
    name?: string
    password: string
    admin?: boolean
  },
): Promise<{
  session: { expiresAt: string; accessToken: string; refreshToken: string }
}> {
  const signupResponse = await testModule
    .apiClient()
    .POST('/api/v1/auth/signup', {
      body: {
        username,
        password,
        email: email ?? `${username}@example.com`,
      },
    })
  if (admin) {
    await testModule
      .getOrmService()
      .db.update(usersTable)
      .set({
        isAdmin: true,
        name,
      })
      .where(eq(usersTable.username, signupResponse.data?.user.username ?? ''))
  }

  const result = await testModule.apiClient().POST('/api/v1/auth/login', {
    body: { login: username, password },
  })

  if (!result.data) {
    throw new Error('Login failed - no response data')
  }

  return result.data
}

export function testS3Location({
  bucketName,
  prefix = '',
}: {
  bucketName: string
  prefix?: string
}) {
  return {
    accessKeyId: MINIO_ACCESS_KEY_ID,
    secretAccessKey: MINIO_SECRET_ACCESS_KEY,
    endpoint: MINIO_ENDPOINT,
    bucket: bucketName,
    region: MINIO_REGION,
    prefix,
  }
}

export async function createTestFolder({
  accessToken,
  folderName,
  testModule,
  mockFiles,
  apiClient,
}: {
  testModule: TestModule | undefined
  folderName: string
  accessToken: string
  mockFiles: { objectKey: string; content: string }[]
  apiClient: TestApiClient
}): Promise<{
  folder: FolderDTO
}> {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const bucketName = await testModule!.initMinioTestBucket(mockFiles)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const metadataBucketName = await testModule!.initMinioTestBucket()

  const folderCreateResponse = await apiClient(accessToken).POST(
    '/api/v1/folders',
    {
      body: {
        name: folderName,
        contentLocation: testS3Location({ bucketName }),
        metadataLocation: testS3Location({ bucketName: metadataBucketName }),
      },
    },
  )

  if (!folderCreateResponse.data?.folder) {
    throw new Error('Folder creation failed - no folder data in response')
  }

  return {
    folder: folderCreateResponse.data.folder,
  }
}

export async function reindexTestFolder({
  accessToken,
  folderId,
  apiClient,
}: {
  folderId: string
  accessToken: string
  apiClient: TestApiClient
}): Promise<void> {
  await apiClient(accessToken).POST('/api/v1/folders/{folderId}/reindex', {
    params: { path: { folderId } },
  })
}

export async function waitForTrue(
  condition: () => boolean,
  { retryPeriod, maxRetries }: { retryPeriod: number; maxRetries: number },
) {
  await new Promise<void>((resolve, reject) => {
    let checkCount = 0
    const interval = setInterval(() => {
      if (checkCount >= maxRetries) {
        clearInterval(interval)
        reject(new Error('Timeout waiting for condition to return true.'))
      } else if (condition()) {
        clearInterval(interval)
        resolve()
      }
      checkCount += 1
    }, retryPeriod)
  })
}
