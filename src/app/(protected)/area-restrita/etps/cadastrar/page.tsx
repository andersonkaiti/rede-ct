'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import MultipleSelector from '@components/ui/multiselect'
import { Separator } from '@components/ui/separator'
import { Textarea } from '@components/ui/textarea'
import { AlertCircle, Loader2 } from 'lucide-react'
import { PatternFormat } from 'react-number-format'
import {
  PageContainer,
  PageDescription,
  PageHeaderContent,
  PageTitle,
} from '@/app/(protected)/_components/page-container'
import { SelectResearcher } from '../../_components/select-researcher'
import { useCreateETP } from './use-create-etp'

export default function CreateETP() {
  const { form, submit, serverError, researchers } = useCreateETP()

  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Cadastrar ETP</PageTitle>
        <PageDescription>
          Preencha os campos abaixo para cadastrar um novo ETP.
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

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Código <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <PatternFormat
                      customInput={Input}
                      format="ETP-###"
                      placeholder="ETP-000"
                      onValueChange={(value) =>
                        field.onChange(value.formattedValue)
                      }
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Nome <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome do ETP" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Separator />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="leaderId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Líder</FormLabel>
                  <FormControl>
                    <SelectResearcher
                      onChange={field.onChange}
                      researcherId={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="deputyLeaderId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vice-líder</FormLabel>
                  <FormControl>
                    <SelectResearcher
                      onChange={field.onChange}
                      researcherId={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="secretaryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Secretário(a)</FormLabel>
                  <FormControl>
                    <SelectResearcher
                      onChange={field.onChange}
                      researcherId={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="memberIds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Membros</FormLabel>
                  <FormControl>
                    <MultipleSelector
                      placeholder="Selecione os membros"
                      onChange={(options) => {
                        field.onChange(options.map((option) => option.value))
                      }}
                      options={researchers?.map((researcher) => ({
                        value: researcher.id,
                        label: researcher.user.name,
                      }))}
                      value={researchers
                        ?.filter((researcher) =>
                          field.value?.includes(researcher.id),
                        )
                        .map((researcher) => ({
                          value: researcher.id,
                          label: researcher.user.name,
                        }))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Separator />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <Label>Descrição</Label>
                <Textarea placeholder="Digite uma breve descrição" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <Label>Observações</Label>
                <Textarea
                  placeholder="Digite observações (opcional)"
                  {...field}
                />
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
            Cadastrar ETP
          </Button>
        </form>
      </Form>
    </PageContainer>
  )
}
