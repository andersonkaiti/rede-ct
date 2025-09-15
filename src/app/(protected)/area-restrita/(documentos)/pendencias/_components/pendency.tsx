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
import { useAuth } from '@hooks/use-auth.hook'
import { cn } from '@utils/cn'
import { formatDate } from '@utils/format-date'
import { cva } from 'class-variance-authority'
import { useRef } from 'react'
import type { IPendency } from 'types/pendency'
import { PendencyActions } from './pendency-actions'
import { PendencyButton } from './pendency-button'

const pendencyCardVariants = cva('rounded-full text-xs', {
  variants: {
    variant: {
      pending:
        'border border-primary bg-primary/20 text-primary dark:border-primary dark:bg-primary/20 dark:text-primary',
      paid: 'border border-emerald-400 bg-emerald-50 text-emerald-800 dark:border-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-300',
    },
    defaultVariants: {
      variant: 'pending',
    },
  },
})

export function Pendency({
  id,
  documentUrl,
  description,
  title,
  status,
  createdAt,
  user,
}: IPendency) {
  const { isAdmin } = useAuth()

  const iconRef = useRef<FileTextIconHandle>(null)

  const statusConfig = {
    PENDING: 'Pendente',
    PAID: 'Pago',
  } as const

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
              <div className="flex flex-col">
                <span>{title}</span>
                {user && (
                  <span className="line-clamp-1 text-muted-foreground text-sm">
                    {user.emailAddress}
                  </span>
                )}
              </div>
              <Badge
                className={cn(
                  pendencyCardVariants({
                    variant: status.toLowerCase() as 'pending' | 'paid',
                  })
                )}
                variant="outline"
              >
                {currentStatus}
              </Badge>
            </div>
          </div>

          {isAdmin() && <PendencyActions id={id} />}
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
        <PendencyButton url={documentUrl} />
      </CardFooter>
    </Card>
  )
}
