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
import { getResearchers } from '@http/researchers/get-researchers'
import { useQuery } from '@tanstack/react-query'
import { cn } from '@utils/cn'
import { CheckIcon, ChevronDownIcon, Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'

interface ISelectResearcherProps {
  researcherId?: string
  onChange?: (researcherId: string) => void
}

export function SelectResearcher({
  researcherId,
  onChange,
}: ISelectResearcherProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['researchers'],
    queryFn: async () => getResearchers({}),
  })

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string>(researcherId || '')

  useEffect(() => {
    setSelected(researcherId || '')
  }, [researcherId])

  const researcher = data?.researchers.find((u) => u.id === selected)

  function renderSelectPlaceholder() {
    if (selected && !isLoading) {
      return `${researcher?.user.name} (${researcher?.user.emailAddress})`
    }

    if (selected && isLoading) {
      return (
        <div className="flex items-center gap-2">
          <Loader2 className="size-4 animate-spin" />
          Carregando...
        </div>
      )
    }

    return 'Selecione o pesquisador'
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
        <PopoverContent
          align="start"
          className="w-full min-w-[var(--radix-popper-anchor-width)] border-input p-0"
        >
          <Command>
            <CommandInput placeholder="Buscar pesquisador..." />
            <CommandList>
              <CommandEmpty>Nenhum pesquisador encontrado.</CommandEmpty>
              <CommandGroup>
                {data?.researchers.map((r) => (
                  <CommandItem
                    key={r.id}
                    onSelect={(currentValue) => {
                      setSelected(currentValue)
                      setOpen(false)
                      onChange?.(currentValue)
                    }}
                    value={r.id}
                  >
                    {r.user.name} ({r.user.emailAddress})
                    {selected === r.id && (
                      <CheckIcon className="ml-auto" size={16} />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <input name="researcherId" type="hidden" value={selected} />
    </div>
  )
}
