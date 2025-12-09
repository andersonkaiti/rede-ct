import { UserCardWrapper } from '@components/ui/user-card'
import { getSDHCTeamMembers } from '@http/teams/sdhc-team/get-sdhc-team-member'
import { UserCardComponent } from './user-card'

export async function SDHCTeam() {
  const data = await getSDHCTeamMembers({})

  return (
    <>
      <UserCardWrapper>
        {data.members?.map((member, index: number) => (
          <UserCardComponent key={index} member={member} />
        ))}
      </UserCardWrapper>

      {!data.members.length && (
        <div className="py-8 text-center text-muted-foreground">
          Nenhum membro encontrado na Equipe SDHC.
        </div>
      )}
    </>
  )
}
