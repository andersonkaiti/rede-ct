import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/ui/select'
import { Plus } from 'lucide-react'
import type { ITeamMember } from 'types/team'
import { useUsers } from '../../_hooks/use-users.hook'

interface ISelectMemberProps {
  inputRef: React.RefObject<HTMLInputElement | null>
  setSelectedMember: React.Dispatch<React.SetStateAction<ITeamMember | null>>
  handleIncludeTeamMember: () => void
}

export function SelectMember({
  inputRef,
  setSelectedMember,
  handleIncludeTeamMember,
}: ISelectMemberProps) {
  const { data: users } = useUsers()

  function handleSelectMember(value: string) {
    const member = users?.find((user) => user.id === value)

    if (member) {
      const newMember: ITeamMember = {
        role: inputRef.current?.value || '',
        id: member.id,
        user: member,
      }

      setSelectedMember(newMember)
    }
  }

  return (
    <header className="flex justify-between gap-2">
      <Select onValueChange={handleSelectMember}>
        <SelectTrigger className="flex-1">
          <SelectValue placeholder="Selecione o membro" />
        </SelectTrigger>
        <SelectContent>
          {users?.map((user) => (
            <SelectItem key={user.id} value={user.id}>
              {user.name} ({user.emailAddress})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        className="flex-1"
        name="role"
        placeholder="Cargo"
        ref={inputRef}
        type="text"
      />

      <Button
        className="cursor-pointer"
        onClick={handleIncludeTeamMember}
        type="button"
      >
        <Plus />
        Adicionar
      </Button>
    </header>
  )
}
