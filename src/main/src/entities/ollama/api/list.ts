import { type ListResponse } from 'ollama'

export const list = async (): Promise<ListResponse> => {
  const { default: ollama } = await import('ollama')
  return await ollama.list()
}
