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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@components/ui/select'
import { Separator } from '@components/ui/separator'
import { Textarea } from '@components/ui/textarea'
import { AlertCircle, Loader2 } from 'lucide-react'
import {
  PageContainer,
  PageDescription,
  PageHeaderContent,
  PageTitle,
} from '../../../../_components/page-container'
import { SelectMember } from '../../../_components/select-member'
import {
  DEGREE_LABEL_MAP,
  SENIORITY_LABEL_MAP,
  SENIORITY_OPTIONS,
} from '../_components/constants'

import { useCreateResearcher } from './use-create-researcher.hook'

export default function CadastrarPesquisador() {
  const { form, submit, serverError } = useCreateResearcher()

  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Cadastrar Pesquisador</PageTitle>
        <PageDescription>
          Preencha os campos abaixo para cadastrar um novo pesquisador
          participante.
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
              name="registrationNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Matrícula <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Digite a matrícula" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Usuário <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <SelectMember
                      onChange={field.onChange}
                      userId={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="seniority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Senioridade <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        {SENIORITY_LABEL_MAP[field.value] ||
                          'Selecione a senioridade'}
                      </SelectTrigger>
                      <SelectContent>
                        {SENIORITY_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="degrees"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Grau acadêmico <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <MultipleSelector
                      defaultOptions={[
                        { value: 'DOCTOR', label: 'Doutor' },
                        { value: 'MASTER', label: 'Mestre' },
                        { value: 'BACHELOR', label: 'Bacharel' },
                        { value: 'TECHNICAL', label: 'Técnico' },
                        { value: 'POSTGRADUATE', label: 'Pós-graduação' },
                      ]}
                      emptyIndicator={
                        <p className="text-center text-sm">
                          Nenhum grau encontrado
                        </p>
                      }
                      hidePlaceholderWhenSelected
                      onChange={(selected) =>
                        field.onChange(selected.map((item) => item.value))
                      }
                      placeholder="Selecione o(s) grau(s)"
                      value={field.value?.map((deg: string) => ({
                        value: deg,
                        label: DEGREE_LABEL_MAP[deg],
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
            name="formations"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Formações</FormLabel>
                <FormControl>
                  <Textarea placeholder="Digite as formações" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Separator />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="occupations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Ocupações <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Digite as ocupações" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="institutions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Instituição(ões) <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Digite as instituições" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Separator />

          <FormField
            control={form.control}
            name="mainEtps"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ETP(s) principal(is)</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o(s) ETP(s)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="biography"
            render={({ field }) => (
              <FormItem>
                <Label>Biografia</Label>
                <Textarea placeholder="Digite uma breve biografia" {...field} />
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
            Cadastrar pesquisador
          </Button>
        </form>
      </Form>
    </PageContainer>
  )
}
