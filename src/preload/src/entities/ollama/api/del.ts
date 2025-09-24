import { OLLAMA_DEL } from '@common/entities/ollama'
import { ipcRenderer } from 'electron'

export const del = (...args: unknown[]): Promise<unknown> => ipcRenderer.invoke(OLLAMA_DEL, ...args)
