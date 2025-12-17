'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import { CoverUploader } from '@components/ui/cover-uploader'
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
import { Textarea } from '@components/ui/textarea'
import { useUsers } from '@hooks/use-users.hook'
import { AlertCircle, Loader2 } from 'lucide-react'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from '@/app/(protected)/_components/page-container'
import {
  MAX_IMAGE_SIZE_BYTES,
  useUpdateWebinar,
} from './use-update-webinar.hook'

export default function EditarWebinario() {
  const { data } = useUsers()

  const { form, serverError, submit, webinar } = useUpdateWebinar()

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Editar Webinário</PageTitle>
          <PageDescription>
            Preencha os campos abaixo para atualizar o webinário
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

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
                  <CoverUploader
                    defaultImage={webinar?.thumbnailUrl}
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
                    placeholder="Selecione os convidados(as)"
                    emptyIndicator={
                      <p className="text-center text-sm">
                        Nenhum convidado encontrado
                      </p>
                    }
                    hidePlaceholderWhenSelected
                    onChange={(selected) =>
                      field.onChange(selected.map((item) => item.value))
                    }
                    value={field.value?.map((id: string) => {
                      const user = data?.users?.find((u) => u.id === id)
                      return {
                        value: id,
                        label: user?.name || id,
                      }
                    })}
                    options={data?.users?.map((user) => ({
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
            disabled={form.formState.isSubmitting}
            type="submit"
            variant="outline"
          >
            {form.formState.isSubmitting && (
              <Loader2 className="size-4 animate-spin" />
            )}
            Editar webinário
          </Button>
        </form>
      </Form>
    </PageContainer>
  )
}
