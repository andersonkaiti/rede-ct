import { NavigationCard } from '@components/ui/navigation-card'
import { Newspaper } from 'lucide-react'

export function LatestNews() {
  return (
    <NavigationCard href="/noticias" variant="red">
      <h2 className="title-3 flex items-center gap-2">
        <Newspaper />
        Últimas notícias
      </h2>
    </NavigationCard>
  )
}
