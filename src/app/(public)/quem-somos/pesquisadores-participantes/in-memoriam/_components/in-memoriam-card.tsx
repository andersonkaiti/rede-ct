import { Button } from '@components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@components/ui/dialog'
import { UserCard, UserCardImage } from '@components/ui/user-card'
import { format } from 'date-fns'
import { BookOpen, Dot } from 'lucide-react'

interface IInMemoriamCardProps {
  member: {
    id: string
    name: string
    birthDate: string
    deathDate: string
    biography: string | null
    photoUrl: string | null
    role: 'RESEARCHER' | 'LEADER'
    createdAt: string
    updatedAt: string
  }
}

export function InMemoriamCard({ member }: IInMemoriamCardProps) {
  return (
    <UserCard>
      <div className="flex flex-grow flex-col items-center justify-between gap-2">
        <UserCardImage
          alt={member.name}
          src={member.photoUrl || '/placeholder.svg'}
        />

        <h1 className="text-center font-semibold text-lg">{member.name}</h1>

        <h2 className="flex items-center justify-center text-center font-light text-muted-foreground text-sm">
          {format(member.birthDate, 'dd/MM/yyyy')} <Dot />{' '}
          {format(member.deathDate, 'dd/MM/yyyy')}
        </h2>

        {member.biography && (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-muted-foreground" variant="ghost">
                <BookOpen />
                <span>Biografia</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="gap-8">
              <DialogTitle className="text-center">{member.name}</DialogTitle>

              <h2 className="flex items-center justify-center text-center font-semibold text-lg text-muted-foreground">
                {format(member.birthDate, 'dd/MM/yyyy')} <Dot />{' '}
                {format(member.deathDate, 'dd/MM/yyyy')}
              </h2>

              <DialogDescription>{member.biography}</DialogDescription>
            </DialogContent>
          </Dialog>
        )}

        <div className="mt-4 border-slate-200 border-t pt-4 dark:border-slate-100/20">
          <div className="text-slate-400 text-xs italic">
            &quot;In memoriam - Sempre em nossos corações&quot;
          </div>
        </div>
      </div>
    </UserCard>
  )
}
