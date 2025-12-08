import { UserCardWrapper } from '@components/ui/user-card'
import { getWorkGroupTeamMembers } from '@http/teams/work-group-team/get-work-group-team-members'
import { UserCardComponent } from './user-card'

export async function WorkGroupTeam() {
  const data = await getWorkGroupTeamMembers({
    filter: '',
    orderBy: '',
    page: '1',
    limit: '50',
  })

  return (
    <>
      <UserCardWrapper>
        {data.members.length &&
          data.members?.map((member, index: number) => (
            <UserCardComponent key={index} member={member} />
          ))}
      </UserCardWrapper>

      {!data.members.length && (
        <div className="py-8 text-center text-muted-foreground">
          Nenhum membro encontrado no Grupo de Trabalho.
        </div>
      )}
    </>
  )
}
