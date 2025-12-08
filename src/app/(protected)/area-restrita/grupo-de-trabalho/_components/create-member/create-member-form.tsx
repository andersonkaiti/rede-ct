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
import { SelectMember } from '../../../_components/select-member'
import { useCreateWorkGroupTeamMember } from './use-create-member.hook'

interface ICreateMemberFormProps {
  setIsOpen: (isOpen: boolean) => void
}

export function CreateMemberForm({ setIsOpen }: ICreateMemberFormProps) {
  const { form, isSubmitting, submit, serverError } =
    useCreateWorkGroupTeamMember(setIsOpen)

  return (
    <DialogContent className="max-h-[100vh-2rem] space-y-8 overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Selecione o membro da equipe</DialogTitle>
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
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Membro</FormLabel>
                  <FormControl>
                    <SelectMember onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <PageFormContentField>
                  <Label>Cargo</Label>
                  <Input
                    {...field}
                    onChange={field.onChange}
                    placeholder="Cargo"
                  />
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
                  <Textarea
                    {...field}
                    onChange={field.onChange}
                    placeholder="Descrição"
                  />
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
                Cadastrar membro
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </DialogContent>
  )
}
