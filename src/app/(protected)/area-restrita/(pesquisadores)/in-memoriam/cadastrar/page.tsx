'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { AvatarUploader } from '@components/ui/avatar-uploader'
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
import { Label } from '@components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@components/ui/select'
import { Textarea } from '@components/ui/textarea'
import { FILE_VALIDATION_CONSTANTS } from '@utils/validate-file'
import { AlertCircle, Loader2 } from 'lucide-react'
import {
  PageContainer,
  PageDescription,
  PageHeaderContent,
  PageTitle,
} from '../../../../_components/page-container'
import { ROLE_OPTIONS } from '../_components/constants'
import { useCreateInMemoriam } from './use-create-in-memoriam.hook'

export default function CreateInMemoriam() {
  const { form, submit, serverError } = useCreateInMemoriam()

  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Cadastrar In Memoriam</PageTitle>
        <PageDescription>
          Preencha os campos para adicionar um membro ao In Memoriam.
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
            <div className="flex flex-col items-center justify-center sm:col-span-1">
              <FormField
                control={form.control}
                name="photo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <AvatarUploader
                        defaultAvatar={field.value}
                        maxSize={FILE_VALIDATION_CONSTANTS.MAX_IMAGE_SIZE_BYTES}
                        name={field.name}
                        onFileChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col gap-6 sm:col-span-1">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Nome <span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Digite o nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Tipo <span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          {
                            ROLE_OPTIONS.find(
                              (role) => role.value === field.value,
                            )?.label
                          }
                        </SelectTrigger>
                        <SelectContent>
                          {ROLE_OPTIONS.map((role) => (
                            <SelectItem key={role.value} value={role.value}>
                              {role.label}
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
                name="birthDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Data de Nascimento <span className="text-primary">*</span>
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
                name="deathDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Data de Falecimento{' '}
                      <span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <DatePicker {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="biography"
            render={({ field }) => (
              <FormItem>
                <Label>Biografia</Label>
                <Textarea
                  placeholder="Digite uma breve biografia"
                  {...field}
                  rows={6}
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
            Cadastrar In Memoriam
          </Button>
        </form>
      </Form>
    </PageContainer>
  )
}
