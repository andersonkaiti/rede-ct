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
import { Separator } from '@components/ui/separator'
import { Textarea } from '@components/ui/textarea'
import { FILE_VALIDATION_CONSTANTS } from '@utils/validate-file'
import { AlertCircle, Loader2 } from 'lucide-react'
import {
  PageContainer,
  PageDescription,
  PageHeaderContent,
  PageTitle,
} from '../../../../../../../_components/page-container'
import { useUpdateGalleryImage } from './use-update-gallery-image.hook'

export default function EditGalleryImagePage() {
  const { form, submit, serverError, image } = useUpdateGalleryImage()

  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Editar Imagem da Galeria</PageTitle>
        <PageDescription>
          Altere as informações necessárias para atualizar uma imagem da
          galeria.
        </PageDescription>
      </PageHeaderContent>

      <Form {...form}>
        <form className="space-y-6" onSubmit={submit}>
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
              render={({ field: { onChange, value, ...field } }) => (
                <FormItem>
                  <FormLabel>Imagem</FormLabel>
                  <FormControl>
                    <CoverUploader
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      maxSize={FILE_VALIDATION_CONSTANTS.MAX_IMAGE_SIZE_BYTES}
                      defaultImage={image?.imageUrl}
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
            disabled={form.formState.isSubmitting}
            type="submit"
          >
            {form.formState.isSubmitting && (
              <Loader2 className="mr-2 size-4 animate-spin" />
            )}
            Atualizar Imagem
          </Button>
        </form>
      </Form>
    </PageContainer>
  )
}
