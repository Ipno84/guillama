import { ItemResponseLike } from '@common/entities/ollama'
import { createHiddenWindow } from './create-hidden-window'
import { getModelSlugs } from './get-model-slugs'
import { inferModel } from './infer-model'
import { scrapeModel } from './scrape-model'
import { sleep } from './../sleep'

export async function scrapeOllamaLibraries(): Promise<ItemResponseLike[]> {
  const win = await createHiddenWindow()
  try {
    const slugs = await getModelSlugs(win)

    const models: ItemResponseLike[] = []
    for (const [i, slug] of slugs.entries()) {
      const data = await scrapeModel(win, slug)

      const model = inferModel(slug, data, win)

      models.push(model)

      if ((i + 1) % 5 === 0) await sleep(350)
    }

    return models
  } finally {
    win.destroy()
  }
}
