'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import { FileUpload } from '@components/ui/file-upload'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import {
  PageContainer,
  PageDescription,
  PageForm,
  PageFormContent,
  PageFormContentField,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from '@components/ui/page-container'
import { Textarea } from '@components/ui/textarea'
import { AlertCircle, Loader2 } from 'lucide-react'
import type { INews } from 'types/news'
import { useUpdateNews } from '../../../_hooks/use-update-news.hook'

interface IUpdateFormProps {
  news: INews
}

export function UpdateForm({
  news: { title, content, id, imageUrl },
}: IUpdateFormProps) {
  const { errors, payload, formAction, isLoading, message } = useUpdateNews({
    id,
    imageUrl,
  })

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

      <PageForm action={formAction}>
        <PageFormContent>
          {message && (
            <Alert className="mb-4 border-primary" variant="destructive">
              <AlertCircle className="size-4" />
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}

          <PageFormContentField>
            <Label>
              Título <span className="text-primary">*</span>
            </Label>

            <Input
              defaultValue={title || (payload?.get('title') as string)}
              name="title"
              placeholder="Digite o título da notícia"
            />

            {errors?.title && errors?.title && (
              <Alert className="border-primary p-2" variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{errors?.title}</AlertDescription>
              </Alert>
            )}
          </PageFormContentField>

          <PageFormContentField>
            <Label>
              Imagem <span className="text-primary">*</span>
            </Label>

            <FileUpload imageUrl={imageUrl} maxSizeMB={5} />

            {errors?.image && errors?.image && (
              <Alert className="border-primary p-2" variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{errors?.image}</AlertDescription>
              </Alert>
            )}
          </PageFormContentField>

          <PageFormContentField>
            <Label>
              Texto <span className="text-primary">*</span>
            </Label>

            <Textarea
              defaultValue={content || (payload?.get('content') as string)}
              name="content"
              placeholder="Digite o conteúdo da notícia"
            />

            {errors?.content && errors?.content && (
              <Alert className="border-primary p-2" variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{errors?.content}</AlertDescription>
              </Alert>
            )}
          </PageFormContentField>

          <Button className="cursor-pointer" type="submit">
            {isLoading && <Loader2 className="size-4 animate-spin" />}
            Editar notícia
          </Button>
        </PageFormContent>
      </PageForm>
    </PageContainer>
  )
}
