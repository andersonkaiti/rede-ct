'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { AvatarUploader } from '@components/ui/avatar-uploader'
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
import {
  PageContainer,
  PageFormContentField,
} from '@components/ui/page-container'
import { format } from 'date-fns'
import { AlertCircle, Loader2 } from 'lucide-react'
import { PatternFormat } from 'react-number-format'
import { ROLE_MAPPING } from '../_constants/roles'
import { MAX_AVATAR_SIZE_BYTES } from '../_constants/zod'
import { useUserProfile } from '../_hooks/use-user-profile.hook'

interface IUserProfileProps {
  user: {
    avatarUrl: string | null
    createdAt: string
    emailAddress: string
    id: string
    lattesUrl: string | null
    name: string
    orcid: string | null
    phone: string | null
    role: 'ADMIN' | 'USER'
    updatedAt: string
  }
}

export function UserProfile({ user }: IUserProfileProps) {
  const { form, submit, serverError } = useUserProfile(user)

  const role = ROLE_MAPPING[user.role as keyof typeof ROLE_MAPPING]

  return (
    <PageContainer>
      <Form {...form}>
        <form className="space-y-6" onSubmit={submit}>
          {serverError && (
            <Alert className="mb-4 border-primary" variant="destructive">
              <AlertCircle className="size-4" />
              <AlertDescription>{serverError}</AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center">
              <FormField
                control={form.control}
                name="avatarImage"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <AvatarUploader
                        defaultAvatar={field.value || user.avatarUrl}
                        maxSize={MAX_AVATAR_SIZE_BYTES}
                        name={field.name}
                        onFileChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Nome <span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Informe seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col gap-2">
                <Label
                  className="font-medium text-muted-foreground text-xs"
                  htmlFor="role"
                >
                  Função
                </Label>

                <Input defaultValue={role} disabled={true} />
              </div>

              <div className="flex flex-col gap-2">
                <Label
                  className="font-medium text-muted-foreground text-xs"
                  htmlFor="email"
                >
                  E-mail
                </Label>
                <Input defaultValue={user.emailAddress} disabled={true} />
              </div>

              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex flex-1 flex-col gap-2">
                  <Label className="font-medium text-muted-foreground text-xs">
                    Membro desde
                  </Label>
                  <div className="flex items-center gap-2 rounded-md">
                    <span className="text-xs">
                      {format(user.createdAt, 'dd/MM/yyyy')}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <Label className="font-medium text-muted-foreground text-xs">
                    Atualizado em
                  </Label>
                  <div className="flex items-center gap-2 rounded-md">
                    <span className="text-xs">
                      {format(user.updatedAt, 'dd/MM/yyyy')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="lattesUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lattes (opcional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://lattes.cnpq.br/..."
                      type="url"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="orcid"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ORCID (opcional)</FormLabel>
                  <FormControl>
                    <PatternFormat
                      customInput={Input}
                      format="####-####-####-####"
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
          </div>

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <PageFormContentField>
                <FormLabel>Celular (opcional)</FormLabel>
                <FormControl>
                  <PatternFormat
                    customInput={Input}
                    format="(##) #####-####"
                    onValueChange={(value) =>
                      field.onChange(value.formattedValue)
                    }
                    value={field.value as string}
                  />
                </FormControl>
                <FormMessage />
              </PageFormContentField>
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
            Atualizar usuário
          </Button>
        </form>
      </Form>
    </PageContainer>
  )
}
