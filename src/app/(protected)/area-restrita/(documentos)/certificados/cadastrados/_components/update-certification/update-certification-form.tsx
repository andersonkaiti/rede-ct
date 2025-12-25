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
import { Textarea } from '@components/ui/textarea'
import { AlertCircle, Loader2 } from 'lucide-react'
import { useUpdateCertification } from './use-update-certification.hook'

interface IUpdateCertificationFormProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function UpdateCertificationForm({
  setIsOpen,
}: IUpdateCertificationFormProps) {
  const { form, serverError, submit } = useUpdateCertification({
    setIsOpen,
  })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Atualizar certificado</DialogTitle>
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
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Título</FormLabel>
                <FormControl>
                  <Input placeholder="Título do certificado" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição</FormLabel>
                <FormControl>
                  <Textarea placeholder="Descrição" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="certification"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Arquivo do certificado (opcional)</FormLabel>
                <FormControl>
                  <Input
                    accept="application/pdf,image/*"
                    onChange={(e) => {
                      field.onChange(e.target.files?.[0])
                    }}
                    type="file"
                  />
                </FormControl>
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
              Atualizar certificado
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  )
}
