import { ModelCard } from './model-card'
import { ModelBasicInfo } from '@common/entities/ollama'

export const RemoteModelCard = ({
  name,
  description,
  capabilities,
  badges,
  sizes,
  pullCount,
  tagsCount,
  lastUpdate
}: ModelBasicInfo): React.JSX.Element => {
  return (
    <ModelCard
      key={name}
      name={name}
      description={description}
      capabilities={capabilities}
      badges={badges}
      sizes={sizes}
      pullCount={pullCount}
      tagsCount={tagsCount}
      lastUpdate={lastUpdate}
      availableSizes={sizes}
      className="hover:border-accent-foreground"
    />
  )
}
