'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import { DatePicker } from '@components/ui/date-picker'
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@components/ui/dialog'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import {
  PageForm,
  PageFormContent,
  PageFormContentField,
} from '@components/ui/page-container'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@components/ui/select'
import { Textarea } from '@components/ui/textarea'
import { AlertCircle, Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { SelectMember } from '../../../../../_components/select-member'
import { useUpdatePendency } from './use-update-pendency'

interface IUpdatePendencyFormProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const statusMapping = {
  PENDING: 'Pendente',
  PAID: 'Pago',
}

export function UpdatePendencyForm({ setIsOpen }: IUpdatePendencyFormProps) {
  const { pendency, errors, formAction, isLoading, message, payload } =
    useUpdatePendency({ setIsOpen })

  const [dueDate, setDueDate] = useState<Date | undefined>()

  useEffect(() => {
    if (payload?.get('dueDate')) {
      const dueDateValue = payload?.get('dueDate')

      if (typeof dueDateValue === 'string' && dueDateValue) {
        setDueDate(new Date(dueDateValue))
      }

      return
    }

    if (pendency?.dueDate) {
      setDueDate(new Date(pendency.dueDate))

      return
    }
    setDueDate(undefined)
  }, [payload, pendency])

  const [status, setStatus] = useState('PENDING')

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Atualizar pendência</DialogTitle>
      </DialogHeader>

      <PageForm action={formAction}>
        <PageFormContent>
          {message && (
            <Alert className="mb-4 border-primary" variant="destructive">
              <AlertCircle className="size-4" />
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}

          <PageFormContentField>
            <Label>Membro</Label>
            <SelectMember
              userId={(payload?.get('userId') as string) || pendency?.userId}
            />
          </PageFormContentField>

          <PageFormContentField>
            <Label>Título</Label>

            <Input
              defaultValue={
                (payload?.get('title') as string) ?? pendency?.title ?? ''
              }
              name="title"
              placeholder="Título da pendência"
            />

            {errors?.title && (
              <Alert className="border-primary p-2" variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{errors.title}</AlertDescription>
              </Alert>
            )}
          </PageFormContentField>

          <PageFormContentField>
            <Label>Descrição</Label>

            <Textarea
              defaultValue={
                (payload?.get('description') as string) ??
                pendency?.description ??
                ''
              }
              name="description"
              placeholder="Descrição"
            />

            {errors?.description && (
              <Alert className="border-primary p-2" variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{errors.description}</AlertDescription>
              </Alert>
            )}
          </PageFormContentField>

          <PageFormContentField>
            <Label>Data de vencimento</Label>

            <div className="space-y-2">
              <DatePicker
                onChange={setDueDate}
                placeholder="Selecione uma data de vencimento"
                value={dueDate}
              />
              <input
                name="dueDate"
                type="hidden"
                value={dueDate ? dueDate.toISOString().split('T')[0] : ''}
              />
            </div>

            {errors?.dueDate && (
              <Alert className="border-primary p-2" variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{errors.dueDate}</AlertDescription>
              </Alert>
            )}
          </PageFormContentField>

          <PageFormContentField>
            <Label>Documento (opcional)</Label>
            <Input
              accept="application/pdf,image/*"
              name="document"
              type="file"
            />
            {errors?.document && (
              <Alert className="border-primary p-2" variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{errors.document}</AlertDescription>
              </Alert>
            )}
          </PageFormContentField>

          <PageFormContentField>
            <Label>Status</Label>

            <Select
              defaultValue={
                (payload?.get('status') as string) ??
                pendency?.status ??
                'PENDING'
              }
              onValueChange={setStatus}
              name="status"
            >
              <SelectTrigger className="w-full">
                {statusMapping[status as keyof typeof statusMapping]}
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PENDING">Pendente</SelectItem>
                <SelectItem value="PAID">Pago</SelectItem>
              </SelectContent>
            </Select>

            {errors?.status && (
              <Alert className="border-primary p-2" variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{errors.status}</AlertDescription>
              </Alert>
            )}
          </PageFormContentField>
        </PageFormContent>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancelar</Button>
          </DialogClose>
          <Button disabled={isLoading} type="submit">
            {isLoading && <Loader2 className="size-4 animate-spin" />}
            Atualizar pendência
          </Button>
        </DialogFooter>
      </PageForm>
    </DialogContent>
  )
}
