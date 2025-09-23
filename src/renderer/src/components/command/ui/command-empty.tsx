import { Command as CommandPrimitive } from 'cmdk'

const { Empty } = CommandPrimitive

export const CommandEmpty = ({
  ...props
}: React.ComponentProps<typeof Empty>): React.JSX.Element => (
  <Empty data-slot="command-empty" className="py-6 text-center text-sm" {...props} />
)
