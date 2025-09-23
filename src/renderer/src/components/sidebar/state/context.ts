import { createContext } from 'react'
import type { SidebarContextProps } from '../typings'

export const SidebarContext = createContext<SidebarContextProps | null>(null)
