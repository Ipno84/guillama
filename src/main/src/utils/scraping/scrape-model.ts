import { evalJS } from './eval-js'
import { ScrapedModel } from '@common/entities/ollama'
import { createHiddenWindow } from './create-hidden-window'

const evalJsCallback = (): ScrapedModel => {
  const title = document.querySelector('[x-test-model-name]')?.textContent?.trim() || undefined
  const summary = document.querySelector('#summary-content')?.textContent?.trim() || undefined

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
    pageText: document.body?.innerText || '',
    url: window.location.href
  }
}

export const scrapeModel = async (url: string): Promise<ScrapedModel> => {
  const win = await createHiddenWindow()
  await win.loadURL(url)

  const res = evalJS(win, evalJsCallback)

  console.log(await res)

  win.destroy()

  return res
}
