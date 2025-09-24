import { type ListResponse } from 'ollama'

export const ps = async (): Promise<ListResponse> => {
  const { default: ollama } = await import('ollama')
  return await ollama.ps()
}
