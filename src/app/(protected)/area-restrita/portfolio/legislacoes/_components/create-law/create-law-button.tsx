'use client'

import { Button } from '@components/ui/button'
import { Dialog, DialogTrigger } from '@components/ui/dialog'
import { Plus } from 'lucide-react'
import { type ReactNode, useState } from 'react'
import { CreateLawForm } from './create-law-form'

interface CreateLawButtonProps {
  children: ReactNode
}

export function CreateLawButton({ children }: CreateLawButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="size-4" />
          {children}
        </Button>
      </DialogTrigger>

      <CreateLawForm setIsOpen={setIsOpen} />
    </Dialog>
  )
}
