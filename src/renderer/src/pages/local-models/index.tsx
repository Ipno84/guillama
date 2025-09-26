import { useOllamaList, useOllamaRemoteList } from '@renderer/entities/ollama'
import { ModelCard } from '@renderer/features/model-card'
import { Grid } from '@renderer/components/grid'
import { SectionTitle } from '@renderer/features/section-title'

export const LocalModels = (): React.JSX.Element => {
  const { data: localModels } = useOllamaList()
  const { data: remoteModels } = useOllamaRemoteList()

  console.log(localModels)

  return (
    <>
      <SectionTitle
        title="Local Models"
        hint="Select and use one of the ready-made templates locally. Or update or remove it, the choice is yours."
      />
      <Grid>
        {localModels?.map((localModel) => {
          const name = localModel.model.split(':').at(0)
          const remoteLastUpdate = remoteModels?.find(
            (remoteModel) => remoteModel.name === name
          )?.lastUpdate
          const localLastUpdate = new Date(localModel.modified_at)
          const needsUpdate = !remoteLastUpdate ? true : remoteLastUpdate > localLastUpdate
          console.log(name, {
            needsUpdate
          })
          return (
            <ModelCard
              key={localModel.name}
              name={name}
              badges={[localModel.model, localModel.details.quantization_level]}
              sizes={[localModel.details.parameter_size]}
              lastUpdate={localModel.modified_at}
              description={
                remoteModels?.find((remoteModel) => remoteModel.name === name)?.description
              }
              actionGroups={[
                {
                  actions: [
                    {
                      label: 'New Chat...',
                      onClick: (e) => {
                        e.stopPropagation()
                        console.log('clicked')
                      }
                    },
                    {
                      label: 'Add to Favorite',
                      onClick: (e) => {
                        e.stopPropagation()
                        console.log('Add to Favorite')
                      }
                    },
                    {
                      label: 'Details',
                      onClick: (e) => {
                        e.stopPropagation()
                        console.log('Details')
                      }
                    },
                    {
                      label: 'Pull Updates',
                      onClick: (e) => {
                        e.stopPropagation()
                        console.log('Pull Updates')
                      }
                    },
                    {
                      label: 'Delete',
                      variant: "destructive",
                      onClick: (e) => {
                        e.stopPropagation()
                        console.log('Delete')
                      }
                    }
                  ]
                }
              ]}
            />
          )
        })}
      </Grid>
    </>
  )
}
