import './styles/globals.css'
import './fonts/inter/inter.css'

import { AuthContextProvider, useAuthContext } from '@stellariscloud/auth-utils'
import { cn } from '@stellariscloud/ui-toolkit'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'

import { Header } from './components/header'
import { Sidebar } from './components/sidebar/sidebar'
import { useSidebar } from './components/sidebar/use-sidebar'
import { LocalFileCacheContextProvider } from './contexts/local-file-cache.context'
import { LoggingContextProvider } from './contexts/logging.context'
import { ServerContextProvider } from './contexts/server.context'
import { ThemeProvider } from './contexts/theme.context'
import { useServerContext } from './hooks/use-server-context'
import { useStore } from './hooks/use-store'
import { LandingPage } from './pages'
import FolderDetail from './pages/folders/folder-detail'
import { Login } from './pages/login'
import { Signup } from './pages/signup'
import { sdkInstance } from './services/api'

const queryClient = new QueryClient()

const UNAUTHENTICATED_PAGES = ['/', '/login', '/signup']

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/folders/:folderId" element={<FolderDetail />} />
      <Route path="/folders/:folderId/:objectKey" element={<FolderDetail />} />
    </Routes>
  )
}

const UnauthenticatedContent = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="absolute right-0 top-0 flex w-full shrink-0 grow-0 overflow-visible">
        <Header />
      </div>
      <main className={cn('flex-1 justify-center overflow-hidden')}>
        <div className={cn('relative flex size-full')}>
          <div className="relative w-full">
            <Content />
          </div>
        </div>
      </main>
    </div>
  )
}

const AuthenticatedContent = () => {
  const authContext = useAuthContext()
  const navigate = useNavigate()
  const location = useLocation()
  const { menuItems } = useServerContext()

  React.useEffect(() => {
    if (
      'isAuthenticated' in authContext.authState &&
      !authContext.authState.isAuthenticated &&
      !UNAUTHENTICATED_PAGES.includes(location.pathname)
    ) {
      void navigate('/')
    }
  }, [
    authContext.authState.isAuthenticated,
    authContext.authState,
    location.pathname,
    navigate,
  ])

  const sidebar = useStore(useSidebar, (x) => x)
  if (!sidebar) {
    return null
  }
  const { getOpenState, settings } = sidebar

  return (
    <div className="flex h-full">
      <Sidebar
        onSignOut={authContext.logout}
        authContext={authContext}
        menuItems={menuItems}
      />
      <main
        className={cn(
          'bg-background min-h-[calc(100vh_-_56px)] flex-1 transition-[margin-left] duration-300 ease-in-out',
          !settings.disabled && (!getOpenState() ? 'lg:ml-[70px]' : 'lg:ml-64'),
        )}
      >
        <Content />
      </main>
    </div>
  )
}

export const App = () => {
  const [loaded, setLoaded] = React.useState(false)

  const listener = React.useCallback(() => {
    setLoaded(sdkInstance.authenticator.state.isLoaded)
  }, [])

  React.useEffect(() => {
    sdkInstance.authenticator.addEventListener('onStateChanged', listener)
    return () => {
      sdkInstance.authenticator.removeEventListener('onStateChanged', listener)
    }
  }, [listener])

  return (
    <LoggingContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AuthContextProvider authenticator={sdkInstance.authenticator}>
            <ThemeProvider>
              <div className="size-full">
                {loaded && sdkInstance.authenticator.state.isAuthenticated ? (
                  <LocalFileCacheContextProvider>
                    <ServerContextProvider>
                      <AuthenticatedContent />
                    </ServerContextProvider>
                  </LocalFileCacheContextProvider>
                ) : (
                  <UnauthenticatedContent />
                )}
              </div>
            </ThemeProvider>
          </AuthContextProvider>
        </Router>
      </QueryClientProvider>
    </LoggingContextProvider>
  )
}
