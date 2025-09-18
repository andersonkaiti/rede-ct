import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { IUser } from 'types/user'
import z from 'zod'
import { type UpdateUserActionResult, updateUserAction } from '../actions'

const MAX_AVATAR_SIZE_MB = 2
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE
const MAX_AVATAR_SIZE_BYTES = MAX_AVATAR_SIZE_MB * MEGABYTE

const ORCID_REGEX = /^\d{4}-\d{4}-\d{4}-\d{4}$/

const PHONE_REGEX = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/

export const userProfileSchema = z.object({
  name: z.string('Nome é obrigatório.').min(1, 'Nome é obrigatório.'),
  lattesUrl: z.string().optional(),
  orcid: z
    .string()
    .optional()
    .refine(
      (val) => !val || ORCID_REGEX.test(val),
      'ORCID inválido. Deve estar no formato 0000-0000-0000-0000'
    ),
  phone: z
    .string()
    .regex(
      PHONE_REGEX,
      'Telefone inválido. Deve estar no formato (99) 99999-9999'
    )
    .optional(),
  avatarImage: z
    .any()
    .refine(
      (value) => {
        if (value === undefined || value === null) {
          return true
        }

        if (typeof value !== 'object' || typeof value.size !== 'number') {
          return false
        }

        return value.size <= MAX_AVATAR_SIZE_BYTES
      },
      {
        message: `A imagem deve ter no máximo ${MAX_AVATAR_SIZE_MB}MB.`,
      }
    )
    .optional(),
})

export type UserProfileInput = z.infer<typeof userProfileSchema>

export function useUserProfile(user?: IUser) {
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<UserProfileInput>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      name: user?.name ?? '',
      lattesUrl: user?.lattesUrl ?? '',
      orcid: user?.orcid ?? '',
      phone: user?.phone ?? '',
      avatarImage: undefined,
    },
    mode: 'onChange',
  })

  async function onSubmit(values: UserProfileInput) {
    const result: UpdateUserActionResult = await updateUserAction({
      ...values,
      avatarImage: values.avatarImage ?? undefined,
    })

    if (result.success) {
      toast.success('Usuário atualizado com sucesso!')

      return
    }

    setServerError(result.message)
  }

  return {
    form,
    serverError,
    isSubmitting: form.formState.isSubmitting,
    onSubmit,
  }
}
