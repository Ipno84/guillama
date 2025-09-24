import { OLLAMA_LIST } from '@common/entities/ollama'
import { ipcRenderer } from 'electron'

export const list = (): Promise<unknown> => ipcRenderer.invoke(OLLAMA_LIST)
