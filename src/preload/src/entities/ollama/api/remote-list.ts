import { OLLAMA_REMOTE_LIST } from '@common/entities/ollama'
import { ipcRenderer } from 'electron'

export const remoteList = (...args: unknown[]): Promise<unknown> =>
  ipcRenderer.invoke(OLLAMA_REMOTE_LIST, ...args)
