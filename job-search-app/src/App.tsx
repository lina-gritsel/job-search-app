import { FC } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Router from './router'

const queryClient = new QueryClient()

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  )
}

export default App
