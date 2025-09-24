import { BrowserWindow } from 'electron'

export const createHiddenWindow = async (): Promise<BrowserWindow> =>
  new BrowserWindow({
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      offscreen: true,
      partition: 'persist:ollama-scraper'
    }
  })
