'use client'

import {
  FileTextIcon,
  type FileTextIconHandle,
} from '@components/icons/file-text'
import { Badge } from '@components/ui/badge'
import { Card, CardContent, CardHeader } from '@components/ui/card'
import { ListNumber } from '@components/ui/list-number'
import { useRef } from 'react'

export function FiliationProcess() {
  const iconRef = useRef<FileTextIconHandle>(null)

  return (
    <Card
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <CardHeader className="flex items-center gap-4">
        <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
          <FileTextIcon className="text-primary" ref={iconRef} />
        </Badge>
        <h2 className="font-semibold text-2xl">Processo de Filiação</h2>
      </CardHeader>
      <CardContent>
        <ol className="space-y-4">
          <li className="flex items-start">
            <ListNumber>1</ListNumber>
            Conheça a RedeCT, sua missão, seus objetivos e o seu Regimento
            Interno;
          </li>
          <li className="flex items-start">
            <ListNumber>2</ListNumber>
            Preencha o formulário de solicitação de filiação pelo link
            https://forms.gle/7pQWnnnHpC4zKeij7
          </li>
          <li className="flex items-start">
            <ListNumber>3</ListNumber>
            Realize o pagamento de sua 1a anuidade (referente ao ano de 2024 -
            de acordo com sua classificação de Pesquisador Filiado). Pela chave
            pix da231105-2947-4343-9214-064b15e45313 (Alexandre de Castro
            Campos).
          </li>
          <li className="flex items-start">
            <ListNumber>4</ListNumber>
            Atenção: se você fizer 1º o pagamento de sua inscrição para o V CCI
            da RedeCT (acesso pelo link
            https://www.even3.com.br/v-congresso-cientifico-internacional-da-redect-447704/
            ), você pode realizar o pagamento da anuidade com a dedução de
            R$50,00 (se fizer o inverso, a RedeCT não realizará devolução do
            valor da inscrição).
          </li>
          <li className="flex items-start">
            <ListNumber>5</ListNumber>
            Envie os comprovantes de pagamentos para o e-mail
            filiados@redect.org
          </li>
          <li className="flex items-start">
            <ListNumber>6</ListNumber>
            Caso você realize o pagamento da anuidade de uma conta-corrente que
            não é sua, informe isso no e-mail para a correta concialiação
            bancária na RedeCT.
          </li>
        </ol>
      </CardContent>
    </Card>
  )
}
