import { OLLAMA_GET_LIST_QUERY_KEY } from '../model'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { ModelResponse } from 'ollama'
import { useOllamaStore } from './store'
import { useEffect } from 'react'

export const getOllamaList = async (): Promise<ModelResponse[]> => {
  try {
    return await window.ollama.list()
  } catch (error) {
    console.error(error)
    throw new Error('Ollama models list cannot be retrieved.')
  }
}

export const useOllamaList = (): UseQueryResult<ModelResponse[], Error> => {
  const storedLocalModels = useOllamaStore((state) => state.localModels)
  const setLocalModels = useOllamaStore((state) => state.setLocalModels)

  const queryResults = useQuery({
    queryKey: [OLLAMA_GET_LIST_QUERY_KEY],
    queryFn: () => getOllamaList(),
    gcTime: 0,
    placeholderData: storedLocalModels
  })

  useEffect(() => {
    if (!queryResults.isLoading && queryResults.data) {
      setLocalModels(queryResults.data)
    }
  }, [queryResults.isLoading, queryResults.data, setLocalModels])

  return queryResults
}
