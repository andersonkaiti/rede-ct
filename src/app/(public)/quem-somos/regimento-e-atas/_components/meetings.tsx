'use client'

import {
  CalendarDaysIcon,
  type CalendarDaysIconHandle,
} from '@components/icons/calendar-days'
import { UsersIcon, type UsersIconHandle } from '@components/icons/users'
import { Badge } from '@components/ui/badge'
import { WifiIcon, type WifiIconHandle } from '@components/ui/wifi'
import { useRef } from 'react'

const REUNIOES_ANTERIORES = [
  {
    data: '15/03/2024',
    descricao: 'Reunião de Coordenação',
  },
  {
    data: '01/02/2024',
    descricao: 'Assembleia Geral Ordinária',
  },
]

export function Meetings() {
  const calendarRef = useRef<CalendarDaysIconHandle>(null)
  const wifiRef = useRef<WifiIconHandle>(null)
  const usersRef = useRef<UsersIconHandle>(null)

  return (
    <section className="space-y-10">
      <div className="flex items-center gap-3">
        <UsersIcon className="text-primary" />
        <h2 className="title-3 font-bold">Convocações e Pautas de Reuniões</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div
          className="flex flex-col gap-3"
          onMouseEnter={() => {
            calendarRef.current?.startAnimation?.()
            wifiRef.current?.startAnimation()
          }}
          onMouseLeave={() => {
            calendarRef.current?.stopAnimation?.()
            wifiRef.current?.stopAnimation()
          }}
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center">
              <CalendarDaysIcon
                className="text-primary transition-transform duration-300"
                ref={calendarRef}
                size={24}
              />
            </div>
            <span className="font-bold text-primary text-xl tracking-tight">
              Próxima Reunião
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-semibold text-primary text-sm">
                25/07/2024, 15h
              </span>
              <span
                className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 font-medium text-primary text-xs shadow-sm dark:bg-primary/20"
                title="Reunião online"
              >
                <WifiIcon className="text-primary/70" ref={wifiRef} size={16} />
                Online
              </span>
            </div>
            <span className="font-medium text-base text-foreground">
              1ª Assembleia Geral Extraordinária de Pesquisadores Filiados
            </span>
          </div>

          <div>
            <span className="font-semibold text-primary">Pauta:</span>
            <ul className="ml-6 list-disc text-foreground">
              <li className="rounded-md pl-1 transition-colors hover:bg-primary/5">
                Prorrogação do período de submissões de trabalhos no V CCI e
                seus desdobramentos;
              </li>
              <li className="rounded-md pl-1 transition-colors hover:bg-primary/5">
                Ratificação da aprovação do Regimento Interno da RedeCT.
              </li>
            </ul>
          </div>

          <div>
            <span className="text-muted-foreground text-xs dark:text-zinc-400">
              Dúvidas ou sugestões de pauta? Envie para{' '}
              <a
                className="font-medium text-primary underline hover:text-primary/80"
                href="mailto:redect.pesquisa@gmail.com"
              >
                redect.pesquisa@gmail.com
              </a>
            </span>
          </div>
        </div>

        <div
          className="flex flex-col gap-5"
          onMouseEnter={() => {
            usersRef.current?.startAnimation?.()
          }}
          onMouseLeave={() => {
            usersRef.current?.stopAnimation?.()
          }}
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center">
              <UsersIcon className="text-primary" ref={usersRef} size={24} />
            </div>
            <span className="font-bold text-primary text-xl tracking-tight">
              Reuniões Anteriores
            </span>
          </div>
          <ul className="space-y-3">
            {REUNIOES_ANTERIORES.map((r, i) => (
              <li
                className="flex items-center gap-2 text-base text-foreground/90 dark:text-zinc-200"
                key={r.data + i}
              >
                <Badge className="rounded-full bg-primary/20 text-primary">
                  {r.data}
                </Badge>
                <span>{r.descricao}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
