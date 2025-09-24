import { OLLAMA_DELETE_MODEL_MUTATION_KEY } from '../model'
import { useMutation, type UseMutationResult } from '@tanstack/react-query'
import type { StatusResponse, DeleteRequest } from 'ollama'

export const deleteModel = async (model: DeleteRequest['model']): Promise<StatusResponse> => {
  try {
    return await window.ollama.del({ model })
  } catch (error) {
    console.error(error)
    throw new Error('Ollama models list cannot be retrieved.')
  }
}

export const useOllamaDeleteModel = (): UseMutationResult<
  StatusResponse,
  Error,
  string,
  unknown
> => {
  return useMutation({
    mutationKey: [OLLAMA_DELETE_MODEL_MUTATION_KEY],
    mutationFn: (model: DeleteRequest['model']) => deleteModel(model)
  })
}
