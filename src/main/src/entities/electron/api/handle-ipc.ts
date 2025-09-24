import { ipcMain } from 'electron'
import * as llm from '@main/entities/ollama'
import {
  OLLAMA_DEL,
  OLLAMA_HEALTH,
  OLLAMA_LIST,
  OLLAMA_PS,
  OLLAMA_REMOTE_LIST,
  OLLAMA_SHOW
} from '@common/entities/ollama'

export const handleIpc = (): void => {
  ipcMain.handle(OLLAMA_PS, llm.ps)
  ipcMain.handle(OLLAMA_HEALTH, llm.health)
  ipcMain.handle(OLLAMA_LIST, llm.list)
  ipcMain.handle(OLLAMA_REMOTE_LIST, llm.remoteList)
  ipcMain.handle(OLLAMA_DEL, llm.del)
  ipcMain.handle(OLLAMA_SHOW, llm.show)
}
