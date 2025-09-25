import { Home, Brain, BrainCircuit, Download } from 'lucide-react'
import { MenuItemProps } from './typings'

export const NavItems: MenuItemProps[] = [
  {
    title: 'Home',
    to: '',
    icon: Home
  },
  {
    title: 'Remote Catalog',
    to: '/remote-catalog',
    icon: Brain
  },
  {
    title: 'Local Models',
    to: '/local-models',
    icon: BrainCircuit
  },
  {
    title: 'Operations',
    to: '/operations',
    icon: Download
  }
]
