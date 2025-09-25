import { QueryProvider } from '@renderer/components/query-provider'
import { RouterProvider } from 'react-router'
import { router } from '@renderer/routes'

export const App: React.FC = () => {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  )
}
