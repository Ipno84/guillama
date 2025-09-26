import { type ModelResponse } from 'ollama'

export const ps = async (): Promise<ModelResponse[]> => {
  const { default: ollama } = await import('ollama')
  const listRespose = await ollama.ps()
  return listRespose.models
}
