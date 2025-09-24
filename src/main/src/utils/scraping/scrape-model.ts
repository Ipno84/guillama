import { BrowserWindow } from 'electron'
import { evalJS } from './eval-js'
import { ScrapedModel } from '@common/entities/ollama'

const evalJsCallback = (): ScrapedModel => {
  const title = document.querySelector('h1')?.textContent?.trim() || undefined
  const summary = document.querySelector('main p')?.textContent?.trim() || undefined

  const badges = Array.from(
    document.querySelectorAll('main [class*="badge"], main .tag, main span, main a')
  )
    .map((el) => (el.textContent || '').trim())
    .filter((t) => t && t.length <= 20)

  const mainText = (document.querySelector('main')?.textContent || '').replace(/\s+/g, ' ')
  const pullsText = mainText.match(/([\d.,]+)\s+Pulls/i)?.[0]
  const tagsText = mainText.match(/([\d.,]+)\s+Tags/i)?.[0]

  const tagRows: { tag: string; sizeLabel?: string }[] = []

  const rows = Array.from(
    document.querySelectorAll('main tr, main li, main .grid > *')
  ) as HTMLElement[]
  for (const r of rows) {
    const text = r.innerText.trim().replace(/\s+/g, ' ')
    const tagMatch = text.match(/\b([a-z0-9._\-+]+:[a-z0-9._\-+]+)\b/i)
    if (tagMatch) {
      const sizeMatch = text.match(/(\d[\d.,]*)\s*[KMGT]?B\b/i)
      tagRows.push({ tag: tagMatch[1], sizeLabel: sizeMatch?.[0] })
    }
  }

  const codes = Array.from(document.querySelectorAll('code, pre'))
    .map((el) => el.textContent || '')
    .join('\n')
  const codeTags = Array.from(new Set(codes.match(/\b([a-z0-9._\-+]+:[a-z0-9._\-+]+)\b/gi) || []))
  for (const t of codeTags) {
    if (!tagRows.find((x) => x.tag === t)) tagRows.push({ tag: t })
  }

  return {
    title,
    summary,
    badges,
    pullsText,
    tagsText,
    tagRows,
    pageText: document.body?.innerText || ''
  }
}

export const scrapeModel = async (win: BrowserWindow, slug: string): Promise<ScrapedModel> => {
  const url = `https://ollama.com/library/${slug}`
  await win.loadURL(url)

  return evalJS(win, evalJsCallback)
}
