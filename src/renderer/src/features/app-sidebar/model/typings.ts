import type { LucideProps } from 'lucide-react'

export interface MenuItemProps {
  title: string
  to: string
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
}
