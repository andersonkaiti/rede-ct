import { UserCardWrapper } from '@components/ui/user-card'
import { getLegitimatingCommittee } from '@http/teams/legitimating-committee'
import { UserCardComponent } from './user-card'

export async function ComiteLegitimador() {
  const [legitimatingCommittee] = await getLegitimatingCommittee()

  const hasMembers =
    legitimatingCommittee?.members && legitimatingCommittee.members.length > 0

  return (
    <>
      <UserCardWrapper>
        {hasMembers &&
          legitimatingCommittee.members.map((member, index: number) => (
            <UserCardComponent key={index} member={member} />
          ))}
      </UserCardWrapper>

      {!hasMembers && (
        <div className="py-8 text-center text-muted-foreground">
          Nenhum membro encontrado no Comitê Legitimador.
        </div>
      )}
    </>
  )
}
