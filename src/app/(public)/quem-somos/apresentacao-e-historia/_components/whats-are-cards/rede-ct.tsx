'use client'

import { HeartIcon, type HeartIconHandle } from '@components/icons/heart'
import { Badge } from '@components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card'
import { useRef } from 'react'

export function WhatAreRedeCTCard() {
  const iconRef = useRef<HeartIconHandle>(null)

  return (
    <Card
      className="shadow-xl"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <CardHeader className="flex items-center gap-2">
        <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
          <HeartIcon ref={iconRef} />
        </Badge>
        <CardTitle className="font-semibold text-2xl">RedeCT</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-justify">
          A Rede Internacional de Pesquisadores sobre Povos Originários e
          Comunidades Tradicionais – RedeCT é uma articulação independente e
          voluntária, caracterizada como REDE DE PESQUISADORES, que se volta
          exclusivamente à cooperação para a promoção e o fortalecimento do
          ensino, da pesquisa e da extensão universitária sobre todos os temas
          que se relacionam às demandas de povos originários e de comunidades
          tradicionais no Brasil (país sede da RedeCT) e em outros países onde a
          Rede está presente por meio de seus afiliados.
        </p>
      </CardContent>
    </Card>
  )
}
