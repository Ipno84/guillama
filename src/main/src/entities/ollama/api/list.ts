import { type ModelResponse } from 'ollama'

export const list = async (): Promise<ModelResponse[]> => {
  const { default: ollama } = await import('ollama')
  const listRespose = await ollama.list()
  return listRespose.models
}
