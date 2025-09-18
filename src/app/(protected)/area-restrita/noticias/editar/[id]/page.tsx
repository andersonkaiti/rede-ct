'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import { FileUpload } from '@components/ui/file-upload'
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
import {
  PageContainer,
  PageDescription,
  PageFormContentField,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from '@components/ui/page-container'
import { Textarea } from '@components/ui/textarea'
import { AlertCircle, Loader2 } from 'lucide-react'
import Loading from './loading'
import { useUpdateNews } from './use-update-news.hook'

export default function UpdateForm() {
  const { form, serverError, isSubmitting, onSubmit, isNewsLoading, news } =
    useUpdateNews()

  if (isNewsLoading) {
    return <Loading />
  }

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Editar Notícia</PageTitle>
          <PageDescription>
            Preencha os campos abaixo para atualizar a notícia
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

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
                <FormLabel>
                  Título <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Digite o título da notícia" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <PageFormContentField>
            <Label>
              Imagem <span className="text-primary">*</span>
            </Label>
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <>
                  <FileUpload
                    imageUrl={news?.imageUrl}
                    maxSizeMB={5}
                    onChange={field.onChange}
                  />
                  <FormMessage />
                </>
              )}
            />
          </PageFormContentField>

          <PageFormContentField>
            <Label>
              Texto <span className="text-primary">*</span>
            </Label>
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <>
                  <Textarea
                    placeholder="Digite o conteúdo da notícia"
                    {...field}
                  />
                  <FormMessage />
                </>
              )}
            />
          </PageFormContentField>

          <Button
            className="w-full cursor-pointer"
            disabled={isSubmitting}
            type="submit"
            variant="outline"
          >
            {isSubmitting && <Loader2 className="size-4 animate-spin" />}
            Editar notícia
          </Button>
        </form>
      </Form>
    </PageContainer>
  )
}
