'use client'

import { Button } from '@components/ui/button'
import { Checkbox } from '@components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { Label } from '@components/ui/label'
import { Funnel } from 'lucide-react'
import { parseAsBoolean, useQueryStates } from 'nuqs'

export function LawDisplayOptions() {
  const [displayOptions, setDisplayOptions] = useQueryStates({
    title: parseAsBoolean.withDefault(true),
    link: parseAsBoolean.withDefault(true),
    country: parseAsBoolean.withDefault(true),
    createdAt: parseAsBoolean.withDefault(true),
    updatedAt: parseAsBoolean.withDefault(true),
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Funnel aria-hidden="true" className="-ms-1 opacity-60" size={16} />
          Exibir
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-fit space-y-2 p-4">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={displayOptions.title}
            id="title"
            onCheckedChange={(checked) =>
              setDisplayOptions({
                title: Boolean(checked),
              })
            }
          />
          <Label htmlFor="title">Título</Label>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            checked={displayOptions.link}
            id="link"
            onCheckedChange={(checked) =>
              setDisplayOptions({
                link: Boolean(checked),
              })
            }
          />
          <Label htmlFor="link">Link</Label>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            checked={displayOptions.country}
            id="country"
            onCheckedChange={(checked) =>
              setDisplayOptions({
                country: Boolean(checked),
              })
            }
          />
          <Label htmlFor="country">País</Label>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            checked={displayOptions.createdAt}
            id="createdAt"
            onCheckedChange={(checked) =>
              setDisplayOptions({
                createdAt: Boolean(checked),
              })
            }
          />
          <Label htmlFor="createdAt">Criado em</Label>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            checked={displayOptions.updatedAt}
            id="updatedAt"
            onCheckedChange={(checked) =>
              setDisplayOptions({
                updatedAt: Boolean(checked),
              })
            }
          />
          <Label htmlFor="updatedAt">Atualizado em</Label>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
