import 'reflect-metadata'

import { container } from 'tsyringe'

import { App } from './app'
import { registerExitHandler } from './util/process.util'

const app = container.resolve(App)

void app.init().then(() => {
  void app.listen()
})

registerExitHandler(() => app.close())
