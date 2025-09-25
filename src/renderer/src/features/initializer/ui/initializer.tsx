import { H1 } from '@renderer/components/typography'
import { useOllamaHealth } from '@renderer/entities/ollama'

export const Initializer = (): React.JSX.Element | null => {
  const { data, error: healthError } = useOllamaHealth()

  if (healthError) return <H1>{healthError.message}</H1>

  return (
    <div>
      <H1>Let&apos;s get it started {data?.version}</H1>
    </div>
  )
}
