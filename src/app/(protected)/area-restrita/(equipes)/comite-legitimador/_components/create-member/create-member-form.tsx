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
import { SelectMember } from '../../../../_components/select-member'
import { useCreateLegitimatorCommitteeTeamMember } from './use-create-member.hook'

interface ICreateMemberFormProps {
  setIsOpen: (isOpen: boolean) => void
}

export function CreateMemberForm({ setIsOpen }: ICreateMemberFormProps) {
  const { form, submit, serverError } =
    useCreateLegitimatorCommitteeTeamMember(setIsOpen)

  return (
    <DialogContent className="max-h-[100vh-2rem] space-y-8 overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Selecione o membro do comitê</DialogTitle>
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
                <FormItem>
                  <FormLabel>Cargo</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Cargo" />
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
                    <Textarea {...field} placeholder="Descrição" />
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
                Cadastrar membro
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </DialogContent>
  )
}
