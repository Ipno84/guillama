import React, { useState, type PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { getQueryClient } from '../api/query-client'

export const QueryProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(() => getQueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools buttonPosition="bottom-right" initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  )
}
