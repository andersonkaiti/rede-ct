import { Input } from '@components/ui/input'
import { ListFilter } from 'lucide-react'

export function FilterInput() {
  return (
    <div className="relative w-full sm:w-fit">
      <Input className="w-full ps-9 sm:w-fit" placeholder="Filtrar" />
      <div className="absolute inset-0 start-0 flex w-fit items-center ps-3">
        <ListFilter className="size-3" />
      </div>
    </div>
  )
}
