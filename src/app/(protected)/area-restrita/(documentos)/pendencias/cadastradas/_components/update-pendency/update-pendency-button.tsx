'use client'

import { Button } from '@components/ui/button'
import { Dialog, DialogTrigger } from '@components/ui/dialog'
import { Edit } from 'lucide-react'
import { useQueryState } from 'nuqs'
import { useState } from 'react'
import { UpdatePendencyForm } from './update-pendency-form'

interface IUpdatePendencyButtonProps {
  pendencyId: string
}

export function UpdatePendencyButton({
  pendencyId,
}: IUpdatePendencyButtonProps) {
  const [, setPendencyId] = useQueryState('pendencyId')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button
          className="flex w-full cursor-pointer justify-between text-xs"
          onClick={() => setPendencyId(pendencyId)}
          variant="ghost"
        >
          Editar
          <Edit className="size-4 text-black dark:text-white" />
        </Button>
      </DialogTrigger>

      <UpdatePendencyForm setIsOpen={setIsOpen} />
    </Dialog>
  )
}
