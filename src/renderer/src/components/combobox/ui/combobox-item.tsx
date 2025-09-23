import { CommandItem } from '@renderer/components/command'
import { cn } from '@renderer/lib/cn'
import { CheckIcon } from 'lucide-react'
import type { ComboboxItemProps } from './../typings'
import { useCallback } from 'react'

export const ComboboxItem = ({
  value,
  label,
  isSelected,
  setValue,
  setOpen,
  closeOnSelect
}: ComboboxItemProps): React.JSX.Element => {
  const onSelect = useCallback(
    (currentValue: string) => {
      setValue(isSelected ? '' : currentValue)
      if (closeOnSelect) setOpen(false)
    },
    [closeOnSelect, isSelected, setOpen, setValue]
  )

  return (
    <CommandItem value={value} onSelect={onSelect}>
      <CheckIcon className={cn('mr-2 h-4 w-4', isSelected ? 'opacity-100' : 'opacity-0')} />
      {label}
    </CommandItem>
  )
}
