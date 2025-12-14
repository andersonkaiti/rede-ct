'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { DatePicker } from '@components/ui/date-picker'
import { FileUploader } from '@components/ui/file-uploader'
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
import { Separator } from '@components/ui/separator'
import { AlertCircle, Loader2 } from 'lucide-react'
import { DeleteMinuteButton } from './_components/delete-minute-button'
import { useUpsertMinute } from './use-upsert-minute.hook'

export default function UpsertMinutePage() {
  const { form, submit, serverError, minute, handleRemoveMinute } =
    useUpsertMinute()

  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>{minute ? 'Editar Ata' : 'Cadastrar Ata'}</PageTitle>
        <PageDescription>
          {minute
            ? 'Altere as informações da ata desta reunião.'
            : 'Preencha os campos para cadastrar uma ata para esta reunião.'}
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

          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações da Ata</CardTitle>
                <CardDescription>
                  {minute
                    ? 'Altere os campos obrigatórios para atualizar a ata.'
                    : 'Preencha as informações obrigatórias para cadastrar a ata.'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Título <span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite o título da ata"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="publishedAt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Data de Publicação{' '}
                        <span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <DatePicker {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="document"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Arquivo da Ata <span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <FileUploader
                          onFileChange={field.onChange}
                          defaultFile={minute?.documentUrl}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>

          <Separator />

          <footer className="space-y-2">
            {minute && <DeleteMinuteButton handleRemove={handleRemoveMinute} />}

            <Button
              className="w-full cursor-pointer"
              disabled={form.formState.isSubmitting}
              type="submit"
              variant="outline"
            >
              {form.formState.isSubmitting && (
                <Loader2 className="mr-2 size-4 animate-spin" />
              )}
              {minute ? 'Salvar Alterações' : 'Cadastrar Ata'}
            </Button>
          </footer>
        </form>
      </Form>
    </PageContainer>
  )
}
