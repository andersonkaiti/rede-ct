'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import { Checkbox } from '@components/ui/checkbox'
import { CoverUploader } from '@components/ui/cover-uploader'
import { DatePicker } from '@components/ui/date-picker'
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
import { FILE_VALIDATION_CONSTANTS } from '@utils/validate-file'
import { AlertCircle, Loader2 } from 'lucide-react'
import {
  PageContainer,
  PageDescription,
  PageHeaderContent,
  PageTitle,
} from '../../../_components/page-container'
import { useCreatePartner } from './use-create-partner.hook'

export default function CreatePartner() {
  const { form, submit, serverError } = useCreatePartner()

  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Cadastrar parceiro/financiador</PageTitle>
        <PageDescription>
          Preencha os campos abaixo para cadastrar um novo parceiro ou
          financiador.
        </PageDescription>
      </PageHeaderContent>

      <Form {...form}>
        <form className="space-y-6" onSubmit={submit}>
          {serverError && (
            <Alert className="mb-6 border-primary" variant="destructive">
              <AlertCircle className="size-4" />
              <AlertDescription>{serverError}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="space-y-6 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Nome <span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nome do parceiro ou financiador"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="websiteUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website</FormLabel>
                        <FormControl>
                          <Input placeholder="https://exemplo.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Categoria</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex.: Empresa, Instituição"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="since"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data de início da parceria</FormLabel>
                        <FormControl>
                          <DatePicker {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="isActive"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <FormControl>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              ref={field.ref}
                            />
                            <div className="space-y-1">
                              <div className="text-sm">
                                {field.value
                                  ? 'Visível na plataforma'
                                  : 'Oculto na plataforma'}
                              </div>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="lg:col-span-2">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descrição</FormLabel>
                        <FormControl>
                          <Textarea
                            className="min-h-[120px] resize-none"
                            placeholder="Digite uma breve descrição sobre o parceiro ou financiador, incluindo informações relevantes sobre a parceria..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="lg:col-span-1">
                <FormField
                  control={form.control}
                  name="logo"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <FormLabel className="font-medium text-base">
                        Logo <span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <CoverUploader
                          maxSize={
                            FILE_VALIDATION_CONSTANTS.MAX_IMAGE_SIZE_BYTES
                          }
                          onImageChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

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
              Cadastrar parceiro/financiador
            </Button>
          </div>
        </form>
      </Form>
    </PageContainer>
  )
}
