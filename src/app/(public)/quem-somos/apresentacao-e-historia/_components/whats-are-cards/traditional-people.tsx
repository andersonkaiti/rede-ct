'use client'

import { UsersIcon, type UsersIconHandle } from '@components/icons/users'
import { Badge } from '@components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card'
import { useRef } from 'react'

export function WhatAreTraditionalPeopleCard() {
  const iconRef = useRef<UsersIconHandle>(null)

  return (
    <Card
      className="shadow-xl"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <CardHeader className="flex items-center gap-2">
        <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
          <UsersIcon ref={iconRef} />
        </Badge>
        <CardTitle className="font-semibold text-2xl">
          Quem são os Povos Tradicionais?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-justify">
          Reconhecemos como Povos Originários aqueles povos e comunidades que
          habitavam as terras com modus vivendi comunitário antes do processo de
          colonização. No Brasil, incluem todos os indígenas e seus
          descendentes, independentemente de morarem nas aldeias ou terras
          indígenas.
        </p>
      </CardContent>
    </Card>
  )
}
