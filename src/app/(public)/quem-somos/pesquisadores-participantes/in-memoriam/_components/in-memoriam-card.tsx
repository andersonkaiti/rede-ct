import { UserCard, UserCardImage } from '@components/ui/user-card'
import type { IInMemoriam } from '@mocks/researchers/in-memoriam-researchers'
import { Dot } from 'lucide-react'

interface IInMemoriamCardProps {
  member: IInMemoriam
}

export function InMemoriamCard({ member }: IInMemoriamCardProps) {
  return (
    <UserCard>
      <div className="flex flex-grow flex-col items-center justify-between gap-2">
        <UserCardImage alt={member.image.alt} src={member.image.src} />
        <h1 className="text-center font-semibold text-lg">{member.name}</h1>
        <h2 className="flex items-center justify-center text-center font-light text-muted-foreground text-sm">
          {member.birthday} <Dot /> {member.death}
        </h2>
        <h2 className="text-center text-muted-foreground">{member.role}</h2>
        <div className="mt-4 border-slate-200 border-t pt-4 dark:border-slate-100/20">
          <div className="text-slate-400 text-xs italic">
            &quot;In memoriam - Sempre em nossos corações&quot;
          </div>
        </div>
      </div>
    </UserCard>
  )
}
