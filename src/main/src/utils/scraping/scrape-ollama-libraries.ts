import { ItemResponseLike } from '@common/entities/ollama'
import { getModelUrls } from './get-model-urls'
import { inferModel } from './infer-model'
import { scrapeModel } from './scrape-model'
import { sleep } from '@common/utils/sleep'

const concurrency = 6
const chunkDelayMs = 350

export async function scrapeOllamaLibraries(): Promise<ItemResponseLike[]> {
  let urls = await getModelUrls()
  // TODO: remove below limit
  urls = urls.slice(0, 5)

  const models: ItemResponseLike[] = []

  for (let i = 0; i < urls.length; i += concurrency) {
    const chunk = urls.slice(i, i + concurrency)

    const settled = await Promise.allSettled(
      chunk.map(async (url) => {
        const data = await scrapeModel(url)
        return inferModel(url, data)
      })
    )

    for (const s of settled) {
      if (s.status === 'fulfilled' && s.value) models.push(s.value)
    }

    if (i + concurrency < urls.length && chunkDelayMs > 0) {
      await sleep(chunkDelayMs)
    }
  }

  return models
}
