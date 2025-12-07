'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import { CoverUpload } from '@components/ui/cover-upload'
import { DatePicker } from '@components/ui/date-picker'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form'
import { Input } from '@components/ui/input'
import MultipleSelector from '@components/ui/multiselect'
import {
  PageContainer,
  PageDescription,
  PageHeaderContent,
  PageTitle,
} from '@components/ui/page-container'
import { Textarea } from '@components/ui/textarea'
import { useUsers } from '@hooks/use-users.hook'
import { AlertCircle, Loader2 } from 'lucide-react'
import {
  MAX_IMAGE_SIZE_BYTES,
  useCreateWebinar,
} from './use-create-webinar.hook'

export default function CadastrarWebinario() {
  const { data: users } = useUsers()

  const { form, isSubmitting, submit, serverError } = useCreateWebinar()

  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Cadastrar Webinário</PageTitle>
        <PageDescription>
          Preencha os campos abaixo para cadastrar um novo webinário.
        </PageDescription>
      </PageHeaderContent>

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
                <FormLabel>
                  Título <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite o título do webinário"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="thumbnail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Thumbnail <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <CoverUpload
                    maxSize={MAX_IMAGE_SIZE_BYTES}
                    onImageChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="guestIds"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Convidados(as)</FormLabel>
                <FormControl>
                  <MultipleSelector
                    onChange={(selected) =>
                      field.onChange(selected.map((item) => item.value))
                    }
                    value={field.value?.map((id: string) => {
                      const user = users?.find((u) => u.id === id)
                      return {
                        value: id,
                        label: user?.name || id,
                      }
                    })}
                    options={users?.map((user) => ({
                      label: user.name,
                      value: user.id,
                    }))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="scheduledAt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Data e Hora <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <DatePicker value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="webinarLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link do Webinário</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://exemplo.com/webinario"
                    {...field}
                  />
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
                  <Textarea
                    placeholder="Digite a descrição do webinário"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="w-full cursor-pointer"
            disabled={isSubmitting}
            type="submit"
            variant="outline"
          >
            {isSubmitting && <Loader2 className="size-4 animate-spin" />}
            Cadastrar webinário
          </Button>
        </form>
      </Form>
    </PageContainer>
  )
}
