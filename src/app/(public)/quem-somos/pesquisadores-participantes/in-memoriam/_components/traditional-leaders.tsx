import { UserCardWrapper } from '@components/ui/user-card'
import { getInMemoriamByRole } from '@http/in-memorian/get-in-memoriam-by-role'
import { InMemoriamCard } from './in-memoriam-card'

export async function TraditionalLeaders() {
  const inMemoriamTraditionalLeaders = await getInMemoriamByRole('LEADER')

  return (
    <>
      {inMemoriamTraditionalLeaders.length > 0 && (
        <UserCardWrapper>
          {inMemoriamTraditionalLeaders.map((member, index: number) => (
            <InMemoriamCard key={index} member={member} />
          ))}
        </UserCardWrapper>
      )}

      {inMemoriamTraditionalLeaders.length === 0 && (
        <div className="col-end-3 flex w-full flex-col items-center justify-center">
          <p className="font-medium text-lg text-muted-foreground">
            Nenhum líder tradicional encontrado.
          </p>
        </div>
      )}
    </>
  )
}
