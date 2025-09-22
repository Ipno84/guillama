import { cn } from '@renderer/lib/cn'
import React from 'react'

export const BreadcrumbPage = ({
  className,
  ...props
}: React.ComponentProps<'span'>): React.JSX.Element => (
  <span
    data-slot="breadcrumb-page"
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn('text-foreground font-normal', className)}
    {...props}
  />
)
