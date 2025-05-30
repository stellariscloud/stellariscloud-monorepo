export type ExitHandler = () => Promise<void>

const handlers = new Set<ExitHandler>()

export const registerExitHandler = (handler: ExitHandler) => {
  handlers.add(handler)
}

export const runExitHandlers = async () => {
  for (const handler of handlers) {
    try {
      await handler()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}
