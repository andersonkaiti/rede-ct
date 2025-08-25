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
  PageHeaderContent,
  PageTitle,
} from '@components/ui/page-container'
import { Textarea } from '@components/ui/textarea'
import { AlertCircle, Loader2 } from 'lucide-react'
import { useRegisterNews } from '../_hooks/use-register-news.hook'

export default function CadastrarNoticia() {
  const { payload, errors, formAction, isLoading } = useRegisterNews()

  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Cadastrar Notícia</PageTitle>
        <PageDescription>
          Preencha os campos abaixo para cadastrar uma nova notícia.
        </PageDescription>
      </PageHeaderContent>

      <PageForm action={formAction}>
        <PageFormContent>
          <PageFormContentField>
            <Label>
              Título <span className="text-primary">*</span>
            </Label>

            <Input
              defaultValue={payload?.get('title') as string}
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

            <FileUpload maxSizeMB={5} />

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
              defaultValue={payload?.get('content') as string}
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

          <Button className="cursor-pointer" disabled={isLoading} type="submit">
            {isLoading && <Loader2 className="size-4 animate-spin" />}
            Cadastrar notícia
          </Button>
        </PageFormContent>
      </PageForm>
    </PageContainer>
  )
}
