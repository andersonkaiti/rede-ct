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
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@components/ui/input-group'
import {
  PageContainer,
  PageDescription,
  PageHeaderContent,
  PageTitle,
} from '@components/ui/page-container'
import { Separator } from '@components/ui/separator'
import { Textarea } from '@components/ui/textarea'
import { AlertCircle, Link, Loader2, MapPin, Video } from 'lucide-react'
import { useCreateInternationalScientificCongress } from './use-create-international-scientific-congress'

export default function CreateInternationalScientificCongressPage() {
  const { form, submit, serverError, isSubmitting } =
    useCreateInternationalScientificCongress()

  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Cadastrar Congresso Científico Internacional</PageTitle>
        <PageDescription>
          Preencha os campos para cadastrar um novo congresso científico
          internacional.
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

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Informações Básicas</CardTitle>
                <CardDescription>
                  Preencha os dados principais do congresso
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
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
                                  const parsedValue = parseInt(
                                    e.target.value,
                                    10,
                                  )
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
              </CardContent>
            </Card>

            <Card className="lg:col-span-1">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Video className="size-5 text-primary" />
                  <CardTitle>Informações Online</CardTitle>
                </div>
                <CardDescription>
                  Informe o link ou site caso o congresso seja online ou híbrido
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="congressLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Link do Congresso</FormLabel>
                      <FormControl>
                        <InputGroup>
                          <InputGroupAddon>
                            <Link className="size-4" />
                          </InputGroupAddon>
                          <InputGroupInput
                            placeholder="https://meet.exemplo.com/congresso"
                            {...field}
                            value={field.value ?? ''}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MapPin className="size-5 text-primary" />
                  <CardTitle>Informações Presenciais</CardTitle>
                </div>
                <CardDescription>
                  Informe o local caso o congresso seja presencial ou híbrido
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Local do Congresso</FormLabel>
                      <FormControl>
                        <InputGroup>
                          <InputGroupAddon>
                            <MapPin className="size-4" />
                          </InputGroupAddon>
                          <InputGroupInput
                            placeholder="Digite o local do congresso"
                            {...field}
                            value={field.value ?? ''}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>

          <Separator />

          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Mais Informações</CardTitle>
                <CardDescription>
                  Preencha as informações adicionais se desejar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
                        <FormLabel>Link do Cronograma</FormLabel>
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
              </CardContent>
            </Card>
          </div>

          <Separator />

          <Button
            className="w-full cursor-pointer"
            variant="outline"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
            Cadastrar Congresso
          </Button>
        </form>
      </Form>
    </PageContainer>
  )
}
