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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import { PageFormContentField } from '@components/ui/page-container'
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
  const { form, serverError, isSubmitting, onSubmit } =
    useRegisterCertification({
      setIsOpen,
    })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Cadastrar certificado</DialogTitle>
      </DialogHeader>

      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          {serverError && (
            <Alert className="mb-4 border-primary" variant="destructive">
              <AlertCircle className="size-4" />
              <AlertDescription>{serverError}</AlertDescription>
            </Alert>
          )}

          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Membro</FormLabel>
                <FormControl>
                  <SelectMember
                    onChange={field.onChange}
                    userId={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <PageFormContentField>
                <Label>Título</Label>
                <Input placeholder="Título do certificado" {...field} />
                <FormMessage />
              </PageFormContentField>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <PageFormContentField>
                <Label>Descrição</Label>
                <Textarea placeholder="Descrição" {...field} />
                <FormMessage />
              </PageFormContentField>
            )}
          />

          <FormField
            control={form.control}
            name="certification"
            render={({ field }) => (
              <PageFormContentField>
                <Label>Arquivo do certificado</Label>
                <Input
                  accept="application/pdf,image/*"
                  onChange={(e) => {
                    field.onChange(e.target.files?.[0])
                  }}
                  type="file"
                />
                <FormMessage />
              </PageFormContentField>
            )}
          />
        </form>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancelar</Button>
          </DialogClose>
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting && <Loader2 className="size-4 animate-spin" />}
            Cadastrar certificado
          </Button>
        </DialogFooter>
      </Form>
    </DialogContent>
  )
}
