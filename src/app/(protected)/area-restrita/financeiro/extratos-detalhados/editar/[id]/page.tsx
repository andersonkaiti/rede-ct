'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import { FileUploader } from '@components/ui/file-uploader'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form'
import { AlertCircle, Loader2 } from 'lucide-react'
import {
  PageContainer,
  PageDescription,
  PageHeaderContent,
  PageTitle,
} from '../../../../../_components/page-container'
import { useUpdateStatement } from './use-update-statement.hook'

export default function UpdateStatementPage() {
  const { form, serverError, submit, statement } = useUpdateStatement()

  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Editar Extrato Detalhado</PageTitle>
        <PageDescription>
          Atualize o documento para editar o extrato de transação financeira.
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

          <div className="grid grid-cols-1 gap-6">
            <FormField
              control={form.control}
              name="document"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Arquivo (PDF) <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <FileUploader
                      defaultFile={statement.documentUrl}
                      onFileChange={field.onChange}
                      {...field}
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
            Salvar alterações
          </Button>
        </form>
      </Form>
    </PageContainer>
  )
}
