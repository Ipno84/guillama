import { cn } from '@renderer/lib/cn'
import React from 'react'

export const BreadcrumbItem = ({
  className,
  ...props
}: React.ComponentProps<'li'>): React.JSX.Element => (
  <li
    data-slot="breadcrumb-item"
    className={cn('inline-flex items-center gap-1.5', className)}
    {...props}
  />
)
