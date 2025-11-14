import { Button } from '@components/ui/button'
import SelectWithSearch from '@components/ui/select-search'
import { getUsers } from '@http/users/get-users'
import { useQuery } from '@tanstack/react-query'
import { UserIcon } from 'lucide-react'
import { parseAsString, useQueryState } from 'nuqs'

export function SelectAuthor() {
  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })

  const [authorId, setAuthorId] = useQueryState(
    'authorId',
    parseAsString.withDefault('')
  )

  return (
    <SelectWithSearch
      emptyMessage="Nenhum autor"
      onChange={setAuthorId}
      options={users?.map(user => ({
        label: user.name,
        value: user.id,
      })) || []} 
      placeholder="Selecione um autor"
      selectPlaceholder="Buscar autor..."
      value={authorId}
    >
      <Button className="text-muted-foreground" variant="ghost">
        <UserIcon />
        {users?.length}
      </Button>
    </SelectWithSearch>
  )
}
