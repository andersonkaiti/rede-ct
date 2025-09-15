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
import { Textarea } from '@components/ui/textarea'
import { AlertCircle, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { SelectMember } from '../../../../../_components/select-member'
import { useRegisterPendency } from './use-register-pendency'

interface ICreatePendencyFormProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function CreatePendencyForm({ setIsOpen }: ICreatePendencyFormProps) {
  const { errors, formAction, isLoading, message, payload } =
    useRegisterPendency({ setIsOpen })

  const [dueDate, setDueDate] = useState<Date | undefined>(
    payload?.get('dueDate')
      ? new Date(payload.get('dueDate') as string)
      : undefined
  )

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Cadastrar pendência</DialogTitle>
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

            <SelectMember userId={payload?.get('userId') as string} />

            {errors?.userId && (
              <Alert className="border-primary p-2" variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{errors.userId}</AlertDescription>
              </Alert>
            )}
          </PageFormContentField>

          <PageFormContentField>
            <Label>Título</Label>

            <Input
              defaultValue={payload?.get('title') as string}
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
              defaultValue={payload?.get('description') as string}
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
            <Label>Documento</Label>

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
        </PageFormContent>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancelar</Button>
          </DialogClose>
          <Button disabled={isLoading} type="submit">
            {isLoading && <Loader2 className="size-4 animate-spin" />}
            Cadastrar pendência
          </Button>
        </DialogFooter>
      </PageForm>
    </DialogContent>
  )
}
