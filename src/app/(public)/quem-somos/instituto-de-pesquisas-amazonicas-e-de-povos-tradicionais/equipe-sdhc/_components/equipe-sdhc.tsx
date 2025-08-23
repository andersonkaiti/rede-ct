import { UserCardWrapper } from '@components/ui/user-card'
import { getSdhcTeam } from '@http/sdhc-team'
import { UserCard } from './user-card'

export async function EquipeSdhc() {
  const sdhcTeam = await getSdhcTeam()

  return (
    <UserCardWrapper>
      {sdhcTeam[0].team_members.map((member, index: number) => (
        <UserCard key={index} member={member} />
      ))}
    </UserCardWrapper>
  )
}
