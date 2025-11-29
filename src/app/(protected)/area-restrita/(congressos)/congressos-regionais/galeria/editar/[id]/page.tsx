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
import { useParams } from 'next/navigation'
import Loading from './loading'
import {
  MAX_IMAGE_SIZE_MB,
  useUpdateGalleryImage,
} from './use-update-gallery-image.hook'

export default function UpdateGalleryImagePage() {
  const { id, congressId } = useParams<{ id: string; congressId?: string }>()
  const { form, submit, serverError, isLoading, isSubmitting } =
    useUpdateGalleryImage(id, congressId || '')

  if (isLoading) {
    return <Loading />
  }

  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Editar Imagem da Galeria</PageTitle>
        <PageDescription>
          Edite a imagem da galeria do congresso regional.
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
                  <FormLabel>Imagem</FormLabel>
                  <p className="text-muted-foreground text-sm">
                    Máximo {MAX_IMAGE_SIZE_MB}MB
                  </p>
                  <FormControl>
                    <CoverUpload
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      maxSize={MAX_IMAGE_SIZE_}
                      onImageChange={(file) => onChange(file)}
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
            Atualizar Imagem
          </Button>
        </form>
      </Form>
    </PageContainer>
  )
}
