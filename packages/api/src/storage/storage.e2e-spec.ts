import type { S3Client } from '@aws-sdk/client-s3'
import { SignedURLsRequestMethod } from '@stellariscloud/types'
import { buildTestModule } from 'src/test/test.util'

import { S3Service } from './s3.service'

const TEST_MODULE_KEY = 's3'

describe('S3', () => {
  let testModule: Awaited<ReturnType<typeof buildTestModule>> | undefined
  let s3Service: S3Service
  let s3Client: S3Client

  beforeAll(async () => {
    testModule = await buildTestModule({
      testModuleKey: TEST_MODULE_KEY,
    })
    s3Service = await testModule.app.resolve(S3Service)
    s3Client = testModule.testS3Client()
  })

  afterEach(async () => {
    await testModule?.resetAppState()
  })

  it(`it should be able to read from a bucket`, async () => {
    const OBJECT_KEY = 's3test.txt'
    const TEST_CONTENT = 'this is the s3 test'
    const bucketName =
      (await testModule?.initMinioTestBucket([
        { objectKey: OBJECT_KEY, content: TEST_CONTENT },
      ])) ?? ''

    const objectsResult = await s3Service.s3ListBucketObjects({
      s3Client,
      bucketName,
    })
    expect(objectsResult.result.length).toBeGreaterThan(0)

    const downloadUrls =
      testModule?.createS3PresignedUrls(
        objectsResult.result.map(({ key }) => {
          return {
            bucket: bucketName,
            method: SignedURLsRequestMethod.GET,
            objectKey: key,
          }
        }),
      ) ?? []

    const files = await Promise.all(
      downloadUrls.map((downloadUrl) =>
        fetch(downloadUrl, { method: 'GET' }).then((r) => r.text()),
      ),
    )

    expect(files.length).toEqual(1)
    expect(files[0]).toEqual(TEST_CONTENT)
  })

  afterAll(async () => {
    await testModule?.shutdown()
  })
})
