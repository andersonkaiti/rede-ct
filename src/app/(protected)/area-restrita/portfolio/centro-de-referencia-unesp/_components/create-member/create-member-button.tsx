'use client'

import { Button } from '@components/ui/button'
import { Dialog, DialogTrigger } from '@components/ui/dialog'
import { Plus } from 'lucide-react'
import { type ReactNode, useState } from 'react'
import { CreateMemberForm } from './create-member-form'

interface CreateMemberButtonProps {
  children: ReactNode
}

export function CreateMemberButton({ children }: CreateMemberButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="size-4" />
          {children}
        </Button>
      </DialogTrigger>

      <CreateMemberForm setIsOpen={setIsOpen} />
    </Dialog>
  )
}
