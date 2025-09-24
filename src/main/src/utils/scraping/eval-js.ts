import { BrowserWindow } from 'electron'

export const evalJS = async <T>(win: BrowserWindow, fn: () => T | Promise<T>): Promise<T> => {
  const src = `(${fn.toString()})()`
  return win.webContents.executeJavaScript(src, true)
}
