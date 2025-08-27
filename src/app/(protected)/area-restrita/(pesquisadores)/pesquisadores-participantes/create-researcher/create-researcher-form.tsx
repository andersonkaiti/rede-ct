import { Button } from '@components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@components/ui/dialog'
import { Label } from '@components/ui/label'
import {
  PageForm,
  PageFormContent,
  PageFormContentField,
} from '@components/ui/page-container'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/ui/select'

import { SelectMember } from '../../../_components/select-member'

interface ICreateResearcherFormProps {
  setIsOpen: (isOpen: boolean) => void
}

export function CreateResearcherForm({
  setIsOpen,
}: ICreateResearcherFormProps) {
  const researchers = [
    {
      label: 'Pesquisador',
      value: 'researcher',
    },
    {
      label: 'Pesquisador Sênior',
      value: 'senior-researcher',
    },
    {
      label: 'Pesquisador Júnior',
      value: 'junior-researcher',
    },
    {
      label: 'Membro Honorário',
      value: 'honorary-member',
    },
  ]

  return (
    <DialogContent className="max-h-[100vh-2rem] space-y-8 overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Cadastrar pesquisador participante</DialogTitle>
      </DialogHeader>

      <DialogContent>
        <PageForm>
          <PageFormContent>
            <PageFormContentField>
              <Label>Usuários</Label>

              <SelectMember />
            </PageFormContentField>

            <PageFormContentField>
              <Label>Cargo</Label>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o cargo" />
                </SelectTrigger>

                <SelectContent>
                  {researchers.map((researcher) => (
                    <SelectItem key={researcher.value} value={researcher.value}>
                      {researcher.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </PageFormContentField>
          </PageFormContent>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Cadastrar pesquisador</Button>
          </DialogFooter>
        </PageForm>
      </DialogContent>
    </DialogContent>
  )
}
