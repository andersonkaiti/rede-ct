'use client'

import type { HandCoinsIconHandle } from '@components/icons/hand-coins'
import { HandCoinsIcon } from '@components/icons/hand-coins'
import { useRef } from 'react'
import { ACCOUNT_TYPE_LABELS } from './constants'
import { LoadingSkeleton } from './loading-skeleton'
import { useTotalBalance } from './use-total-balance.hook'

export function TotalBalanceCard() {
  const { data, isLoading } = useTotalBalance()

  const iconRef = useRef<HandCoinsIconHandle>(null)

  if (isLoading) {
    return <LoadingSkeleton />
  }

  if (!data) {
    return null
  }

  const { accounts } = data

  return (
    <div
      className="h-fit space-y-8 p-4"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <div className="flex w-full items-center gap-4">
        <div className="rounded-full bg-primary/20 p-3">
          <HandCoinsIcon className="text-primary" ref={iconRef} />
        </div>
        <h3 className="font-bold text-base md:text-lg">Saldo total</h3>
      </div>

      <div className="space-y-3">
        <p className="font-semibold text-base text-gray-800 dark:text-gray-200">
          Total:{' '}
          {data.totalBalance.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>

        <div className="space-y-1">
          <p className="font-medium text-gray-700 text-sm dark:text-gray-300">
            Detalhamento por conta:
          </p>

          {accounts.exclusiveRedectUse && (
            <p className="text-gray-600 text-xs dark:text-gray-400">
              {ACCOUNT_TYPE_LABELS.EXCLUSIVE_REDECT_USE}:{' '}
              {accounts.exclusiveRedectUse.balance.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          )}

          {accounts.events && (
            <p className="text-gray-600 text-xs dark:text-gray-400">
              {ACCOUNT_TYPE_LABELS.EVENTS}:{' '}
              {accounts.events.balance.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          )}

          {accounts.colloquium && (
            <p className="text-gray-600 text-xs dark:text-gray-400">
              {ACCOUNT_TYPE_LABELS.COLLOQUIUM}:{' '}
              {accounts.colloquium.balance.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
