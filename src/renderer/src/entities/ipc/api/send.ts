export const send = () => {
  window.electron.ipcRenderer.send('ping')
}
