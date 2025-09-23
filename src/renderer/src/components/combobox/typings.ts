export interface ComboboxItemProps {
  label: string
  value: string
  isSelected?: boolean
  setValue?: React.Dispatch<React.SetStateAction<string>>
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  closeOnSelect?: boolean
}

export interface ComboboxProps<T extends ComboboxItemProps> {
  placeholder: string
  emptyPlaceholder: string
  options: T[]
  closeOnSelect?: boolean
}
