import { OLLAMA_GET_REMOTE_LIST_QUERY_KEY } from '../model'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { ModelBasicInfo } from '@common/entities/ollama'
import { useOllamaStore } from './store'
import { useEffect } from 'react'

export const getOllamaRemoteList = async (): Promise<ModelBasicInfo[]> => {
  try {
    return await window.ollama.remoteList()
  } catch (error) {
    console.error(error)
    throw new Error('Ollama remote models list cannot be retrieved.')
  }
}

export const useOllamaRemoteList = (): UseQueryResult<ModelBasicInfo[], Error> => {
  const storedRemoteModels = useOllamaStore((state) => state.remoteModels)
  const setRemoteModels = useOllamaStore((state) => state.setRemoteModels)

  const queryResults = useQuery({
    queryKey: [OLLAMA_GET_REMOTE_LIST_QUERY_KEY],
    queryFn: () => getOllamaRemoteList(),
    gcTime: 0,
    placeholderData: storedRemoteModels
  })

  useEffect(() => {
    if (!queryResults.isLoading && queryResults.data) {
      setRemoteModels(queryResults.data)
    }
  }, [queryResults.isLoading, queryResults.data, setRemoteModels])

  return queryResults
}
