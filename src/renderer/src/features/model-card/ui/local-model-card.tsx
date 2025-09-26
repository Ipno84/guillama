import { ModelResponse } from 'ollama'
import { ModelCard } from './model-card'
import { useOllamaStore } from '@renderer/entities/ollama/api/store'
import { useCallback, useMemo } from 'react'
import { DropdownAction, DropdownGroup } from '../typings'

export const LocalModelCard = ({
  model,
  details,
  modified_at
}: ModelResponse): React.JSX.Element => {
  const isFavouriteModel = useOllamaStore((state) => state.favouriteModels.includes(model))
  const addFavouriteModel = useOllamaStore((state) => state.addFavouriteModel)
  const removeFavouriteModel = useOllamaStore((state) => state.removeFavouriteModel)

  const toggleFavouriteModel = useCallback(() => {
    if (isFavouriteModel) {
      removeFavouriteModel(model)
    } else {
      addFavouriteModel(model)
    }
  }, [isFavouriteModel, addFavouriteModel, removeFavouriteModel, model])

  const addToFavouriteAction = useMemo<DropdownAction>(
    () => ({
      label: isFavouriteModel ? 'Remove from Favourite' : 'Add to Favourite',
      onClick: (e) => {
        e.stopPropagation()
        toggleFavouriteModel()
      }
    }),
    [isFavouriteModel, toggleFavouriteModel]
  )

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

    const pullUpdatesAction: DropdownAction = {
      label: 'Pull Updates',
      onClick: (e) => {
        e.stopPropagation()
        console.log('Pull Updates')
      }
    }
    if (needsUpdate) actions.push(pullUpdatesAction)

    actions.push(addToFavouriteAction)

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
  }, [addToFavouriteAction, needsUpdate])

  return (
    <ModelCard
      name={modelName}
      badges={[model, details.quantization_level]}
      sizes={[details.parameter_size]}
      availableSizes={remoteModel?.sizes}
      lastUpdate={modified_at}
      description={remoteModel?.description}
      actionGroups={actionGroups}
      className={isFavouriteModel ? 'border-chart-3' : 'hover:border-accent-foreground'}
    />
  )
}
