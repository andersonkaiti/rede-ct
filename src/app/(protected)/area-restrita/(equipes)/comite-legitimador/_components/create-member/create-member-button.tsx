'use client'

import { Button } from '@components/ui/button'
import { Dialog, DialogTrigger } from '@components/ui/dialog'
import { PlusIcon } from 'lucide-react'
import { useState } from 'react'

import { CreateMemberForm } from './create-member-form'

interface ICreateMemberButtonProps {
  children: React.ReactNode
}

export function CreateMemberButton({ children }: ICreateMemberButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button className="w-full cursor-pointer xl:w-fit" variant="outline">
          <PlusIcon className="h-4 w-4" />
          {children}
        </Button>
      </DialogTrigger>

      <CreateMemberForm setIsOpen={setIsOpen} />
    </Dialog>
  )
}
