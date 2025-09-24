import { useEffect, useState } from 'react'
import { OLLAMA_GET_HEALTH_QUERY_KEY } from '../model'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

export const getOllamaHealth = async (): Promise<{
  installed: boolean
  version?: string
  error?: string
}> => {
  try {
    return await window.ollama.health()
  } catch (error) {
    console.error(error)
    throw new Error('Ollama is not active. You should download or initialize it.')
  }
}

export const useOllamaHealth = (): UseQueryResult<
  { installed: boolean; version?: string; error?: string },
  Error
> => {
  const [canCheckHealth, setCanCheckHealth] = useState(true)

  const res = useQuery({
    queryKey: [OLLAMA_GET_HEALTH_QUERY_KEY],
    queryFn: () => getOllamaHealth(),
    enabled: canCheckHealth,
    refetchInterval: 1000
  })

  useEffect(() => {
    if (!res.data?.error) setCanCheckHealth(false)
  }, [res.data])

  return res
}
