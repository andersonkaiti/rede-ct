import { Badge } from '@components/ui/badge'
import { GraduationCap } from 'lucide-react'

export function ResearchersTitle() {
  return (
    <h2 className="flex items-center gap-4 font-semibold text-2xl">
      <Badge className="rounded-full bg-primary/20 p-1 text-primary">
        <GraduationCap className="size-6" />
      </Badge>
      Pesquisadores da RedeCT
    </h2>
  )
}
