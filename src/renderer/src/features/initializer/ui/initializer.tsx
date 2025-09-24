import { Button } from '@renderer/components/button'
import { H1 } from '@renderer/components/typography'
import {
  useOllamaDeleteModel,
  useOllamaHealth,
  useOllamaList,
  useOllamaShowModel
} from '@renderer/entities/ollama'

export const Initializer = (): React.JSX.Element | null => {
  const { error: healthError } = useOllamaHealth()
  const { data: models } = useOllamaList()
  const { data: shownModel } = useOllamaShowModel({ model: 'gemma3:4b' })

  const { mutateAsync, data, error } = useOllamaDeleteModel()

  console.log({ models })
  console.log({ data, error })
  console.log({ shownModel })

  if (healthError) return <H1>{healthError.message}</H1>

  return (
    <div>
      <H1>Let&apos;s get it started {}</H1>
      <Button onClick={() => mutateAsync('testModelName')}>Delete Model: testModelName</Button>
    </div>
  )
}
