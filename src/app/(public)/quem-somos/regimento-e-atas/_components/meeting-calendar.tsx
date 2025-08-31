'use client'

import {
  CalendarDaysIcon,
  type CalendarDaysIconHandle,
} from '@components/icons/calendar-days'
import {
  FileTextIcon,
  type FileTextIconHandle,
} from '@components/icons/file-text'
import { UsersIcon, type UsersIconHandle } from '@components/icons/users'
import { useRef } from 'react'

export function MeetingCalendar() {
  // Refs for icons to control animation
  const calendarRef = useRef<CalendarDaysIconHandle>(null)
  const usersRef = useRef<UsersIconHandle>(null)
  const fileTextRef = useRef<FileTextIconHandle>(null)

  return (
    <section className="space-y-8">
      <div className="flex items-center gap-2">
        <CalendarDaysIcon className="text-primary" />
        <h2 className="title-3 font-bold">Calendário de Reuniões</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <div
          className="group space-y-4 py-6 transition"
          onMouseEnter={() => calendarRef.current?.startAnimation?.()}
          onMouseLeave={() => calendarRef.current?.stopAnimation?.()}
        >
          <div className="flex items-center gap-2 font-semibold text-primary">
            <CalendarDaysIcon
              className="text-primary transition-transform duration-300 group-hover:scale-110"
              ref={calendarRef}
              size={20}
            />
            <h2>Reuniões Mensais</h2>
          </div>
          <div>
            <span className="block">
              Primeira segunda-feira de cada mês, às 15h.
            </span>
            <span className="text-muted-foreground text-sm">
              Realizadas online, abertas a todos os membros filiados.
            </span>
          </div>
        </div>
        {/* Card 2 */}
        <div
          className="group space-y-4 py-6 transition"
          onMouseEnter={() => usersRef.current?.startAnimation?.()}
          onMouseLeave={() => usersRef.current?.stopAnimation?.()}
        >
          <div className="flex items-center gap-2 font-semibold text-primary">
            <UsersIcon
              className="text-primary transition-transform duration-300 group-hover:scale-110"
              ref={usersRef}
              size={20}
            />
            <h2>Assembleias Gerais</h2>
          </div>
          <div>
            <span className="block">
              Trimestrais, sempre no último sábado do trimestre.
            </span>
            <span className="text-muted-foreground text-sm">
              Participação obrigatória para membros votantes.
            </span>
          </div>
        </div>
        {/* Card 3 */}
        <div
          className="group space-y-4 py-6 transition"
          onMouseEnter={() => fileTextRef.current?.startAnimation?.()}
          onMouseLeave={() => fileTextRef.current?.stopAnimation?.()}
        >
          <div className="flex items-center gap-2 font-semibold text-primary">
            <FileTextIcon
              className="text-primary transition-transform duration-300 group-hover:scale-110"
              ref={fileTextRef}
              size={20}
            />
            <h2>Reuniões de GTs</h2>
          </div>
          <div>
            <span className="block">
              Quinzenais, conforme agendamento específico de cada GT.
            </span>
            <span className="text-muted-foreground text-sm">
              Consulte o cronograma do seu Grupo de Trabalho.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
