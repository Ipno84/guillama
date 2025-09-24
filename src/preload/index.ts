import { contextBridge } from 'electron'
import { electronAPI } from '@preload/entities/electron'
import * as ollama from '@preload/entities/ollama'

contextBridge.exposeInMainWorld('electron', electronAPI)
contextBridge.exposeInMainWorld('ollama', ollama)
