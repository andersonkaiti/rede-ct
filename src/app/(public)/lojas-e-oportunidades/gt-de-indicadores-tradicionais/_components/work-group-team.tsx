import { UserCardWrapper } from '@components/ui/user-card'
import { getWorkGroupTeamMembers } from '@http/teams/work-group-team/get-work-group-team-members'
import { UserCardComponent } from './user-card'

export async function WorkGroupTeam() {
  const data = await getWorkGroupTeamMembers({})

  if (!data.members.length) {
    return (
      <div className="py-8 text-center text-muted-foreground">
        Nenhum membro encontrado no Grupo de Trabalho.
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
