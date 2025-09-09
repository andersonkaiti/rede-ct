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
import { Label } from '@components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@components/ui/popover'
import { cn } from '@utils/cn'
import { CheckIcon, ChevronDownIcon } from 'lucide-react'
import { useId, useState } from 'react'

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'angular',
    label: 'Angular',
  },
  {
    value: 'vue',
    label: 'Vue.js',
  },
  {
    value: 'react',
    label: 'React',
  },
  {
    value: 'ember',
    label: 'Ember.js',
  },
  {
    value: 'gatsby',
    label: 'Gatsby',
  },
  {
    value: 'eleventy',
    label: 'Eleventy',
  },
  {
    value: 'solid',
    label: 'SolidJS',
  },
  {
    value: 'preact',
    label: 'Preact',
  },
  {
    value: 'qwik',
    label: 'Qwik',
  },
  {
    value: 'alpine',
    label: 'Alpine.js',
  },
  {
    value: 'lit',
    label: 'Lit',
  },
]

export default function SelectWithSearch() {
  const id = useId()
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Select with search</Label>
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild>
          <Button
            aria-expanded={open}
            className="w-full justify-between border-input bg-background px-3 font-normal outline-none outline-offset-0 hover:bg-background focus-visible:outline-[3px]"
            id={id}
            role="combobox"
            variant="outline"
          >
            <span className={cn('truncate', !value && 'text-muted-foreground')}>
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : 'Select framework'}
            </span>
            <ChevronDownIcon
              aria-hidden="true"
              className="shrink-0 text-muted-foreground/80"
              size={16}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="w-full min-w-[var(--radix-popper-anchor-width)] border-input p-0"
        >
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? '' : currentValue)
                      setOpen(false)
                    }}
                    value={framework.value}
                  >
                    {framework.label}
                    {value === framework.value && (
                      <CheckIcon className="ml-auto" size={16} />
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
