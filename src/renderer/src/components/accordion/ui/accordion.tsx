import * as AccordionPrimitive from '@radix-ui/react-accordion'

const { Root } = AccordionPrimitive

export const Accordion = (props: React.ComponentProps<typeof Root>): React.JSX.Element => (
  <Root data-slot="accordion" {...props} />
)
