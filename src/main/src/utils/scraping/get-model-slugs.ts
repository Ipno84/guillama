import { BrowserWindow } from 'electron'
import { evalJS } from './eval-js'

export const getModelSlugs = async (win: BrowserWindow): Promise<string[]> => {
  await win.loadURL('https://ollama.com/library/')

  return evalJS(win, () => {
    const anchors = Array.from(
      document.querySelectorAll('a[href^="/library/"]')
    ) as HTMLAnchorElement[]
    const slugs = new Set<string>()
    for (const a of anchors) {
      const href = a.getAttribute('href') || ''
      const m = href.match(/^\/library\/([a-z0-9.\-+:]+)\/?$/i)
      if (m) slugs.add(m[1])
    }
    return Array.from(slugs)
  })
}
