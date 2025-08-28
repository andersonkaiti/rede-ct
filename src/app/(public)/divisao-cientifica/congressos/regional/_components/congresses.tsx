import { getRegionalCongresses } from '@mocks/congresses/regional-congresses'
import { CongressCard } from './congress-card'

export async function Congresses() {
  const congressos = await getRegionalCongresses()

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2">
      {congressos.map((congresso) => (
        <CongressCard
          date={congresso.date}
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
