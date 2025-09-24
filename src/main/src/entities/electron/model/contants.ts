import icon from './../../../../../../resources/icon.png?asset'
import { join } from 'path'

export const mainWindowOptions: Electron.BrowserWindowConstructorOptions = {
  title: 'Guillama',
  width: 900,
  height: 670,
  show: false,
  autoHideMenuBar: true,
  center: true,
  ...(process.platform === 'linux' ? { icon } : {}),
  webPreferences: {
    preload: join(__dirname, '../preload/index.js'),
    sandbox: false
  }
}
