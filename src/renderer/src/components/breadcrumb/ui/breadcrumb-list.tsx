import { cn } from '@renderer/lib/cn'
import React from 'react'

export const BreadcrumbList = ({
  className,
  ...props
}: React.ComponentProps<'ol'>): React.JSX.Element => (
  <ol
    data-slot="breadcrumb-list"
    className={cn(
      'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5',
      className
    )}
    {...props}
  />
)
