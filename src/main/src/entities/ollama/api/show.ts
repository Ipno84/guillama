import type { ShowRequest, ShowResponse } from 'ollama'

export const show = async (
  _: Electron.IpcMainInvokeEvent,
  request: ShowRequest
): Promise<ShowResponse> => {
  const { default: ollama } = await import('ollama')
  return await ollama.show(request)
}
