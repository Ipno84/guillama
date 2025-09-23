import { Slot } from '@radix-ui/react-slot'
import { cn } from '@renderer/lib/cn'
import React from 'react'

export const BreadcrumbLink = ({
  asChild,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean
}): React.JSX.Element => {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn('hover:text-foreground transition-colors', className)}
      {...props}
    />
  )
}
