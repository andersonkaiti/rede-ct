
import { getRegionalCongresses } from '@mocks/congresses/regional-congresses'
import { CongressCard } from './congress-card'

export async function Congresses() {
  const congressos = await getRegionalCongresses()

  return (
    <div className="space-y-8">
      {congressos.map((congresso) => (
        <CongressCard
          description={congresso.description}
          imageUrl={congresso.imageUrl}
          key={congresso.id}
          link={congresso.link}
          title={congresso.title}
        />
      ))}
    </div>
  )
}
