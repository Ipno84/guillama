import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { OllamaStore } from '../model'

const getDefaultState = (): Pick<OllamaStore, 'remoteModels' | 'localModels'> => ({
  remoteModels: [],
  localModels: []
})

const StoreName = 'OllamaStore'

const storeCreator = persist(
  devtools<OllamaStore>(
    (set) => ({
      ...getDefaultState(),
      setRemoteModels: (remoteModels) => {
        set((state) => ({
          ...state,
          remoteModels
        }))
      },
      addRemoteModels: (remoteModels) => {
        set((state) => {
          const indexByName = new Map(state.remoteModels.map((item, i) => [item.name, i]))
          const result = state.remoteModels.slice()

          for (const item of remoteModels) {
            const idx = indexByName.get(item.name)
            if (idx != null) {
              result[idx] = item
            } else {
              result.push(item)
            }
          }

          return {
            ...state,
            remoteModels: result
          }
        })
      },
      setLocalModels: (localModels) => {
        set((state) => ({
          ...state,
          localModels
        }))
      }
    }),
    { name: StoreName, enabled: import.meta.env.DEV }
  ),
  { name: StoreName }
)

export const useOllamaStore = create<OllamaStore>()(storeCreator)
