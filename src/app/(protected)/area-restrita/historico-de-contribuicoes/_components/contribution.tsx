'use client'

import {
  FileTextIcon,
  type FileTextIconHandle,
} from '@components/icons/file-text'
import { Badge } from '@components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { cn } from '@utils/cn'
import { formatDate } from '@utils/format-date'
import { cva } from 'class-variance-authority'
import { useRef } from 'react'
import type { IContribution } from 'types/contribution'
import { ContributionButton } from './contribution-button'

const contributionCardVariants = cva('rounded-full text-xs', {
  variants: {
    variant: {
      paid: 'border border-emerald-400 bg-emerald-50 text-emerald-800 dark:border-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-300',
    },
    defaultVariants: {
      variant: 'paid',
    },
  },
})

export function Contribution({
  documentUrl,
  description,
  title,
  status,
  createdAt,
}: IContribution) {
  const iconRef = useRef<FileTextIconHandle>(null)

  const statusConfig: Record<IContribution['status'], string> = {
    PAID: 'Pago',
    PENDING: 'Pendente',
  }

  const currentStatus = statusConfig[status]

  return (
    <Card
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-between gap-3 font-semibold">
          <div className="flex flex-1 gap-4">
            <FileTextIcon ref={iconRef} size={20} />

            <div className="flex w-full items-center justify-between gap-4">
              {title}
              <Badge
                className={cn(
                  contributionCardVariants({
                    variant: 'paid',
                  })
                )}
                variant="outline"
              >
                {currentStatus}
              </Badge>
            </div>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex h-full flex-col gap-4">
        <CardDescription className="line-clamp-2 text-justify">
          {description}
        </CardDescription>

        <div className="text-muted-foreground text-xs">
          Criado em: {formatDate(createdAt)}
        </div>
      </CardContent>

      <CardFooter>
        <ContributionButton url={documentUrl} />
      </CardFooter>
    </Card>
  )
}
