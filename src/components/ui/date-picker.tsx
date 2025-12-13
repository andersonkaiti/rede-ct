'use client'

import { Button } from '@components/ui/button'
import { Calendar } from '@components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@components/ui/popover'
import { cn } from '@utils/cn'
import { formatDate } from '@utils/format-date'
import { CalendarIcon } from 'lucide-react'
import * as React from 'react'
import { Label } from './label'
import { TimePicker } from './time-picker'

interface DatePickerProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

export function DatePicker({
  value,
  onChange,
  placeholder = 'Selecione uma data',
  disabled = false,
  className,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)

  const formattedDate = value ? formatDate(value.toString()) : placeholder

  const timeValue = value ? value.toTimeString().slice(0, 8) : '08:30:00'

  function combineDateAndTime(date: Date, time: string): Date {
    const [hours, minutes, seconds] = time.split(':').map(Number)
    const newDate = new Date(date)
    newDate.setHours(hours)
    newDate.setMinutes(minutes)
    newDate.setSeconds(seconds)
    newDate.setMilliseconds(0)
    return newDate
  }

  function handleDateChange(date: Date | undefined) {
    if (!date) {
      onChange?.(undefined)
      return
    }
    const newDate = combineDateAndTime(date, timeValue)
    onChange?.(newDate)
    setOpen(false)
  }

  function handleTimeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newTime = e.target.value
    if (!value) return
    const newDate = combineDateAndTime(value, newTime)
    onChange?.(newDate)
  }

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            'w-full justify-start text-left font-normal',
            !value && 'text-muted-foreground',
            className,
          )}
          disabled={disabled}
          variant="outline"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {formattedDate}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar
          disabled={(date) => date < new Date('1900-01-01')}
          mode="single"
          onSelect={handleDateChange}
          selected={value}
        />

        <div className="space-y-2 p-3">
          <Label htmlFor="time-picker">Horário</Label>
          <TimePicker
            onChange={handleTimeChange}
            value={timeValue}
            id="time-picker"
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}
