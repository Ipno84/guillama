import type { DeleteRequest, StatusResponse } from 'ollama'

export const del = async (
  _: Electron.IpcMainInvokeEvent,
  request: DeleteRequest
): Promise<StatusResponse> => {
  const { default: ollama } = await import('ollama')
  return await ollama.delete(request)
}
