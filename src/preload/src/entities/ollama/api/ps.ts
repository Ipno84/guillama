import { OLLAMA_PS } from '@common/entities/ollama'
import { ipcRenderer } from 'electron'

export const ps = (): Promise<unknown> => ipcRenderer.invoke(OLLAMA_PS)
