import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import z from 'zod'
import { signUpAction } from '../actions'

const PASSWORD_MIN_LENGTH = 8

export const signUpSchema = z
  .object({
    name: z.string('Nome é obrigatório. ').min(1, 'Nome é obrigatório.'),
    email: z.email('E-mail inválido. ').min(1, 'E-mail é obrigatório.'),
    password: z
      .string('A senha é obrigatória. ')
      .min(
        PASSWORD_MIN_LENGTH,
        `A senha deve ter pelo menos ${PASSWORD_MIN_LENGTH} caracteres.`,
      ),
    confirmPassword: z
      .string('A senha é obrigatória. ')
      .min(
        PASSWORD_MIN_LENGTH,
        `A senha deve ter pelo menos ${PASSWORD_MIN_LENGTH} caracteres.`,
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem.',
    path: ['confirmPassword'],
  })

export type SignUpInput = z.infer<typeof signUpSchema>

export function useSignUp() {
  const [serverError, setServerError] = useState<string | null>(null)
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false)

  const form = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  function togglePasswordVisibility() {
    setPasswordVisibility((v) => !v)
  }

  function toggleConfirmPasswordVisibility() {
    setConfirmPasswordVisibility((v) => !v)
  }

  async function onSubmit(values: SignUpInput) {
    const result = await signUpAction(values)

    if (!result.success) {
      setServerError(result.message)
    }
  }

  return {
    serverError,
    form,
    passwordVisibility,
    confirmPasswordVisibility,
    isSubmitting,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    onSubmit,
  }
}
