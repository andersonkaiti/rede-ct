import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/ui/select'
import { Loader2 } from 'lucide-react'

import { useUsers } from '../(equipes)/_hooks/use-users.hook'

interface ISelectMemberProps {
  userId?: string
}

export function SelectMember({ userId }: ISelectMemberProps) {
  const { data: users, isLoading } = useUsers()

  const user = users?.find((u) => u.id === userId)
  const memberName = `${user?.first_name} ${user?.last_name || ''}`

  function renderSelectPlaceholder() {
    if (userId && !isLoading) {
      return memberName
    }

    if (userId && isLoading) {
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
    <Select defaultValue={userId} name="user_id">
      <SelectTrigger className="w-full">
        <SelectValue placeholder={renderSelectPlaceholder()} />
      </SelectTrigger>

      {userId && (
        <SelectContent>
          <SelectItem value={userId}>{renderSelectPlaceholder()}</SelectItem>
        </SelectContent>
      )}

      {!userId && (
        <SelectContent>
          {users?.map((u) => (
            <SelectItem key={u.id} value={u.id}>
              {u.first_name} {u.last_name || ''}
            </SelectItem>
          ))}
        </SelectContent>
      )}
    </Select>
  )
}
