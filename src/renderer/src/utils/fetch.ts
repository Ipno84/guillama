export const fetchJSON = async <T>(url: string, init?: RequestInit): Promise<T> => {
  const res = await fetch(url, init)

  if (!res.ok) throw new Error(`Errore HTTP! Status: ${res.status}`)

  return res.json() as Promise<T>
}
