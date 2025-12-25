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
import { Textarea } from '@components/ui/textarea'
import { AlertCircle, Loader2 } from 'lucide-react'
import { SelectMember } from '../../../../../_components/select-member'
import { useCreateCertification } from './use-create-certification.hook'

interface ICreateCertificationFormProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function CreateCertificationForm({
  setIsOpen,
}: ICreateCertificationFormProps) {
  const { form, serverError, submit } = useCreateCertification({
    setIsOpen,
  })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Cadastrar certificado</DialogTitle>
      </DialogHeader>

      <Form {...form}>
        <form className="space-y-6" onSubmit={submit}>
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
              <FormItem>
                <Label>Título</Label>
                <Input placeholder="Título do certificado" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <Label>Descrição</Label>
                <Textarea placeholder="Descrição" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="certification"
            render={({ field }) => (
              <FormItem>
                <Label>Arquivo do certificado</Label>
                <Input
                  accept="application/pdf,image/*"
                  onChange={(event) => {
                    field.onChange(event.target.files?.[0])
                  }}
                  type="file"
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancelar</Button>
            </DialogClose>
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              variant="outline"
            >
              {form.formState.isSubmitting && (
                <Loader2 className="size-4 animate-spin" />
              )}
              Cadastrar certificado
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  )
}
