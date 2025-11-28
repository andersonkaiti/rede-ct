'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import { CoverUpload } from '@components/ui/cover-upload'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form'
import {
  PageContainer,
  PageDescription,
  PageHeaderContent,
  PageTitle,
} from '@components/ui/page-container'
import { Separator } from '@components/ui/separator'
import { Textarea } from '@components/ui/textarea'
import { AlertCircle, Loader2 } from 'lucide-react'
import {
  MAX_IMAGE_SIZE_BYTES,
  useCreateGalleryImage,
} from './use-create-gallery-image'

export default function CreateGalleryImagePage() {
  const { form, submit, serverError, isSubmitting } = useCreateGalleryImage()

  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Adicionar Imagem à Galeria</PageTitle>
        <PageDescription>
          Faça upload de uma nova imagem para a galeria do congresso.
        </PageDescription>
      </PageHeaderContent>

      <Form {...form}>
        <form className="space-y-8" onSubmit={submit}>
          {serverError && (
            <Alert className="border-primary" variant="destructive">
              <AlertCircle className="size-4" />
              <AlertDescription>{serverError}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-6">
            <FormField
              control={form.control}
              name="image"
              render={({ field: { onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>
                    Imagem <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <CoverUpload
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      maxSize={MAX_IMAGE_SIZE_BYTES}
                      onImageChange={(file) =>
                        onChange(file || new File([], ''))
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="caption"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Legenda</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Digite uma legenda para a imagem"
                      {...field}
                      value={field.value ?? ''}
                      rows={4}
                      className="resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Separator />

          <Button
            className="w-full cursor-pointer"
            variant="outline"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
            Adicionar Imagem
          </Button>
        </form>
      </Form>
    </PageContainer>
  )
}
