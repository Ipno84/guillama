import { app } from 'electron'
import path from 'node:path'
import fs from 'node:fs/promises'
import { scrapeOllamaLibraries } from './scrape-ollama-libraries'

export const saveRemoteCatalog = async (): Promise<string> => {
  const res = await scrapeOllamaLibraries()
  const outPath = path.join(app.getPath('desktop'), 'ollama-library-remote.json')
  await fs.writeFile(outPath, JSON.stringify(res, null, 2), 'utf8')
  return outPath
}
