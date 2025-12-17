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
import { SelectMember } from '../../../_components/select-member'
import { useUpdateWorkGroupTeamMember } from './use-update-member.hook'

interface IUpdateMemberFormProps {
  setIsOpen: (isOpen: boolean) => void
}

export function UpdateMemberForm({ setIsOpen }: IUpdateMemberFormProps) {
  const { form, member, submit, serverError } = useUpdateWorkGroupTeamMember({
    setIsOpen,
  })

  return (
    <DialogContent className="max-h-[100vh-2rem] space-y-8 overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Atualizar membro da equipe</DialogTitle>
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
                    <SelectMember
                      onChange={field.onChange}
                      userId={member?.userId}
                    />
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
                  <Label>Cargo</Label>
                  <Input
                    {...field}
                    onChange={field.onChange}
                    placeholder="Cargo"
                  />
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
                  <Textarea
                    {...field}
                    onChange={field.onChange}
                    placeholder="Descrição"
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
                Atualizar membro
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </DialogContent>
  )
}
