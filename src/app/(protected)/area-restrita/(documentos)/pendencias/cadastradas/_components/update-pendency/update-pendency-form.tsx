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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/ui/select'
import { Textarea } from '@components/ui/textarea'
import { AlertCircle, Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useUpdatePendency } from './use-update-pendency'

interface IUpdatePendencyFormProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function UpdatePendencyForm({ setIsOpen }: IUpdatePendencyFormProps) {
  const { pendency, form, serverError, isSubmitting, onSubmit } =
    useUpdatePendency({ setIsOpen })

  const [dueDate, setDueDate] = useState<Date | undefined>()

  useEffect(() => {
    if (pendency?.dueDate) {
      setDueDate(new Date(pendency.dueDate))
    } else {
      setDueDate(undefined)
    }
  }, [pendency])

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Atualizar pendência</DialogTitle>
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
                        setDueDate(date)
                        field.onChange(
                          date ? date.toISOString().split('T')[0] : ''
                        )
                      }}
                      placeholder="Selecione uma data de vencimento"
                      value={dueDate}
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
                <FormLabel>Documento (opcional)</FormLabel>
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

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="PENDING">Pendente</SelectItem>
                    <SelectItem value="PAID">Pago</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancelar</Button>
            </DialogClose>
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting && <Loader2 className="size-4 animate-spin" />}
              Atualizar pendência
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  )
}
