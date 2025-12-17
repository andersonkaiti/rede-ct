'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
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
import { Separator } from '@components/ui/separator'
import { Textarea } from '@components/ui/textarea'
import { AlertCircle, Loader2 } from 'lucide-react'
import {
  PageContainer,
  PageDescription,
  PageHeaderContent,
  PageTitle,
} from '@/app/(protected)/_components/page-container'
import { useUpdateRegionalCongress } from './use-update-regional-congress.hook'

export default function EditRegionalCongressPage() {
  const { form, submit, serverError } = useUpdateRegionalCongress()

  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Editar Congresso Regional</PageTitle>
        <PageDescription>
          Altere as informações necessárias para atualizar um congresso regional
          existente.
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>
                      Título <span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite o título do congresso"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 gap-6 md:col-span-2 md:grid-cols-3">
                <FormField
                  control={form.control}
                  name="edition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Edição <span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          min={1}
                          placeholder="Digite o número da edição"
                          {...field}
                          onChange={(e) => {
                            if (e.target.value === '') {
                              field.onChange(undefined)
                            } else {
                              const parsedValue = parseInt(e.target.value, 10)
                              if (!Number.isNaN(parsedValue)) {
                                field.onChange(parsedValue)
                              }
                            }
                          }}
                          value={field.value ?? ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Início <span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <DatePicker
                          value={field.value}
                          onChange={field.onChange}
                          disabled={field.disabled}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Término <span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <DatePicker
                          value={field.value}
                          onChange={field.onChange}
                          disabled={field.disabled}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Digite a descrição do congresso"
                      {...field}
                      rows={6}
                      className="resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="congressLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link do Congresso</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://meet.exemplo.com/congresso"
                        {...field}
                        value={field.value ?? ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Local do Congresso</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite o local do congresso"
                        {...field}
                        value={field.value ?? ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Separator />

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              <FormField
                control={form.control}
                name="noticeUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link do Edital</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://congresso.com/edital"
                        {...field}
                        value={field.value ?? ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="scheduleUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link da Programação</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://congresso.com/programacao"
                        {...field}
                        value={field.value ?? ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="programUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link do Programa</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://congresso.com/programa"
                        {...field}
                        value={field.value ?? ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="adminReportUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Relatório Administrativo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://congresso.com/relatorio"
                        {...field}
                        value={field.value ?? ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="proceedingsUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Anais do Congresso</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://congresso.com/anais"
                        {...field}
                        value={field.value ?? ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
            Atualizar Congresso
          </Button>
        </form>
      </Form>
    </PageContainer>
  )
}
