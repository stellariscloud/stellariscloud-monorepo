import type { LoginParams, SignupParams } from '@stellariscloud/api-client'
import React from 'react'

import type { Authenticator } from '..'
import type { AuthenticatorStateType } from '../authenticator'

export class AuthError extends Error {}
export interface IAuthContext {
  error?: AuthError
  authState: AuthenticatorStateType
  isLoggingIn: boolean
  isAuthenticated: boolean
  isLoggingOut: boolean
  login: (loginParams: LoginParams) => Promise<boolean>
  signup: (signupParams: SignupParams) => Promise<boolean>
  logout: () => Promise<void>
}
const AuthContext = React.createContext<IAuthContext>({} as IAuthContext)

export const AuthContextProvider = ({
  children,
  authenticator,
}: {
  children: React.ReactNode
  authenticator: Authenticator
}) => {
  const [isLoggingIn, setIsLoggingIn] = React.useState(false)
  const [isLoggingOut, setIsLoggingOut] = React.useState(false)
  const [authState, setAuthState] = React.useState<AuthenticatorStateType>(
    {} as AuthenticatorStateType,
  )
  const [error, setError] = React.useState<AuthError>()
  const { isAuthenticated } = authState

  React.useEffect(() => {
    // Refresh the token to verify authentication state.
    authenticator.getAccessToken().catch((err) => setError(err as AuthError))

    setAuthState(authenticator.state)
    const authStateSetter = (event: CustomEvent<AuthenticatorStateType>) => {
      setAuthState(event.detail)
    }

    authenticator.addEventListener(
      'onStateChanged',
      authStateSetter as EventListener,
    )

    return () => {
      authenticator.removeEventListener(
        'onStateChanged',
        authStateSetter as EventListener,
      )
    }
  }, [])

  const login = async (loginParams: LoginParams) => {
    setError(undefined)
    setIsLoggingIn(true)

    try {
      if (isAuthenticated) {
        return true
      }

      try {
        await authenticator.login(loginParams)
        return true
      } catch (err: unknown) {
        console.log('error:', err)
        setError(err as AuthError)
        return false
      }
    } finally {
      setIsLoggingIn(false)
    }
  }

  const signup = async (signupParams: SignupParams) => {
    setError(undefined)

    try {
      await authenticator.signup(signupParams)
      return true
    } finally {
      setIsLoggingIn(false)
    }
  }

  const logout = async () => {
    setError(undefined)
    setIsLoggingOut(true)
    await authenticator
      .logout()
      .catch((err) => setError(err as AuthError))
      .finally(() => setIsLoggingOut(false))
  }

  return (
    <AuthContext.Provider
      value={{
        error,
        isLoggingIn,
        isAuthenticated,
        isLoggingOut,
        login,
        signup,
        logout,
        authState,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = (): IAuthContext => React.useContext(AuthContext)
