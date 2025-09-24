import { OLLAMA_SHOW_MODEL_QUERY_KEY } from '../model'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import type { ShowResponse, ShowRequest } from 'ollama'
import { useMemo } from 'react'

export const showModel = async (request: ShowRequest): Promise<ShowResponse> => {
  try {
    return await window.ollama.show(request)
  } catch (error) {
    console.error(error)
    throw new Error('Ollama model cannot be shown.')
  }
}

export const useOllamaShowModel = (request: ShowRequest): UseQueryResult<unknown, Error> => {
  const options = useMemo(() => {
    if (!request.options) return ''
    const values = Object.values(request.options)
    const keys = Object.keys(request.options)
    return [...values, ...keys].join(':')
  }, [request.options])

  return useQuery({
    queryKey: [
      OLLAMA_SHOW_MODEL_QUERY_KEY,
      request.model,
      options,
      request.system,
      request.template
    ].filter(Boolean),
    queryFn: () => showModel(request)
  })
}
