import { ModelBasicInfo } from '@common/entities/ollama'
import { ModelResponse } from 'ollama'

export interface OllamaStore {
  remoteModels: ModelBasicInfo[]
  localModels: ModelResponse[]
  favouriteModels: string[]
  setRemoteModels: (remoteModels: ModelBasicInfo[]) => void
  addRemoteModels: (remoteModels: ModelBasicInfo[]) => void
  setLocalModels: (localModels: ModelResponse[]) => void
  addFavouriteModel: (modelName: string) => void
  removeFavouriteModel: (modelName: string) => void
}
