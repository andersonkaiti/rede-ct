'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { format } from 'date-fns'
import { ContributionButton } from './contribution-button'

interface IContributionProps {
  contribution: {
    id: string
    title: string
    description: string | null
    status: 'PENDING' | 'PAID'
    dueDate: string | null
    documentUrl: string
    createdAt: string
    updatedAt: string
    user: {
      name: string
      id: string
      createdAt: string
      updatedAt: string
      emailAddress: string
      avatarUrl: string | null
      orcid: string | null
      phone: string | null
      lattesUrl: string | null
      role: 'ADMIN' | 'USER'
    }
  }
}

export function Contribution({ contribution }: IContributionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-between gap-3 font-semibold">
          <span className="text-2xl">{contribution.title}</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="line-clamp-2 text-justify">
          {contribution.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="mt-auto justify-between border-accent border-t">
        <span>{format(contribution.createdAt, 'dd/MM/yyyy')}</span>
        <ContributionButton url={contribution.documentUrl} />
      </CardFooter>
    </Card>
  )
}
