import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

function createReactPluginWithWorkerExclusion(workerFileNames: string[] = []) {
  const [basePlugin] = react()

  return {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    ...basePlugin,
    name: 'react-swc-with-worker-filter',
    transform(
      code: string,
      id: string,
      ...rest: ({ ssr?: boolean | undefined } | undefined)[]
    ) {
      if (workerFileNames.some((name) => id.endsWith(name))) {
        return null // Skip transforming this file entirely
      }
      if (
        basePlugin &&
        'transform' in basePlugin &&
        typeof basePlugin.transform === 'function'
      ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
        return basePlugin.transform.call(this as any, code, id, ...rest)
      }
      return null
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [createReactPluginWithWorkerExclusion(['worker.ts'])],
  resolve: {
    alias: {
      '@/src': path.resolve(__dirname, './src'),
      '@/utils': path.resolve(__dirname, '../ui-toolkit/src/utils'),
      '@/components': path.resolve(__dirname, '../ui-toolkit/src/components'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/socket.io': {
        target: 'http://localhost:3000',
        ws: true,
        rewriteWsOrigin: true,
      },
    },
  },
})
