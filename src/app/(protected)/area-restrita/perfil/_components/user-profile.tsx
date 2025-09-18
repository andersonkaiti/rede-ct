'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import AvatarUpload from '@components/ui/avatar-upload'
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
  PageFormContent,
  PageFormContentField,
} from '@components/ui/page-container'
import { AlertCircle, Loader2 } from 'lucide-react'
import { PatternFormat } from 'react-number-format'
import type { IUser } from 'types/user'
import { useUserProfile } from './use-user-profile.hook'

interface IUserProfileProps {
  user: IUser
}

const roleMapping = {
  ADMIN: 'Administrador',
  USER: 'Usuário',
}

export function UserProfile({ user }: IUserProfileProps) {
  const { form, isSubmitting, onSubmit, serverError } = useUserProfile(user)

  const role = roleMapping[user.role]

  return (
    <div className="mt-10 flex flex-col items-center justify-evenly gap-8 md:gap-12 lg:flex-row lg:items-start">
      <div className="flex flex-1 flex-col items-center gap-4">
        <AvatarUpload defaultAvatar={user.avatarUrl} />

        <div className="flex flex-col items-center gap-1">
          <h2 className="text-center font-semibold text-2xl">{user.name}</h2>
          <span className="flex items-center gap-1 text-muted-foreground text-sm">
            {role}
          </span>
        </div>
      </div>

      <div className="flex w-full flex-col gap-6 md:w-2/3">
        {serverError && (
          <Alert className="mb-4 border-primary" variant="destructive">
            <AlertCircle className="size-4" />
            <AlertDescription>{serverError}</AlertDescription>
          </Alert>
        )}

        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <PageFormContent>
              <PageFormContentField>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-muted-foreground text-xs">
                        Nome
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Informe seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </PageFormContentField>
            </PageFormContent>

            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex flex-1 flex-col gap-2">
                <Label className="font-medium text-muted-foreground text-xs">
                  Membro desde
                </Label>
                <div className="flex items-center gap-2 rounded-md">
                  <span className="text-xs">
                    {new Date(user.createdAt).toLocaleDateString('pt-BR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <Label className="font-medium text-muted-foreground text-xs">
                  Atualizado em
                </Label>
                <div className="flex items-center gap-2 rounded-md">
                  <span className="text-xs">
                    {new Date(user.updatedAt).toLocaleDateString('pt-BR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>
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

            <PageFormContent>
              <PageFormContentField>
                <FormField
                  control={form.control}
                  name="lattesUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-muted-foreground text-xs">
                        Lattes (opcional)
                      </FormLabel>
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
              </PageFormContentField>

              <PageFormContentField>
                <FormField
                  control={form.control}
                  name="orcid"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-muted-foreground text-xs">
                        ORCID (opcional)
                      </FormLabel>
                      <FormControl>
                        <PatternFormat
                          customInput={Input}
                          format="####-####-####-####"
                          onValueChange={(v) =>
                            field.onChange(v.formattedValue)
                          }
                          value={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </PageFormContentField>

              <PageFormContentField>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-muted-foreground text-xs">
                        Celular (opcional)
                      </FormLabel>
                      <FormControl>
                        <PatternFormat
                          allowEmptyFormatting
                          customInput={Input}
                          format="(##) #####-####"
                          onValueChange={(v) =>
                            field.onChange(v.formattedValue)
                          }
                          value={field.value as string}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </PageFormContentField>

              <Button
                className="w-full cursor-pointer"
                disabled={isSubmitting}
                type="submit"
                variant="outline"
              >
                {isSubmitting && <Loader2 className="size-4 animate-spin" />}
                Atualizar usuário
              </Button>
            </PageFormContent>
          </form>
        </Form>
      </div>
    </div>
  )
}
