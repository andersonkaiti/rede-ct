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
import { Input } from '@components/ui/input'
import {
  PageContainer,
  PageDescription,
  PageHeaderContent,
  PageTitle,
} from '@components/ui/page-container'
import { AlertCircle, Loader2 } from 'lucide-react'
import {
  MAX_IMAGE_SIZE_BYTES,
  MAX_IMAGE_SIZE_MB,
  useCreatePartner,
} from './use-create-partner.hook'

export default function CreatePartnerPage() {
  const { form, submit, serverError } = useCreatePartner()

  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Cadastrar Parceiro do Congresso</PageTitle>
        <PageDescription>
          Preencha os campos abaixo para cadastrar um novo parceiro do
          congresso.
        </PageDescription>
      </PageHeaderContent>

      <Form {...form}>
        <form className="space-y-8" onSubmit={submit}>
          {serverError && (
            <Alert className="mb-6 border-primary" variant="destructive">
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
                  <Input placeholder="Nome do parceiro" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="logo"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <div className="space-y-2">
                  <FormLabel className="font-medium text-base">
                    Logo <span className="text-primary">*</span>
                  </FormLabel>
                  <p className="text-muted-foreground text-sm">
                    Faça upload do logo do parceiro
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Máximo {MAX_IMAGE_SIZE_MB}MB
                  </p>
                </div>
                <FormControl>
                  <CoverUpload
                    maxSize={MAX_IMAGE_SIZE_BYTES}
                    onImageChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end pt-6">
            <Button
              className="w-full"
              disabled={form.formState.isSubmitting}
              type="submit"
              variant="outline"
            >
              {form.formState.isSubmitting && (
                <Loader2 className="mr-2 size-4 animate-spin" />
              )}
              Cadastrar parceiro
            </Button>
          </div>
        </form>
      </Form>
    </PageContainer>
  )
}
