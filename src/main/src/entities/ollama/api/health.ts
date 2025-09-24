import { CheckOllama } from '@common/entities/ollama'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)

export async function checkOllamaCli(): Promise<CheckOllama> {
  const bin = process.platform === 'win32' ? 'ollama.exe' : 'ollama'
  try {
    const { stdout } = await execFileAsync(bin, ['--version'])
    return { installed: true, version: stdout.trim() }
  } catch (e) {
    return { installed: false, error: String(e) }
  }
}

export async function checkOllamaApi(timeoutMs = 800): Promise<CheckOllama> {
  const { default: ollama } = await import('ollama')
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), timeoutMs)
  try {
    const res = await fetch(`${ollama['config'].host}/api/version`, { signal: ctrl.signal })
    if (!res.ok)
      return { installed: false, error: `Error fetching api version: status ${res.status}` }
    const { version } = await res.json()
    return { installed: true, version: version }
  } catch (e) {
    return { installed: false, error: String(e) }
  } finally {
    clearTimeout(timer)
  }
}

export const health = async (): Promise<CheckOllama> => {
  return await Promise.race([checkOllamaApi(), checkOllamaCli()])
}
