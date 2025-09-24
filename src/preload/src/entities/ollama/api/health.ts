import { OLLAMA_HEALTH } from '@common/entities/ollama'
import { ipcRenderer } from 'electron'

export const health = (): Promise<unknown> => ipcRenderer.invoke(OLLAMA_HEALTH)
