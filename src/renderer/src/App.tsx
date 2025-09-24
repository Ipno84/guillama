import { QueryProvider } from '@renderer/components/query-provider'
import { Initializer } from '@renderer/features/initializer/ui/initializer'

export const App: React.FC = () => {
  return (
    <QueryProvider>
      <Initializer />
    </QueryProvider>
  )
}
