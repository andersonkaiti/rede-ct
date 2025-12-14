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
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from '@components/ui/page-container'
import { Textarea } from '@components/ui/textarea'
import { useUsers } from '@hooks/use-users.hook'
import { AlertCircle, Loader2 } from 'lucide-react'
import { SelectMember } from '../../../../_components/select-member'
import { MAX_IMAGE_SIZE_BYTES, useUpdateCourse } from './use-update-course.hook'

export default function EditarCurso() {
  const { data: users } = useUsers()

  const { form, serverError, submit, course } = useUpdateCourse()

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Editar Curso</PageTitle>
          <PageDescription>
            Preencha os campos abaixo para atualizar o curso
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
                  <Input placeholder="Digite o título do curso" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="coordinatorId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Coordenador <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <SelectMember {...field} userId={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  E-mail <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite o e-mail de contato"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Localização <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite a localização do curso"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Imagem <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <CoverUploader
                    defaultImage={course?.imageUrl}
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
            name="instructorIds"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instrutores(as)</FormLabel>
                <FormControl>
                  <MultipleSelector
                    placeholder="Selecione os instrutores(as)"
                    emptyIndicator={
                      <p className="text-center text-sm">
                        Nenhum instrutor encontrado
                      </p>
                    }
                    hideClearAllButton
                    hidePlaceholderWhenSelected
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
            name="registrationLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link de Inscrição</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://exemplo.com/inscricao"
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
                    placeholder="Digite a descrição do curso"
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
            Editar curso
          </Button>
        </form>
      </Form>
    </PageContainer>
  )
}
