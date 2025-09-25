export const sleep = (ms: number): Promise<ReturnType<typeof setTimeout>> =>
  new Promise((r) => setTimeout(r, ms))
