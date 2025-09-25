import { createHiddenWindow } from './create-hidden-window'
import { evalJS } from './eval-js'

export const getModelUrls = async (): Promise<string[]> => {
  const win = await createHiddenWindow()
  await win.loadURL('https://ollama.com/library/')

  const urls = evalJS(win, () => {
    const anchors = Array.from(document.querySelectorAll('[x-test-model] a')) as HTMLAnchorElement[]
    return anchors.map((anchor) => {
      const href = anchor.getAttribute('href')
      if (href?.startsWith('http')) return href
      return `${window.location.origin}${href}`
    })
  })

  win.destroy()

  return urls
}
