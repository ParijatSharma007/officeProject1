import React from 'react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MuiThemeProvider from '@/mui-theme/MuiThemeProvider'

export const queryClient = new QueryClient()

const App = ({Component, pageProps}: AppProps) => {
  return (
    <MuiThemeProvider>
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps}/>
        </QueryClientProvider>
    </MuiThemeProvider>
  )
}

export default App