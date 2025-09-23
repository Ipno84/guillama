import { Button } from '@renderer/components/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList
} from '@renderer/components/command'
import { Popover, PopoverContent, PopoverTrigger } from '@renderer/components/popover'
import { ChevronsUpDownIcon } from 'lucide-react'
import { useState } from 'react'
import type { ComboboxProps, ComboboxItemProps } from './../typings'
import { ComboboxItem } from './combobox-item'

export const Combobox = <T extends ComboboxItemProps>({
  placeholder,
  emptyPlaceholder,
  options,
  closeOnSelect
}: ComboboxProps<T>): React.JSX.Element => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? options.find((option) => option.value === value)?.label : (placeholder ?? '')}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>{emptyPlaceholder}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <ComboboxItem
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  isSelected={value === option.value}
                  setValue={setValue}
                  setOpen={setOpen}
                  closeOnSelect={closeOnSelect}
                />
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
