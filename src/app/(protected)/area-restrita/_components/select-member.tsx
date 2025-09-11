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
import { CheckIcon, ChevronDownIcon, Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useUsers } from '../(equipes)/_hooks/use-users.hook'

interface ISelectMemberProps {
  userId?: string
  onChange?: (userId: string) => void
}

export function SelectMember({ userId, onChange }: ISelectMemberProps) {
  const { data: users = [], isLoading } = useUsers()
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string>(userId || '')

  useEffect(() => {
    setSelected(userId || '')
  }, [userId])

  const user = users.find((u) => u.id === selected)

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

    return 'Selecione o membro'
  }

  return (
    <div>
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
        {!userId && (
          <PopoverContent
            align="start"
            className="w-full min-w-[var(--radix-popper-anchor-width)] border-input p-0"
          >
            <Command>
              <CommandInput placeholder="Buscar membro..." />
              <CommandList>
                <CommandEmpty>Nenhum membro encontrado.</CommandEmpty>
                <CommandGroup>
                  {users.map((u) => (
                    <CommandItem
                      key={u.id}
                      onSelect={(currentValue) => {
                        setSelected(currentValue)
                        setOpen(false)
                        onChange?.(currentValue)
                      }}
                      value={u.id}
                    >
                      {u.name} ({u.emailAddress})
                      {selected === u.id && (
                        <CheckIcon className="ml-auto" size={16} />
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        )}
      </Popover>

      <input name="userId" type="hidden" value={selected} />
    </div>
  )
}
