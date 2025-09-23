import { cn } from '@renderer/lib/cn'
import { Command as CommandPrimitive } from 'cmdk'
import { SearchIcon } from 'lucide-react'

const { Input } = CommandPrimitive

export const CommandInput = ({
  className,
  ...props
}: React.ComponentProps<typeof Input>): React.JSX.Element => (
  <div data-slot="command-input-wrapper" className="flex h-9 items-center gap-2 border-b px-3">
    <SearchIcon className="size-4 shrink-0 opacity-50" />
    <Input
      data-slot="command-input"
      className={cn(
        'placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  </div>
)
