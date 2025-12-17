import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@components/ui/dialog'
import { Form, FormField, FormItem, FormMessage } from '@components/ui/form'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import { AlertCircle, Loader2 } from 'lucide-react'
import { useUpdateLaw } from './use-update-law.hook'

interface IUpdateLawFormProps {
  setIsOpen: (isOpen: boolean) => void
}

export function UpdateLawForm({ setIsOpen }: IUpdateLawFormProps) {
  const { form, submit, serverError } = useUpdateLaw({
    setIsOpen,
  })

  return (
    <DialogContent className="max-h-[100vh-2rem] space-y-8 overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Atualizar lei</DialogTitle>
      </DialogHeader>

      <DialogContent>
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
                  <Label>Título</Label>
                  <Input {...field} placeholder="Título da lei" />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <Label>Link</Label>
                  <Input
                    {...field}
                    placeholder="https://exemplo.com/lei"
                    type="url"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <Label>País</Label>
                  <Input {...field} placeholder="Brasil" />
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
                Atualizar lei
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </DialogContent>
  )
}
