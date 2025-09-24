import { OLLAMA_SHOW } from '@common/entities/ollama'
import { ipcRenderer } from 'electron'

export const show = (...args: unknown[]): Promise<unknown> =>
  ipcRenderer.invoke(OLLAMA_SHOW, ...args)
