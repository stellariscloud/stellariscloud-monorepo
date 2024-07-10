import type { TestApiClient, TestModule } from 'src/test/test.types'
import { buildTestModule, createTestUser } from 'src/test/test.util'

const TEST_MODULE_KEY = 'server'

describe('Server - Settings', () => {
  let testModule: TestModule | undefined
  let apiClient: TestApiClient

  beforeAll(async () => {
    testModule = await buildTestModule({ testModuleKey: TEST_MODULE_KEY })
    apiClient = testModule.apiClient
  })

  afterEach(async () => {
    await testModule?.resetDb()
  })

  it(`should get the server settings`, async () => {
    const {
      session: { accessToken },
    } = await createTestUser(testModule, {
      username: 'mekpans',
      password: '123',
    })

    const settings = await apiClient
      .serverApi({ accessToken })
      .getServerSettings()

    expect(settings.status).toEqual(200)
    expect(settings.data).toEqual({ settings: {} })
  })

  it(`should set a server setting`, async () => {
    const {
      session: { accessToken },
    } = await createTestUser(testModule, {
      username: 'mekpans',
      password: '123',
      admin: true,
    })

    const settings = await apiClient
      .serverApi({ accessToken })
      .setServerSetting({
        settingKey: 'SIGNUP_ENABLED',
        setSettingInputDTO: { value: true },
      })
    expect(settings.status).toEqual(200)
    expect(settings.data.key).toEqual('SIGNUP_ENABLED')

    const newSettings = await apiClient
      .serverApi({ accessToken })
      .getServerSettings()

    expect(newSettings.data).toEqual({ settings: { SIGNUP_ENABLED: true } })
  })

  it(`should fail to set the server setting if not admin`, async () => {
    const {
      session: { accessToken },
    } = await createTestUser(testModule, {
      username: 'mekpans',
      password: '123',
    })

    const settings = await apiClient.serverApi().setServerSetting({
      settingKey: 'SIGNUP_ENABLED',
      setSettingInputDTO: { value: true },
    })
    expect(settings.status).toEqual(401)

    const newSettings = await apiClient
      .serverApi({ accessToken })
      .getServerSettings()

    expect(newSettings.data).toEqual({ settings: {} })
  })

  afterAll(async () => {
    await testModule?.shutdown()
  })
})
