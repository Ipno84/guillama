import { ModelBasicInfo } from '@common/entities/ollama'
import { ModelResponse } from 'ollama'

export interface OllamaStore {
  remoteModels: ModelBasicInfo[]
  localModels: ModelResponse[]
  setRemoteModels: (remoteModels: ModelBasicInfo[]) => void
  addRemoteModels: (remoteModels: ModelBasicInfo[]) => void
  setLocalModels: (localModels: ModelResponse[]) => void
}
