import { NavigationCard } from '@components/ui/navigation-card'
import { Handshake } from 'lucide-react'

export function PartnersNavigationCard() {
  return (
    <NavigationCard href="/quem-somos/parceiros-e-financiadores" variant="red">
      <h2 className="title-3 flex items-center gap-2">
        <Handshake />
        Parceiros e financiadores
      </h2>
    </NavigationCard>
  )
}
