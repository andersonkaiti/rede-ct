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
  PageTitle,
} from '@components/ui/page-container'
import { Textarea } from '@components/ui/textarea'
import { AlertCircle, Loader2, Newspaper } from 'lucide-react'
import { useRegisterNews } from '../_hooks/use-register-news.hook'

export default function CadastrarNoticia() {
  const { payload, errors, formAction, isLoading } = useRegisterNews()

  return (
    <PageContainer>
      <header className="space-y-4">
        <PageTitle>Informações da Notícia</PageTitle>
        <PageDescription>
          Preencha os campos abaixo para cadastrar uma nova notícia
        </PageDescription>
      </header>

      <Card className="rounded-md shadow-xs">
        <CardHeader className="flex items-center gap-2">
          <Newspaper className="!size-5 text-primary" />
          <CardTitle className="text-xl">Cadastrar Notícia</CardTitle>
        </CardHeader>
        <CardContent>
          <PageForm action={formAction}>
            <PageFormContent>
              <PageFormContentField>
                <Label>
                  Título <span className="text-red-500">*</span>
                </Label>

                <Input
                  defaultValue={payload?.get('title') as string}
                  name="title"
                  placeholder="Digite o título da notícia"
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

                <Textarea
                  defaultValue={payload?.get('content') as string}
                  name="content"
                  placeholder="Digite o conteúdo da notícia"
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

                <FileUpload maxSizeMB={5} />

                {errors?.image && errors?.image && (
                  <Alert className="border-red-500 p-2" variant="destructive">
                    <AlertCircle className="size-4" />
                    <AlertDescription>{errors?.image}</AlertDescription>
                  </Alert>
                )}
              </PageFormContentField>

              <Button
                className="cursor-pointer"
                disabled={isLoading}
                type="submit"
              >
                {isLoading && <Loader2 className="size-4 animate-spin" />}
                Cadastrar notícia
              </Button>
            </PageFormContent>
          </PageForm>
        </CardContent>
      </Card>
    </PageContainer>
  )
}
