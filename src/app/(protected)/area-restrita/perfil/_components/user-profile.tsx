'use client'

import { CalendarDaysIcon } from '@components/icons/calendar-days'
import { MailCheckIcon } from '@components/icons/mail-check'
import { Alert, AlertDescription } from '@components/ui/alert'
import AvatarUpload from '@components/ui/avatar-upload'
import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import {
  PageFormContent,
  PageFormContentField,
} from '@components/ui/page-container'
import { AlertCircle, Loader2 } from 'lucide-react'
import Form from 'next/form'
import { useActionState, useEffect } from 'react'
import { PatternFormat } from 'react-number-format'
import { toast } from 'sonner'
import { type IActionState, updateUserAction } from '../actions'

interface IUserProfileProps {
  user: {
    name: string
    id: string
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    emailAddress: string
    role: 'ADMIN' | 'USER'
    orcid: string | null
    phone: string | null
    lattesUrl: string | null
  }
}

export function UserProfile({ user }: IUserProfileProps) {
  const [{ errors, message, payload, success }, formAction, isLoading] =
    useActionState(updateUserAction, {} as IActionState)

  useEffect(() => {
    if (success) {
      toast.success('Usuário atualizado com sucesso!')
    }
  }, [success])

  const role = user.role === 'ADMIN' ? 'Administrador' : 'Usuário'

  return (
    <Form
      action={formAction}
      className="mt-10 flex flex-col items-center justify-evenly gap-8 md:gap-12 lg:flex-row lg:items-start"
    >
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
        {message && (
          <Alert className="mb-4 border-primary" variant="destructive">
            <AlertCircle className="size-4" />
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        <PageFormContent>
          <PageFormContentField>
            <Label
              className="font-medium text-muted-foreground text-xs"
              htmlFor="name"
            >
              Nome
            </Label>

            <Input
              defaultValue={user.name || (payload?.get('name') as string)}
              id="name"
              name="name"
              placeholder="Informe seu nome"
            />

            {errors?.name && (
              <Alert className="mt-2 border-primary p-2" variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{errors.name}</AlertDescription>
              </Alert>
            )}
          </PageFormContentField>
        </PageFormContent>

        <div className="flex flex-col gap-2">
          <Label
            className="font-medium text-muted-foreground text-xs"
            htmlFor="email"
          >
            E-mail
          </Label>

          <div className="flex items-center gap-2 rounded-md bg-muted px-3 py-2">
            <MailCheckIcon className="text-muted-foreground" size={18} />
            <span className="text-base" id="email">
              {user.emailAddress}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-1 flex-col gap-2">
            <Label className="font-medium text-muted-foreground text-xs">
              Criado em
            </Label>
            <div className="flex items-center gap-2 rounded-md bg-muted px-3 py-2">
              <CalendarDaysIcon className="text-muted-foreground" size={18} />
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
            <div className="flex items-center gap-2 rounded-md bg-muted px-3 py-2">
              <CalendarDaysIcon className="text-muted-foreground" size={18} />
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

        <PageFormContent>
          <PageFormContentField>
            <Label
              className="font-medium text-muted-foreground text-xs"
              htmlFor="lattesUrl"
            >
              Lattes (opcional)
            </Label>

            <Input
              defaultValue={
                (user.lattesUrl || (payload?.get('lattesUrl') as string)) ?? ''
              }
              id="lattesUrl"
              name="lattesUrl"
              placeholder="https://lattes.cnpq.br/..."
              type="url"
            />

            {errors?.lattesUrl && (
              <Alert className="mt-2 border-primary p-2" variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{errors.lattesUrl}</AlertDescription>
              </Alert>
            )}
          </PageFormContentField>

          <PageFormContentField>
            <Label
              className="font-medium text-muted-foreground text-xs"
              htmlFor="orcid"
            >
              ORCID (opcional)
            </Label>

            <PatternFormat
              allowEmptyFormatting
              customInput={Input}
              defaultValue={
                (user.orcid || (payload?.get('orcid') as string)) ?? ''
              }
              format="####-####-####-####"
              id="orcid"
              name="orcid"
            />

            {errors?.orcid && (
              <Alert className="mt-2 border-primary p-2" variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{errors.orcid}</AlertDescription>
              </Alert>
            )}
          </PageFormContentField>

          <PageFormContentField>
            <Label
              className="font-medium text-muted-foreground text-xs"
              htmlFor="phone"
            >
              Celular (opcional)
            </Label>

            <PatternFormat
              allowEmptyFormatting
              customInput={Input}
              defaultValue={user.phone || (payload?.get('phone') as string)}
              format="(##) #####-####"
              id="phone"
              name="phone"
            />

            {errors?.phone && (
              <Alert className="mt-2 border-primary p-2" variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{errors.phone}</AlertDescription>
              </Alert>
            )}
          </PageFormContentField>

          <Button
            className="w-full cursor-pointer"
            disabled={isLoading}
            type="submit"
            variant="outline"
          >
            {isLoading && <Loader2 className="size-4 animate-spin" />}
            Atualizar usuário
          </Button>
        </PageFormContent>
      </div>
    </Form>
  )
}
