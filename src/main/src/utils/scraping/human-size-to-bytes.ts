export const humanSizeToBytes = (label: string): number | undefined => {
  const m = label.trim().match(/^([\d.,]+)\s*([KMGT]?B)$/i)
  if (!m) return
  const n = parseFloat(m[1].replace(',', '.'))
  const unit = m[2].toUpperCase()
  const pow = unit === 'KB' ? 1 : unit === 'MB' ? 2 : unit === 'GB' ? 3 : unit === 'TB' ? 4 : 0
  return Math.round(n * Math.pow(1024, pow))
}
