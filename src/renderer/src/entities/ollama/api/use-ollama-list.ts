import { OLLAMA_GET_LIST_QUERY_KEY } from '../model'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { ModelResponse, type ListResponse } from 'ollama'

export const getOllamaList = async (): Promise<ListResponse> => {
  try {
    return await window.ollama.list()
  } catch (error) {
    console.error(error)
    throw new Error('Ollama models list cannot be retrieved.')
  }
}

export const useOllamaList = (): UseQueryResult<ModelResponse[], Error> => {
  return useQuery({
    queryKey: [OLLAMA_GET_LIST_QUERY_KEY],
    queryFn: () => getOllamaList(),
    gcTime: 0,
    select: (data) => data.models
  })
}
