import { getPartners } from '@http/partners/get-partners'
import { Partner } from './partner'

export async function PartnerList() {
  const { partners } = await getPartners({})

  return (
    <section className="grid w-full grid-cols-1 gap-2">
      {partners.map((partner, index: number) => (
        <Partner key={index} partner={partner} />
      ))}
    </section>
  )
}
