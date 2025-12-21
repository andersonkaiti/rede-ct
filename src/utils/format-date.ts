import { format } from 'date-fns'

export function formatDate(date: string | Date) {
  const formattedData = typeof date === 'string' ? new Date(date) : date

  return format(formattedData, "dd/MM/yyyy 'às' HH:mm:ss")
}
