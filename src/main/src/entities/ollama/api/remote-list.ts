import { getModelsBasicInfo } from '@main/utils/scraping'
import { ModelBasicInfo } from '@common/entities/ollama'

export const remoteList = async (): Promise<ModelBasicInfo[]> => {
  return await getModelsBasicInfo()
}
