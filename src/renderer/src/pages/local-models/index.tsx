import { useOllamaList, useOllamaRemoteList } from '@renderer/entities/ollama'
import { LocalModelCard } from '@renderer/features/model-card'
import { Grid } from '@renderer/components/grid'
import { SectionTitle } from '@renderer/features/section-title'
import { useMemo } from 'react'

export const LocalModels = (): React.JSX.Element => {
  const { data: localModels } = useOllamaList()

  const modelNames = useMemo(
    () => localModels?.map((localModel) => localModel.model.split(':').at(0) ?? '').filter(Boolean),
    [localModels]
  )

  useOllamaRemoteList(modelNames)

  return (
    <>
      <SectionTitle
        title="Local Models"
        hint="Select and use one of the ready-made templates locally. Or update or remove it, the choice is yours."
      />
      <Grid>
        {localModels?.map((localModel) => (
          <LocalModelCard key={localModel.name} {...localModel} />
        ))}
      </Grid>
    </>
  )
}
