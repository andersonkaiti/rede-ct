'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { useAuth } from '@hooks/use-auth.hook'
import { format } from 'date-fns'
import { PendencyActions } from './pendency-actions'
import { PendencyButton } from './pendency-button'

interface IPendencyProps {
  pendency: {
    id: string
    createdAt: string
    updatedAt: string
    title: string
    description: string
    status: 'PENDING' | 'PAID'
    dueDate: string
    documentUrl: string
    user?: {
      id: string
      name: string
      avatarUrl: string | null
      createdAt: string
      updatedAt: string
      emailAddress: string
      orcid: string
      phone: string
      lattesUrl: string
      role: 'ADMIN' | 'USER'
    }
  }
}

export function Pendency({ pendency }: IPendencyProps) {
  const { isAdmin } = useAuth()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-between gap-3 font-semibold">
          <span className="text-2xl">{pendency.title}</span>

          {isAdmin() && <PendencyActions id={pendency.id} />}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="line-clamp-2 text-justify">
          {pendency.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="mt-auto justify-between border-accent border-t">
        <span>{format(pendency.createdAt, 'dd/MM/yyyy')}</span>
        <PendencyButton url={pendency.documentUrl} />
      </CardFooter>
    </Card>
  )
}
