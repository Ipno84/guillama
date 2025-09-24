import { OLLAMA_GET_REMOTE_LIST_QUERY_KEY } from '../model'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { baseRemoteModels } from './../model/base-remote-models'
import { ItemResponseLike } from '@common/entities/ollama'

export const getOllamaRemoteList = async (): Promise<ItemResponseLike[]> => {
  try {
    return await window.ollama.remoteList()
  } catch (error) {
    console.error(error)
    throw new Error('Ollama remote models list cannot be retrieved.')
  }
}

export const useOllamaRemoteList = (): UseQueryResult<ItemResponseLike[], Error> => {
  return useQuery({
    queryKey: [OLLAMA_GET_REMOTE_LIST_QUERY_KEY],
    queryFn: () => getOllamaRemoteList(),
    gcTime: 15 * 24 * 60 * 60,
    initialData: baseRemoteModels
  })
}
