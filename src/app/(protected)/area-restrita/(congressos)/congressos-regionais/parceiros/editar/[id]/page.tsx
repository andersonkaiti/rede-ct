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
import {
  PageContainer,
  PageDescription,
  PageHeaderContent,
  PageTitle,
} from '@components/ui/page-container'
import { AlertCircle, Loader2 } from 'lucide-react'
import { MAX_LOGO_SIZE_MB, useUpdatePartner } from './use-update-partner.hook'

export default function UpdatePartnerForm() {
  const { form, submit, serverError } = useUpdatePartner()

  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Editar Parceiro do Congresso</PageTitle>
        <PageDescription>
          Edite as informações do parceiro do congresso abaixo.
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
                  <FormLabel className="font-medium text-base">Logo</FormLabel>
                  <p className="text-muted-foreground text-sm">
                    Faça upload do logo do parceiro
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Máximo {MAX_LOGO_SIZE_MB}MB
                  </p>
                </div>
                <FormControl>
                  <CoverUploader
                    maxSize={MAX_LOGO_SIZE_MB}
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
              Atualizar parceiro
            </Button>
          </div>
        </form>
      </Form>
    </PageContainer>
  )
}
