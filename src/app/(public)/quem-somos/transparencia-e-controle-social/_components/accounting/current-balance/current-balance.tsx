'use client'

import {
  CircleDollarSignIcon,
  type CircleDollarSignIconHandle,
} from '@components/icons/circle-dollar-sign'
import { format } from 'date-fns'
import { useRef } from 'react'
import { LoadingSkeleton } from './loading-skeleton'
import { useCurrentBalance } from './use-current-balance.hook'

export function CurrentBalanceCard() {
  const { data, isLoading } = useCurrentBalance()

  const iconRef = useRef<CircleDollarSignIconHandle>(null)

  if (isLoading) {
    return <LoadingSkeleton />
  }

  return (
    <div
      className="h-fit space-y-8 p-4"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <div className="flex w-full items-center gap-4">
        <div className="rounded-full bg-primary/20 p-3">
          <CircleDollarSignIcon className="text-primary" ref={iconRef} />
        </div>
        <h3 className="font-bold text-base md:text-lg">Saldo em conta</h3>
      </div>
      <div className="space-y-1">
        <p className="font-medium text-base text-gray-800 dark:text-gray-200">
          {data?.balance.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
        <span className="text-gray-500 text-xs dark:text-gray-400">
          Úlima atualização:{' '}
          {format(data?.updatedAt || new Date(), "dd/MM/yyyy 'às' HH:mm:ss")}
        </span>
      </div>
    </div>
  )
}
