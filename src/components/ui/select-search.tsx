'use client'

import { Button } from '@components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@components/ui/popover'
import { cn } from '@utils/cn'
import { CheckIcon, ChevronDownIcon } from 'lucide-react'
import { type ReactNode, useId, useState } from 'react'

interface IOption {
  value: string
  label: string
}

interface ISelectWithSearchProps {
  options: IOption[]
  placeholder: string
  emptyMessage: string
  selectPlaceholder: string
  value: string
  onChange: (value: string) => void
  children?: ReactNode
}

export default function SelectWithSearch({
  options,
  placeholder,
  emptyMessage,
  selectPlaceholder,
  value,
  onChange,
  children,
}: ISelectWithSearchProps) {
  const id = useId()
  const [open, setOpen] = useState<boolean>(false)

  const defaultTrigger = (
    <Button
      aria-expanded={open}
      className="w-full justify-between border-input bg-background px-3 font-normal outline-none outline-offset-0 hover:bg-background focus-visible:outline-[3px]"
      id={id}
      role="combobox"
      variant="ghost"
    >
      <span className={cn('truncate', !value && 'text-muted-foreground')}>
        {value
          ? options.find((option) => option.value === value)?.label
          : selectPlaceholder}
      </span>
      <ChevronDownIcon
        aria-hidden="true"
        className="size-4 shrink-0 text-muted-foreground/80"
      />
    </Button>
  )

  return (
    <div className="*:not-first:mt-2">
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild>
          {children ? children : defaultTrigger}
        </PopoverTrigger>
        <PopoverContent align="start" className="w-full border-input p-0">
          <Command
            filter={(value, search) => {
              const option = options.find((option) => option.value === value)

              if (option?.label.toLowerCase().includes(search.toLowerCase())) {
                return 1
              }

              return 0
            }}
          >
            <CommandInput placeholder={placeholder} />
            <CommandList>
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup>
                <CommandItem
                  key="__none__"
                  onSelect={() => {
                    onChange('')
                    setOpen(false)
                  }}
                  value=""
                  className="cursor-pointer hover:bg-accent"
                >
                  <span className="text-muted-foreground">
                    Nenhum selecionado
                  </span>
                  {value === '' && <CheckIcon className="ml-auto size-4" />}
                </CommandItem>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    onSelect={(currentValue) => {
                      onChange(currentValue === value ? '' : currentValue)
                      setOpen(false)
                    }}
                    value={option.value}
                    className="cursor-pointer"
                  >
                    {option.label}
                    {value === option.value && (
                      <CheckIcon className="ml-auto size-4" />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
