export const send = (): void => {
  window.electron.ipcRenderer.send('ping')
}
