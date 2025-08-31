'use client'

import {
  CircleDollarSignIcon,
  type CircleDollarSignIconHandle,
} from '@components/icons/circle-dollar-sign'
import { Card, CardFooter, CardHeader } from '@components/ui/card'
import { useRef } from 'react'

export function CurrentBalanceCard() {
  const iconRef = useRef<CircleDollarSignIconHandle>(null)

  return (
    <Card
      className="h-fit"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <CardHeader className="flex w-full items-center gap-4">
        <div className="rounded-full bg-primary/20 p-3">
          <CircleDollarSignIcon className="text-primary" ref={iconRef} />
        </div>
        <h3 className="font-bold text-base md:text-lg">Saldo em conta</h3>
      </CardHeader>
      <CardFooter className="flex-col items-start">
        <p className="text-justify font-medium text-base text-gray-800 dark:text-gray-200">
          <span className="font-semibold text-primary">Saldo atual:</span>{' '}
          R$21.788,57
        </p>
        <span className="text-gray-500 text-xs dark:text-gray-400">
          (03/04/2025 - 7h53min)
        </span>
      </CardFooter>
    </Card>
  )
}
