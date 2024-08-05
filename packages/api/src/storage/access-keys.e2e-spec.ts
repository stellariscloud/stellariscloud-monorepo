import type { TestApiClient, TestModule } from 'src/test/test.types'
import {
  buildTestModule,
  createTestFolder,
  createTestUser,
} from 'src/test/test.util'

const TEST_MODULE_KEY = 'access_keys'

describe('Access Keys', () => {
  let testModule: TestModule | undefined
  let apiClient: TestApiClient

  beforeAll(async () => {
    testModule = await buildTestModule({
      testModuleKey: TEST_MODULE_KEY,
    })
    apiClient = testModule.apiClient
  })

  afterEach(async () => {
    await testModule?.resetDb()
  })

  it(`should list DISTINCT user access keys`, async () => {
    const {
      session: { accessToken },
    } = await createTestUser(testModule, {
      username: 'testuser',
      password: '123',
    })

    const testFolder = await createTestFolder({
      folderName: 'My Folder',
      testModule,
      accessToken,
      mockFiles: [],
      apiClient,
    })

    expect(testFolder.folder.id).toBeTruthy()

    const accessKeysListResponse = await apiClient
      .accessKeysApi({ accessToken })
      .listAccessKeys()

    expect(accessKeysListResponse.status).toEqual(200)
    expect(accessKeysListResponse.data.result.length).toEqual(1)
    expect(accessKeysListResponse.data.result[0].accessKeyId).toEqual(
      'testaccesskeyid',
    )
    expect(accessKeysListResponse.data.result[0].endpointHost).toEqual(
      'miniotest:9000',
    )
    expect(accessKeysListResponse.data.result[0].folderCount).toEqual(1)
  })

  it(`should 401 on list access keys without token`, async () => {
    const accessKeysListResponse = await apiClient
      .accessKeysApi()
      .listAccessKeys()

    expect(accessKeysListResponse.status).toEqual(401)
  })

  afterAll(async () => {
    await testModule?.shutdown()
  })
})
