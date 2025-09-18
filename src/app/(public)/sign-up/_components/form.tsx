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
import { AlertCircle, Eye, EyeClosed, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useSignUp } from './use-sign-up.hook'

export function SignUpForm() {
  const {
    isSubmitting,
    form,
    onSubmit,
    passwordVisibility,
    confirmPasswordVisibility,
    serverError,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
  } = useSignUp()

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          {serverError && (
            <Alert className="mb-6 border-primary" variant="destructive">
              <AlertCircle className="size-4" />
              <AlertDescription>{serverError}</AlertDescription>
            </Alert>
          )}

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Nome completo <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite seu nome completo"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  E-mail <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="seuemail@exemplo.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Senha <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <Input
                      className="w-full"
                      placeholder="Digite uma senha segura"
                      type={passwordVisibility ? 'text' : 'password'}
                      {...field}
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
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Confirme sua senha <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <Input
                      className="w-full"
                      placeholder="Repita a senha"
                      type={confirmPasswordVisibility ? 'text' : 'password'}
                      {...field}
                    />
                    <Button
                      className="absolute inset-y-0 end-0 m-2 my-auto size-6 rounded-sm"
                      onClick={toggleConfirmPasswordVisibility}
                      type="button"
                      variant="ghost"
                    >
                      {confirmPasswordVisibility ? <Eye /> : <EyeClosed />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="w-full"
            disabled={isSubmitting}
            type="submit"
            variant="outline"
          >
            {isSubmitting && <Loader2 className="size-4 animate-spin" />}
            Criar conta
          </Button>
        </form>
      </Form>
      <div className="mt-10 text-center text-muted-foreground">
        <span className="text-sm">
          Já possui uma conta?{' '}
          <Link
            className="font-semibold text-foreground text-sm hover:underline"
            href="/sign-in"
          >
            Entrar
          </Link>
        </span>
      </div>
    </div>
  )
}
