'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card'
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
import { AlertCircle, Loader2, Newspaper } from 'lucide-react'
import type { INews } from 'types/news'
import { useUpdateNews } from '../../../_hooks/use-update-news.hook'

interface IUpdateFormProps {
  news: INews
}

export function UpdateForm({
  news: { title, content, id, image_url },
}: IUpdateFormProps) {
  const { errors, payload, formAction, isLoading } = useUpdateNews({
    id,
    image_url,
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

      <Card className="rounded-md shadow-xs">
        <CardHeader className="flex items-center gap-2">
          <Newspaper className="!size-5 text-primary" />
          <CardTitle>Atualizar Notícia</CardTitle>
        </CardHeader>
        <CardContent>
          <PageForm action={formAction}>
            <PageFormContent>
              <PageFormContentField>
                <Label>
                  Título <span className="text-red-500">*</span>
                </Label>

                <Input
                  defaultValue={title || (payload?.get('title') as string)}
                  name="title"
                  placeholder="Título"
                />

                {errors?.title && errors?.title && (
                  <Alert className="border-red-500 p-2" variant="destructive">
                    <AlertCircle className="size-4" />
                    <AlertDescription>{errors?.title}</AlertDescription>
                  </Alert>
                )}
              </PageFormContentField>

              <PageFormContentField>
                <Label>
                  Texto <span className="text-red-500">*</span>
                </Label>

                <Input
                  defaultValue={content || (payload?.get('content') as string)}
                  name="content"
                  placeholder="Texto"
                />

                {errors?.content && errors?.content && (
                  <Alert className="border-red-500 p-2" variant="destructive">
                    <AlertCircle className="size-4" />
                    <AlertDescription>{errors?.content}</AlertDescription>
                  </Alert>
                )}
              </PageFormContentField>

              <PageFormContentField>
                <Label>
                  Imagem <span className="text-red-500">*</span>
                </Label>

                <FileUpload imageUrl={image_url} maxSizeMB={5} />

                {errors?.image && errors?.image && (
                  <Alert className="border-red-500 p-2" variant="destructive">
                    <AlertCircle className="size-4" />
                    <AlertDescription>{errors?.image}</AlertDescription>
                  </Alert>
                )}
              </PageFormContentField>

              <Button className="cursor-pointer" type="submit">
                {isLoading && <Loader2 className="size-4 animate-spin" />}
                Editar notícia
              </Button>
            </PageFormContent>
          </PageForm>
        </CardContent>
      </Card>
    </PageContainer>
  )
}
