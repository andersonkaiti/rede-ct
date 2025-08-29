import { getInMemoriamTraditionalLeaders } from '@mocks/researchers/in-memoriam-traditional-leaders'
import { InMemoriamCard } from './in-memoriam-card'

export async function PovosTradicionais() {
  const inMemoriamTraditionalLeaders = await getInMemoriamTraditionalLeaders()

  return (
    <>
      {inMemoriamTraditionalLeaders.map((member, index: number) => (
        <InMemoriamCard key={index} member={member} />
      ))}
    </>
  )
}
