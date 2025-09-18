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
import { SelectMember } from '../../../../_components/select-member'
import { useUpdateLegitimatorCommitteeTeamMember } from './use-update-member.hook'

interface IUpdateMemberFormProps {
  setIsOpen: (isOpen: boolean) => void
}

export function UpdateMemberForm({ setIsOpen }: IUpdateMemberFormProps) {
  const { form, member, onSubmit, serverError, isSubmitting } =
    useUpdateLegitimatorCommitteeTeamMember({
      setIsOpen,
    })

  if (!member) {
    return null
  }

  return (
    <DialogContent className="max-h-[100vh-2rem] space-y-8 overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Selecione o membro do comitê</DialogTitle>
      </DialogHeader>

      <DialogContent>
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
                      userId={member.userId}
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
                <PageFormContentField>
                  <Label>Cargo</Label>
                  <FormControl>
                    <Input {...field} placeholder="Cargo" />
                  </FormControl>
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
                  <FormControl>
                    <Textarea {...field} placeholder="Descrição" />
                  </FormControl>
                  <FormMessage />
                </PageFormContentField>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost">Cancelar</Button>
              </DialogClose>
              <Button disabled={isSubmitting} type="submit">
                {isSubmitting && <Loader2 className="size-4 animate-spin" />}
                Atualizar membro
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </DialogContent>
  )
}
