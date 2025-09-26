import { useOllamaList, useOllamaRemoteList } from '@renderer/entities/ollama'
import { LocalModelCard } from '@renderer/features/model-card'
import { Grid } from '@renderer/components/grid'
import { SectionTitle } from '@renderer/features/section-title'
import { useMemo } from 'react'
import { useOllamaStore } from '@renderer/entities/ollama/api/store'

export const LocalModels = (): React.JSX.Element => {
  const { data: localModels } = useOllamaList()
  const favouriteModels = useOllamaStore((state) => state.favouriteModels)

  const modelNames = useMemo(
    () => localModels?.map((localModel) => localModel.model.split(':').at(0) ?? '').filter(Boolean),
    [localModels]
  )

  useOllamaRemoteList(modelNames)

  const sortedLocalModels = useMemo(() => {
    return localModels?.sort((localModel) => (favouriteModels.includes(localModel.name) ? -1 : 1))
  }, [favouriteModels, localModels])

  return (
    <>
      <SectionTitle
        title="Local Models"
        hint="Select and use one of the ready-made templates locally. Or update or remove it, the choice is yours."
      />
      <Grid>
        {sortedLocalModels?.map((localModel) => (
          <LocalModelCard key={localModel.name} {...localModel} />
        ))}
      </Grid>
    </>
  )
}
