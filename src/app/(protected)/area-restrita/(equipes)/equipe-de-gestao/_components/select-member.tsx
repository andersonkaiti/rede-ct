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
import type React from 'react'
import { useState } from 'react'
import type { ITeamMember } from 'types/team'
import { useUsers } from '../../_hooks/use-users.hook'

interface ISelectMemberProps {
  handleIncludeMember: (member: ITeamMember) => void
}

export function SelectMember({ handleIncludeMember }: ISelectMemberProps) {
  const { data: users } = useUsers()

  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
  const [role, setRole] = useState('')

  const isButtonDisabled = !(selectedUserId && role)

  function handleSelectMember(value: string) {
    setSelectedUserId(value)
  }

  function handleRole(event: React.ChangeEvent<HTMLInputElement>) {
    setRole(event.target.value)
  }

  function handleAddMember() {
    const user = users?.find((u) => u.id === selectedUserId)

    if (user) {
      const newMember: ITeamMember = {
        role,
        user,
      }

      handleIncludeMember(newMember)
    }
  }

  return (
    <header className="flex justify-between gap-2">
      <Select onValueChange={handleSelectMember} value={selectedUserId ?? ''}>
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
        onChange={handleRole}
        placeholder="Cargo"
        type="text"
      />

      <Button
        className="cursor-pointer"
        disabled={isButtonDisabled}
        onClick={handleAddMember}
        type="button"
      >
        <Plus />
        Adicionar
      </Button>
    </header>
  )
}
