'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import {
  PageForm,
  PageFormContent,
  PageFormContentField,
} from '@components/ui/page-container'
import { AlertCircle, Eye, EyeClosed, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useActionState, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { type IActionState, signInAction } from '../actions'

export function SignInForm() {
  const [{ errors, payload, message, success }, formAction, isLoading] =
    useActionState(signInAction, {} as IActionState)

  const router = useRouter()

  useEffect(() => {
    if (success) {
      toast.success('Usuário autenticado com sucesso!')
      router.push('/area-restrita')
    }
  }, [success, router])

  const [passwordVisibility, setPasswordVisibility] = useState(false)

  function togglePasswordVisibility() {
    setPasswordVisibility((visibility) => !visibility)
  }

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <PageForm action={formAction}>
        <PageFormContent>
          {message && (
            <Alert className="mb-4 border-primary" variant="destructive">
              <AlertCircle className="size-4" />
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}

          <PageFormContentField>
            <Label htmlFor="email">
              E-mail <span className="text-primary">*</span>
            </Label>

            <Input
              defaultValue={payload?.get('email') as string}
              id="email"
              name="email"
              placeholder="seuemail@exemplo.com"
            />

            {errors?.email && (
              <Alert className="border-primary p-2" variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{errors?.email}</AlertDescription>
              </Alert>
            )}
          </PageFormContentField>

          <PageFormContentField>
            <Label htmlFor="password">
              Senha <span className="text-primary">*</span>
            </Label>

            <div className="relative w-full">
              <Input
                className="w-full"
                defaultValue={payload?.get('password') as string}
                id="password"
                name="password"
                placeholder="Digite sua senha"
                type={passwordVisibility ? 'text' : 'password'}
              />

              <Button
                className="absolute inset-y-0 end-0 m-2 my-auto size-6 rounded-sm"
                onClick={togglePasswordVisibility}
                type="button"
                variant="ghost"
              >
                {passwordVisibility ? <Eye /> : <EyeClosed />}
              </Button>
            </div>

            {errors?.password && (
              <Alert className="border-primary p-2" variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{errors?.password}</AlertDescription>
              </Alert>
            )}
          </PageFormContentField>

          <Button
            className="w-full"
            disabled={isLoading}
            type="submit"
            variant="outline"
          >
            {isLoading && <Loader2 className="size-4 animate-spin" />}
            Entrar
          </Button>
        </PageFormContent>
      </PageForm>

      <div className="mt-10 text-center text-muted-foreground">
        <span className="text-sm">
          Não possui uma conta?{' '}
          <Link
            className="font-semibold text-foreground text-sm hover:underline"
            href="/sign-up"
          >
            Criar conta
          </Link>
        </span>
      </div>
    </div>
  )
}
