import { useOllamaList } from '@renderer/entities/ollama'
import { ModelCard } from '@renderer/features/model-card'
import { Grid } from '@renderer/components/grid'
import { SectionTitle } from '@renderer/features/section-title'

export const LocalModels = (): React.JSX.Element => {
  const { data: localModels } = useOllamaList()

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
          return (
            <ModelCard
              key={localModel.name}
              name={name}
              badges={[localModel.model, localModel.details.quantization_level]}
              sizes={[localModel.details.parameter_size]}
            />
          )
        })}
      </Grid>
    </>
  )
}
