'use client'

import type { CircleDollarSignIconHandle } from '@components/icons/circle-dollar-sign'
import { HandCoinsIcon } from '@components/icons/hand-coins'
import { Card, CardFooter, CardHeader } from '@components/ui/card'
import { useRef } from 'react'

export function TotalBalanceCard() {
  const iconRef = useRef<CircleDollarSignIconHandle>(null)

  return (
    <Card
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <CardHeader className="flex w-full items-center gap-4">
        <div className="rounded-full bg-primary/20 p-3">
          <HandCoinsIcon className="text-primary" ref={iconRef} />
        </div>
        <h3 className="font-bold text-base md:text-lg">Saldo total</h3>
      </CardHeader>
      <CardFooter className="flex-col items-start">
        <p className="text-justify font-medium text-base text-gray-800 dark:text-gray-200">
          <span className="font-semibold text-primary">Saldo total:</span>{' '}
          R$26.054,00
          <br />
        </p>
        <span className="text-gray-500 text-xs dark:text-gray-400">
          (conta corrente: R$21.788,57 + eventos: R$4.131,00 + Even3: R$135,00)
          <br />
          Atualizado em 03/04/2025 (7h53min)
        </span>
      </CardFooter>
    </Card>
  )
}
