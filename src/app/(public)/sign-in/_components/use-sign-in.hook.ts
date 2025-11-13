import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import z from 'zod'
import { signInAction } from '../actions'

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

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  function togglePasswordVisibility() {
    setPasswordVisibility((v) => !v)
  }

  async function onSubmit(values: SignInInput) {
    const result = await signInAction(values)

    if (!result.success) {
      setServerError(result.message)
    }
  }

  return {
    serverError,
    form,
    passwordVisibility,
    isSubmitting,
    togglePasswordVisibility,
    onSubmit,
  }
}
