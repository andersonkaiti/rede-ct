import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/ui/select'
import { useUsers } from '@hooks/use-users.hook'
import { Plus } from 'lucide-react'
import type React from 'react'
import { useState } from 'react'

interface ITeamMember {
  id: string
  role: string
  userId: string
  user: {
    name: string
    id: string
    role: 'ADMIN' | 'USER'
    createdAt: string
    updatedAt: string
    avatarUrl: string | null
    emailAddress: string
    orcid: string | null
    phone: string | null
    lattesUrl: string | null
  }
}

interface ISelectMemberProps {
  handleIncludeMember: (member: ITeamMember) => void
}

export function SelectMember({ handleIncludeMember }: ISelectMemberProps) {
  const { data } = useUsers()

  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
  const [role, setRole] = useState('')

  const handleSelectMember = (value: string) => setSelectedUserId(value)

  function handleRole(event: React.ChangeEvent<HTMLInputElement>) {
    setRole(event.target.value)
  }

  function handleAddMember() {
    const user = data?.users?.find((u) => u.id === selectedUserId)

    if (user) {
      const newMember: ITeamMember = {
        id: user.id,
        role,
        userId: user.id,
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
          {data?.users?.map((user) => (
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
        disabled={!(selectedUserId && role)}
        onClick={handleAddMember}
        type="button"
        variant="outline"
      >
        <Plus />
        Adicionar
      </Button>
    </header>
  )
}
