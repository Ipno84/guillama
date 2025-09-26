import { OLLAMA_GET_REMOTE_LIST_QUERY_KEY } from '../model'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { ModelBasicInfo } from '@common/entities/ollama'
import { useOllamaStore } from './store'
import { useEffect, useMemo } from 'react'

export const getOllamaRemoteList = async (modelNames?: string[]): Promise<ModelBasicInfo[]> => {
  try {
    return await window.ollama.remoteList(modelNames)
  } catch (error) {
    console.error(error)
    throw new Error('Ollama remote models list cannot be retrieved.')
  }
}

export const useOllamaRemoteList = (
  modelNames?: string[]
): UseQueryResult<ModelBasicInfo[], Error> => {
  const storedRemoteModels = useOllamaStore((state) => state.remoteModels)
  const addRemoteModels = useOllamaStore((state) => state.addRemoteModels)
  const setRemoteModels = useOllamaStore((state) => state.setRemoteModels)

  const queryKey = useMemo(() => {
    let base = [OLLAMA_GET_REMOTE_LIST_QUERY_KEY]
    if (modelNames) base = [...base, ...modelNames]
    return base
  }, [modelNames])

  const queryResults = useQuery({
    queryKey,
    queryFn: () => getOllamaRemoteList(),
    gcTime: 0,
    placeholderData: storedRemoteModels
  })

  useEffect(() => {
    if (!queryResults.isLoading && queryResults.data) {
      if (!modelNames) {
        setRemoteModels(queryResults.data)
      } else {
        addRemoteModels(queryResults.data)
      }
    }
  }, [queryResults.isLoading, queryResults.data, setRemoteModels, modelNames, addRemoteModels])

  return queryResults
}
