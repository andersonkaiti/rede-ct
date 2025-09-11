'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
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
import { SelectMember } from '../../../../../_components/select-member'
import { useUpdateCertification } from './use-update-certification'

interface IUpdateCertificationFormProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function UpdateCertificationForm({
  setIsOpen,
}: IUpdateCertificationFormProps) {
  const { certification, errors, formAction, isLoading, message, payload } =
    useUpdateCertification({ setIsOpen })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Atualizar certificado</DialogTitle>
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

            <SelectMember userId={certification?.userId} />
          </PageFormContentField>

          <PageFormContentField>
            <Label>Título</Label>

            <Input
              defaultValue={
                certification?.title || (payload?.get('title') as string)
              }
              name="title"
              placeholder="Título do certificado"
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
                certification?.description ||
                (payload?.get('description') as string)
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
            <Label>Arquivo do certificado (opcional)</Label>

            <Input
              accept="application/pdf,image/*"
              name="certification"
              type="file"
            />

            {errors?.certification && (
              <Alert className="border-primary p-2" variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{errors.certification}</AlertDescription>
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
            Atualizar certificado
          </Button>
        </DialogFooter>
      </PageForm>
    </DialogContent>
  )
}
