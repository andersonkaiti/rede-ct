import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from '@http/auth/sign-in'
import { useCookiesNext } from 'cookies-next'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const PASSWORD_MIN_LENGTH = 8

export const signInSchema = z.object({
  email: z.email('E-mail inválido.').min(1, 'E-mail é obrigatório.'),
  password: z
    .string('A senha é obrigatória.')
    .min(
      PASSWORD_MIN_LENGTH,
      `A senha deve ter pelo menos ${PASSWORD_MIN_LENGTH} caracteres.`,
    ),
})

export type SignInInput = z.infer<typeof signInSchema>

export function useSignIn() {
  const cookies = useCookiesNext()
  const router = useRouter()

  const [serverError, setServerError] = useState<string | null>(null)
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const form = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  function togglePasswordVisibility() {
    setPasswordVisibility((v) => !v)
  }

  const submit = form.handleSubmit(async (values) => {
    try {
      const { token } = await signIn(values)

      cookies.setCookie('token', token)

      toast.success('Login realizado com sucesso.')

      router.push('/area-restrita')
    } catch (error) {
      if (error instanceof HTTPError) {
        const errorBody = await error.response.json()
        setServerError(errorBody.message)
      }
    }
  })

  return {
    serverError,
    form,
    passwordVisibility,
    togglePasswordVisibility,
    submit,
  }
}
