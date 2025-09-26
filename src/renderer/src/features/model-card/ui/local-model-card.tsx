import { ModelResponse } from 'ollama'
import { ModelCard } from './model-card'
import { useOllamaStore } from '@renderer/entities/ollama/api/store'
import { useMemo } from 'react'
import { DropdownAction, DropdownGroup } from '../typings'

export const LocalModelCard = ({
  model,
  details,
  modified_at
}: ModelResponse): React.JSX.Element => {
  const modelName = useMemo(() => model.split(':').at(0), [model])
  const remoteModel = useOllamaStore((state) =>
    state.remoteModels.find((remoteModel) => remoteModel.name === modelName)
  )
  const needsUpdate = useMemo(
    () => (!remoteModel?.lastUpdate ? true : remoteModel?.lastUpdate > new Date(modified_at)),
    [modified_at, remoteModel?.lastUpdate]
  )

  const actionGroups = useMemo<DropdownGroup[]>(() => {
    const actions: DropdownAction[] = []

    const newChatAction: DropdownAction = {
      label: 'New Chat...',
      onClick: (e) => {
        e.stopPropagation()
        console.log('clicked')
      }
    }
    actions.push(newChatAction)

    const addToFavoriteAction: DropdownAction = {
      label: 'Add to Favorite',
      onClick: (e) => {
        e.stopPropagation()
        console.log('Add to Favorite')
      }
    }
    actions.push(addToFavoriteAction)

    const getDetailsAction: DropdownAction = {
      label: 'Details',
      onClick: (e) => {
        e.stopPropagation()
        console.log('Details')
      }
    }
    actions.push(getDetailsAction)

    const pullUpdatesAction: DropdownAction = {
      label: 'Pull Updates',
      onClick: (e) => {
        e.stopPropagation()
        console.log('Pull Updates')
      }
    }
    if (needsUpdate) actions.push(pullUpdatesAction)

    const deleteAction: DropdownAction = {
      label: 'Delete',
      variant: 'destructive',
      onClick: (e) => {
        e.stopPropagation()
        console.log('Delete')
      }
    }
    actions.push(deleteAction)

    return [
      {
        actions
      }
    ]
  }, [needsUpdate])

  return (
    <ModelCard
      name={modelName}
      badges={[model, details.quantization_level]}
      sizes={[details.parameter_size]}
      availableSizes={remoteModel?.sizes}
      lastUpdate={modified_at}
      description={remoteModel?.description}
      actionGroups={actionGroups}
    />
  )
}
