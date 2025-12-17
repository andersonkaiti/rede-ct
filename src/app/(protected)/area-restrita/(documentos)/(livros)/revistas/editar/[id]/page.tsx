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
} from '@/app/(protected)/_components/page-container'
import {
  MAX_IMAGE_SIZE_BYTES,
  useUpdateScientificJournal,
} from './use-update-scientific-journal.hook'

export default function EditarRevista() {
  const { form, serverError, submit, journal } = useUpdateScientificJournal()

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Editar Revista</PageTitle>
          <PageDescription>
            Preencha os campos abaixo para atualizar a revista científica
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

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Nome <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome da revista" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="issn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  ISSN <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Digite o ISSN da revista" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="journalUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  URL da Revista <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="https://exemplo.com/revista" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="logo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Logo <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <CoverUploader
                    defaultImage={journal?.logoUrl}
                    maxSize={MAX_IMAGE_SIZE_BYTES}
                    onImageChange={field.onChange}
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
                <FormLabel>
                  Descrição <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Digite a descrição da revista"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="directors"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Diretores</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Digite os nomes dos diretores"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="editorialBoard"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Conselho Editorial</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Digite os membros do conselho editorial"
                    {...field}
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
            Editar revista
          </Button>
        </form>
      </Form>
    </PageContainer>
  )
}
