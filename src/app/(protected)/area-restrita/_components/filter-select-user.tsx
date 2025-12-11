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
import { getUsers } from '@http/users/get-users'
import { useQuery } from '@tanstack/react-query'
import { cn } from '@utils/cn'
import { CheckIcon, ChevronDownIcon, Loader2 } from 'lucide-react'
import { parseAsString, useQueryState } from 'nuqs'
import { useEffect, useState } from 'react'

export function FilterSelectUser() {
  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })

  const [userId, setUserId] = useQueryState(
    'userId',
    parseAsString.withDefault(''),
  )
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string>(userId || '')

  useEffect(() => {
    setSelected(userId || '')
  }, [userId])

  const user = users.find((u) => u.id === selected)
  const ALL_USERS_VALUE = 'all'

  function renderSelectPlaceholder() {
    if (selected && !isLoading) {
      return `${user?.name} (${user?.emailAddress})`
    }

    if (selected && isLoading) {
      return (
        <div className="flex items-center gap-2">
          <Loader2 className="size-4 animate-spin" />
          Carregando...
        </div>
      )
    }

    return 'Todos os usuários'
  }

  function handleSelect(currentValue: string) {
    if (currentValue === ALL_USERS_VALUE) {
      setSelected('')
      setUserId('')
    } else {
      const foundUser = users.find(
        (u) =>
          `${u.name} (${u.emailAddress})`.toLowerCase() ===
          currentValue.toLowerCase(),
      )
      if (foundUser) {
        setSelected(foundUser.id)
        setUserId(foundUser.id)
      }
    }
    setOpen(false)
  }

  return (
    <div className="w-full lg:w-fit">
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild>
          <Button
            aria-expanded={open}
            className="w-full justify-between border-input bg-background px-3 font-normal outline-none outline-offset-0 hover:bg-background focus-visible:outline-[3px]"
            role="combobox"
            variant="outline"
          >
            <span
              className={cn('truncate', !selected && 'text-muted-foreground')}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="size-4 animate-spin" />
                  Carregando...
                </span>
              ) : (
                renderSelectPlaceholder()
              )}
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
          className="w-full min-w-(--radix-popper-anchor-width) border-input p-0"
        >
          <Command>
            <CommandInput placeholder="Buscar usuário..." />
            <CommandList>
              <CommandEmpty>Nenhum usuário encontrado.</CommandEmpty>
              <CommandGroup>
                <CommandItem
                  key="all"
                  onSelect={() => handleSelect(ALL_USERS_VALUE)}
                  value={ALL_USERS_VALUE}
                >
                  Todos os usuários
                  {selected === '' && (
                    <CheckIcon className="ml-auto" size={16} />
                  )}
                </CommandItem>
                {isLoading && (
                  <div className="px-4 py-2 text-muted-foreground text-sm">
                    <Loader2 className="mr-2 inline size-4 animate-spin" />
                    Carregando usuários...
                  </div>
                )}
                {!isLoading &&
                  users.map((u) => (
                    <CommandItem
                      key={u.id}
                      onSelect={handleSelect}
                      value={`${u.name} (${u.emailAddress})`}
                    >
                      {u.name}
                      {selected === u.id && (
                        <CheckIcon className="ml-auto" size={16} />
                      )}
                    </CommandItem>
                  ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <input name="userId" type="hidden" value={selected} />
    </div>
  )
}
