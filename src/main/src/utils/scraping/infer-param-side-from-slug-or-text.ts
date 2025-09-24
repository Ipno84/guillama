export const inferParamSizeFromSlugOrText = (slug: string, text: string): string | undefined => {
  const m = (slug + ' ' + text).match(/(?:\b|\D)(\d{1,3})\s*(?:b|B)\b/)
  return m ? `${m[1]}B` : undefined
}
