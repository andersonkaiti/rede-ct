'use client'

import { Button } from '@components/ui/button'
import { Dialog, DialogTrigger } from '@components/ui/dialog'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { CreatePendencyForm } from './create-pendency-form'

export function CreatePendencyButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus />
          Cadastrar pendência
        </Button>
      </DialogTrigger>

      <CreatePendencyForm setIsOpen={setIsOpen} />
    </Dialog>
  )
}
