import { zodResolver } from '@hookform/resolvers/zod'
import { updateUser } from '@http/auth/update-user'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { IUser } from 'types/user'
import z from 'zod'
import { MAX_AVATAR_SIZE_MB, ORCID_REGEX, PHONE_REGEX } from '../_constants/zod'

export const userProfileSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
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
      (value) =>
        validateImageFile({
          value,
        }),
      `A imagem deve ser um arquivo PNG, JPG ou WEBP com no máximo ${MAX_AVATAR_SIZE_MB}MB.`
    )
    .optional(),
})

export type UserProfileInput = z.infer<typeof userProfileSchema>

const getInitialValues = (user?: IUser): UserProfileInput => ({
  name: user?.name ?? '',
  lattesUrl: user?.lattesUrl ?? '',
  orcid: user?.orcid ?? '',
  phone: user?.phone ?? '',
  avatarImage: undefined,
})

export function useUserProfile(user?: IUser) {
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<UserProfileInput>({
    resolver: zodResolver(userProfileSchema),
    values: getInitialValues(user),
  })

  const submit = form.handleSubmit(async (values: UserProfileInput) => {
    try {
      await updateUser(values)

      toast.success('Usuário atualizado com sucesso!')
    } catch (err) {
      if (err instanceof HTTPError) {
        const errorBody = await err.response.json()

        setServerError(
          errorBody?.message || 'Ocorreu um erro ao atualizar o usuário.'
        )
      }
    }
  })

  return {
    form,
    serverError,
    submit,
  }
}
