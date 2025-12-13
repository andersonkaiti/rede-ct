import { Input } from '@components/ui/input'
import { cn } from '@utils/cn'
import type { ComponentProps } from 'react'

interface ITimePickerProps extends ComponentProps<typeof Input> {}

function TimePicker({ className, ...props }: ITimePickerProps) {
  return (
    <Input
      step="1"
      className={cn(
        'appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none',
        className,
      )}
      {...props}
    />
  )
}

export { TimePicker }
