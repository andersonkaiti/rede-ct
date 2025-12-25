import { UserCardWrapper } from '@components/ui/user-card'
import { getRedeCTHighlights } from '@http/redect-highlights/get-redect-highlights'
import { UserCardComponent } from './user-card'

export async function RedeCTHighlightsList() {
  const { highlights } = await getRedeCTHighlights({})

  if (!highlights.length) {
    return (
      <div className="py-8 text-center text-muted-foreground">
        Nenhum membro encontrado no Grupo de Trabalho.
      </div>
    )
  }

  return (
    <UserCardWrapper>
      {highlights.map((member, index: number) => (
        <UserCardComponent key={index} member={member} />
      ))}
    </UserCardWrapper>
  )
}
