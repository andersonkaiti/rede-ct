import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@components/ui/dialog'
import { Form, FormField, FormMessage } from '@components/ui/form'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import { PageFormContentField } from '@components/ui/page-container'
import { AlertCircle, Loader2 } from 'lucide-react'
import { useCreateLaw } from './use-create-law.hook'

interface ICreateLawFormProps {
  setIsOpen: (isOpen: boolean) => void
}

export function CreateLawForm({ setIsOpen }: ICreateLawFormProps) {
  const { form, isSubmitting, submit, serverError } = useCreateLaw(setIsOpen)

  return (
    <DialogContent className="max-h-[100vh-2rem] space-y-8 overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Cadastrar nova lei</DialogTitle>
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
                <PageFormContentField>
                  <Label>Título</Label>
                  <Input {...field} placeholder="Título da lei" />
                  <FormMessage />
                </PageFormContentField>
              )}
            />

            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <PageFormContentField>
                  <Label>Link</Label>
                  <Input
                    {...field}
                    placeholder="https://exemplo.com/lei"
                    type="url"
                  />
                  <FormMessage />
                </PageFormContentField>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <PageFormContentField>
                  <Label>País</Label>
                  <Input {...field} placeholder="Brasil" />
                  <FormMessage />
                </PageFormContentField>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost">Cancelar</Button>
              </DialogClose>
              <Button disabled={isSubmitting} type="submit" variant="outline">
                {isSubmitting && <Loader2 className="size-4 animate-spin" />}
                Cadastrar lei
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </DialogContent>
  )
}
