import { ModelBasicInfo } from '@common/entities/ollama'

export type ModelCardProps = ModelBasicInfo & {
  actionGroups?: DropdownGroup[]
  availableSizes: ModelBasicInfo['sizes']
  className?: string
}

export type DropdownAction = {
  label: string
  shortcut?: string
  onClick: React.MouseEventHandler<HTMLDivElement>
  variant?: 'default' | 'destructive'
}

export type DropdownGroup = {
  label?: string
  actions?: DropdownAction[]
}
