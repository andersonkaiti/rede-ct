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
import { useRegisterCertification } from './use-register-certification'

interface ICreateCertificationFormProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function CreateCertificationForm({
  setIsOpen,
}: ICreateCertificationFormProps) {
  const { errors, formAction, isLoading, message, payload } =
    useRegisterCertification({ setIsOpen })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Cadastrar certificado</DialogTitle>
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
            <Label>Arquivo do certificado</Label>

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
            Cadastrar certificado
          </Button>
        </DialogFooter>
      </PageForm>
    </DialogContent>
  )
}
