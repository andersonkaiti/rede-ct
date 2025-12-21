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
import { Textarea } from '@components/ui/textarea'
import { AlertCircle, Loader2 } from 'lucide-react'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from '../../../../../../_components/page-container'
import { SelectMember } from '../../../../../../area-restrita/_components/select-member'
import {
  MAX_FILE_SIZE_BYTES,
  useUpdateBookVolume,
} from './use-update-book-volume.hook'

export default function EditarCapitulo() {
  const { form, serverError, submit, bookVolume } = useUpdateBookVolume()

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Editar Volume</PageTitle>
          <PageDescription>
            Preencha os campos abaixo para atualizar o volume de livro
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="volumeNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Número do Volume <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Ano <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="2024" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Título <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Digite o título do livro" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="authorId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Autor <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <SelectMember
                    userId={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="accessUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL de Acesso</FormLabel>
                <FormControl>
                  <Input placeholder="https://exemplo.com/livro" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="catalogSheetUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL da Ficha Catalográfica</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://exemplo.com/ficha-catalografica"
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
                    placeholder="Digite a descrição do livro"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="coverImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Imagem da Capa <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <CoverUploader
                    defaultImage={bookVolume?.coverImageUrl}
                    maxSize={MAX_FILE_SIZE_BYTES}
                    onImageChange={field.onChange}
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
            Atualizar volume
          </Button>
        </form>
      </Form>
    </PageContainer>
  )
}
