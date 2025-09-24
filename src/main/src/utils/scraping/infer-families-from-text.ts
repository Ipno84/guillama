export const inferFamiliesFromText = (text: string): { family?: string; families?: string[] } => {
  const known = [
    'llama',
    'mistral',
    'qwen',
    'qwen2',
    'qwen2.5',
    'gemma',
    'phi',
    'nemotron',
    'command-r',
    'tinyllama',
    'deepseek',
    'mixtral',
    'yi',
    'aya',
    'llava',
    'llava-phi'
  ]
  const found = new Set<string>()
  for (const k of known) {
    if (text.toLowerCase().includes(k)) found.add(k)
  }
  const arr = Array.from(found)
  return {
    family: arr[0],
    families: arr.length ? arr : undefined
  }
}
