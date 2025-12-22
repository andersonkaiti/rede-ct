'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import { CoverUploader } from '@components/ui/cover-uploader'
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
import { RichTextEditor } from '@components/ui/rich-text-editor'
import { AlertCircle, Loader2 } from 'lucide-react'
import {
  PageContainer,
  PageDescription,
  PageHeaderContent,
  PageTitle,
} from '../../../_components/page-container'
import { TOTAL_SIZE, useCreateNews } from './use-create-news.hook'

export default function CadastrarNoticia() {
  const { form, isSubmitting, submit, serverError } = useCreateNews()

  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Cadastrar Notícia</PageTitle>
        <PageDescription>
          Preencha os campos abaixo para cadastrar uma nova notícia.
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
                  <Input placeholder="Digite o título da notícia" {...field} />
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
                    maxSize={TOTAL_SIZE}
                    onImageChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <Label>
                  Texto <span className="text-primary">*</span>
                </Label>
                <RichTextEditor
                  content={field.value}
                  onChange={field.onChange}
                />
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
            Cadastrar notícia
          </Button>
        </form>
      </Form>
    </PageContainer>
  )
}
