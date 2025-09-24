export const detectModalitiesFromBadges = (badges: string[]): string[] | undefined => {
  const set = new Set<string>()
  for (const b of badges) {
    const t = b.toLowerCase()
    if (t.includes('vision')) set.add('vision')
    if (t.includes('embedding')) set.add('embedding')
  }
  if (!set.size) set.add('text')
  return Array.from(set)
}
