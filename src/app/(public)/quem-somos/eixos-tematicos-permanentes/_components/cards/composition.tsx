'use client'

import { CheckIcon, type CheckIconHandle } from '@components/icons/check'
import { Card, CardContent, CardHeader } from '@components/ui/card'
import { ListNumber } from '@components/ui/list-number'
import { useRef } from 'react'

export function Composition() {
  const iconRef = useRef<CheckIconHandle>(null)

  return (
    <Card
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <CardHeader>
        <h2 className="title-3 flex items-center gap-2">
          <div className="mr-2 rounded-full bg-primary/20 p-2">
            <CheckIcon className="text-primary" ref={iconRef} />
          </div>
          Como é a composição de um GTC?
        </h2>
      </CardHeader>
      <CardContent>
        <ol className="space-y-4">
          <li className="flex items-start">
            <ListNumber>1</ListNumber>
            um Líder (Pesquisador Sênior);
          </li>
          <li className="flex items-start">
            <ListNumber>2</ListNumber>
            um Vice-líder (Pesquisador Sênior);
          </li>
          <li className="flex items-start">
            <ListNumber>3</ListNumber>
            um Secretário Geral (Pesquisador ou Pesquisador Sênior);
          </li>
          <li className="flex items-start">
            <ListNumber>4</ListNumber>
            Além destes, o GTC deverá ter (obrigatoriamente) mais 10 integrantes
            (Pesquisadores Sêniors);
          </li>
          <li className="flex items-start">
            <ListNumber>5</ListNumber>
            Obrigatoriamente um dos membros do GTC deverá ser membro de Povo
            Originário ou Comunidade Tradicional (observando-se a ligação de sua
            matriz com a temática do ETP conduzido pelo GTC);
          </li>
          <li className="flex items-start">
            <ListNumber>6</ListNumber>
            Obrigatoriamente um dos membros do GTC deverá ser pesquisador
            internacional (que não seja do Brasil);
          </li>
          <li className="flex items-start">
            <ListNumber>7</ListNumber>A liderança do GTC poderá admitir, além de
            todo o quadro acima, até 3 Pesquisadores Filiados (não doutores, que
            tenhm o título de Mestre ou Certificado de Graduação).
          </li>
        </ol>
      </CardContent>
    </Card>
  )
}
