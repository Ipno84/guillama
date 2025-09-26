import { getModelsBasicInfo } from '@main/utils/scraping'
import { ModelBasicInfo } from '@common/entities/ollama'

export const remoteList = async (
  _: Electron.IpcMainInvokeEvent,
  request: string[]
): Promise<ModelBasicInfo[]> => {
  return await getModelsBasicInfo(request)
}
