import { UserCardRedLine, UserCardWrapper } from '@components/ui/user-card'
import { getManagementTeam } from '@http/teams/management-team/get-management-team'
import { UserCardComponent } from './user-card'

export async function ManagementTeams() {
  const data = await getManagementTeam({})

  return (
    <>
      {!data.teams.length && (
        <div className="py-8 text-center text-muted-foreground">
          Nenhum membro encontrado na Equipe de Gestão.
        </div>
      )}

      {data.teams.map((teamSection, index: number) => (
        <section className="space-y-4 md:space-y-8" key={index}>
          <div className="space-y-8">
            <h2 className="title-2 relative z-10 bg-background px-4 text-center">
              {teamSection.name}
            </h2>
            <UserCardRedLine />
          </div>

          <UserCardWrapper>
            {teamSection.members.map((member, memberIndex: number) => (
              <UserCardComponent key={memberIndex} member={member} />
            ))}
          </UserCardWrapper>
        </section>
      ))}
    </>
  )
}
