import { Grid } from '@renderer/components/grid'
import { SectionTitle } from '@renderer/features/section-title'
import { useOllamaRemoteList } from '@renderer/entities/ollama'
import { ModelCard } from '@renderer/features/model-card'

export const RemoteCatalog = (): React.JSX.Element => {
  const { data: remoteModels } = useOllamaRemoteList()

  return (
    <>
      <SectionTitle
        title="Remote Catalog"
        hint="The catalog of all the models available in the Ollama libraries, ready to be used"
      />
      <Grid>
        {remoteModels?.map(({ name, description, capabilities, badges, sizes }) => {
          return (
            <ModelCard
              key={name}
              name={name}
              description={description}
              capabilities={capabilities}
              badges={badges}
              sizes={sizes}
            />
          )
        })}
      </Grid>
    </>
  )
}
