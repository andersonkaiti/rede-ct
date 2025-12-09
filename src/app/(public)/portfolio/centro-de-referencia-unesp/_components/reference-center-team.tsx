import { UserCardWrapper } from '@components/ui/user-card'
import { getReferenceCenterTeamMembers } from '@http/teams/reference-center-team/get-reference-center-team-members'
import { UserCardComponent } from './user-card'

export async function ReferenceCenterTeam() {
  const data = await getReferenceCenterTeamMembers({})

  if (!data.members.length) {
    return (
      <div className="py-8 text-center text-muted-foreground">
        Nenhum membro encontrado no Centro de Referência.
      </div>
    )
  }

  return (
    <UserCardWrapper>
      {data.members.map((member, index: number) => (
        <UserCardComponent key={index} member={member} />
      ))}
    </UserCardWrapper>
  )
}
