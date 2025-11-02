'use client'

import { Button } from '@components/ui/button'
import { Dialog, DialogTrigger } from '@components/ui/dialog'
import { SquarePen } from 'lucide-react'
import { useQueryState } from 'nuqs'
import { useState } from 'react'
import { UpdateCertificationForm } from './update-certification-form'

interface IUpdateCertificationButtonProps {
  id: string
}

export function UpdateCertificationButton({
  id,
}: IUpdateCertificationButtonProps) {
  const [, setCertificationId] = useQueryState('certificationId')

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button
          className="flex w-full cursor-pointer justify-between text-xs"
          onClick={() => setCertificationId(id)}
          variant="ghost"
        >
          Editar
          <SquarePen className="size-4 text-black dark:text-white" />
        </Button>
      </DialogTrigger>

      <UpdateCertificationForm setIsOpen={setIsOpen} />
    </Dialog>
  )
}
