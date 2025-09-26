import { ElectronAPI } from '@electron-toolkit/preload'
import type { DeleteRequest, StatusResponse, ShowRequest, ShowResponse } from 'ollama'
import type { CheckOllama, ItemResponseLike } from '@common/entities/ollama'

declare global {
  interface Window {
    electron: ElectronAPI
    ollama: {
      del: (request: DeleteRequest) => Promise<StatusResponse>
      show: (request: ShowRequest) => Promise<ShowResponse>
      health: () => Promise<CheckOllama>
      list: () => Promise<ModelResponse[]>
      ps: () => Promise<ModelResponse[]>
      remoteList: () => Promise<ItemResponseLike[]>
    }
  }
}
