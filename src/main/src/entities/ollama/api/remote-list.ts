import { scrapeOllamaLibraries } from '@main/utils/scraping'
import { ItemResponseLike } from '@common/entities/ollama'

export const remoteList = async (): Promise<ItemResponseLike[]> => {
  return await scrapeOllamaLibraries()
}
