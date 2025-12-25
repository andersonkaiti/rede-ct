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
import { SelectMember } from '../../../../../_components/select-member'
import { useRegisterPendency } from './use-create-pendency.hook'

interface ICreatePendencyFormProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function CreatePendencyForm({ setIsOpen }: ICreatePendencyFormProps) {
  const { form, serverError, submit } = useRegisterPendency({
    setIsOpen,
  })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Cadastrar pendência</DialogTitle>
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
                <FormLabel>Título</FormLabel>
                <FormControl>
                  <Input placeholder="Título da pendência" {...field} />
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
            name="dueDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data de vencimento</FormLabel>
                <FormControl>
                  <div className="space-y-2">
                    <DatePicker
                      onChange={(date) => {
                        field.onChange(
                          date ? date.toISOString().split('T')[0] : '',
                        )
                      }}
                      placeholder="Selecione uma data de vencimento"
                      value={field.value}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="document"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Documento</FormLabel>
                <FormControl>
                  <Input
                    accept="application/pdf,image/*"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
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
              Cadastrar pendência
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  )
}
