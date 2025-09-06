import { UserCardWrapper } from '@components/ui/user-card'
import { getSdhcTeam } from '@http/teams/sdhc-team'
import { UserCardComponent } from './user-card'

export async function EquipeSdhc() {
  const [sdhcTeam] = await getSdhcTeam()

  const hasMembers = sdhcTeam?.members && sdhcTeam.members.length > 0

  return (
    <>
      <UserCardWrapper>
        {hasMembers &&
          sdhcTeam.members?.map((member, index: number) => (
            <UserCardComponent key={index} member={member} />
          ))}
      </UserCardWrapper>

      {!hasMembers && (
        <div className="py-8 text-center text-muted-foreground">
          Nenhum membro encontrado na Equipe SDHC.
        </div>
      )}
    </>
  )
}
