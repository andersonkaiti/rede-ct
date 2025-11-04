import { UserCardWrapper } from '@components/ui/user-card'
import { getLegitimatorCommitteeMembers } from '@http/teams/legitimator-committee/get-legitimator-committee-members'
import { UserCardComponent } from './user-card'

export async function LegitimatorCommittee() {
  const data = await getLegitimatorCommitteeMembers({})

  return (
    <>
      <UserCardWrapper>
        {data.members.length &&
          data.members.map((member, index: number) => (
            <UserCardComponent key={index} member={member} />
          ))}
      </UserCardWrapper>

      {!data.members.length && (
        <div className="py-8 text-center text-muted-foreground">
          Nenhum membro encontrado no Comitê Legitimador.
        </div>
      )}
    </>
  )
}
