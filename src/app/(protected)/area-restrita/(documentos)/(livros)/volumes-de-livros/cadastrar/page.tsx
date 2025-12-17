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
  PageHeaderContent,
  PageTitle,
} from '@/app/(protected)/_components/page-container'
import {
  MAX_FILE_SIZE_BYTES,
  useCreateBookVolume,
} from './use-create-book-volume.hook'

export default function CadastrarCapitulo() {
  const { form, submit, serverError } = useCreateBookVolume()

  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Cadastrar Volume</PageTitle>
        <PageDescription>
          Preencha os campos abaixo para cadastrar um novo volume de livro.
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
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Autor <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome do autor" {...field} />
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

          <div className="space-y-4">
            <h3 className="font-medium text-sm">Arquivos</h3>

            <FormField
              control={form.control}
              name="authorImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Imagem do Autor <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <CoverUploader
                      maxSize={MAX_FILE_SIZE_BYTES}
                      onImageChange={field.onChange}
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
                      maxSize={MAX_FILE_SIZE_BYTES}
                      onImageChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="catalogSheet"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Ficha Catalográfica <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <CoverUploader
                      maxSize={MAX_FILE_SIZE_BYTES}
                      onImageChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            className="w-full cursor-pointer"
            disabled={form.formState.isSubmitting}
            type="submit"
            variant="outline"
          >
            {form.formState.isSubmitting && (
              <Loader2 className="size-4 animate-spin" />
            )}
            Cadastrar volume
          </Button>
        </form>
      </Form>
    </PageContainer>
  )
}
