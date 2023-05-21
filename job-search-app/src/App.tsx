import { FC, useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { getAuthorization, setRefreshToken } from './api/auth/requests'
import Loader from './components/Loader'
import Router from './router'

const queryClient = new QueryClient()

const App: FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      const tokens = (await getAuthorization()) || ''

      if (tokens) {
        localStorage.setItem('access', tokens.accessToken)
        setRefreshToken(tokens.refreshToken)
        setIsAuth(true)
      }
    })()
  }, [])

  return (
    <>
      {isAuth ? (
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default App
