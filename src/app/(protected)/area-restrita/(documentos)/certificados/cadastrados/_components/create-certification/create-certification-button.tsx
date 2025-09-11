'use client'

import { Button } from '@components/ui/button'
import { Dialog, DialogTrigger } from '@components/ui/dialog'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { CreateCertificationForm } from './create-certification-form'

export function CreateCertificationButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus />
          Cadastrar certificado
        </Button>
      </DialogTrigger>

      <CreateCertificationForm setIsOpen={setIsOpen} />
    </Dialog>
  )
}
