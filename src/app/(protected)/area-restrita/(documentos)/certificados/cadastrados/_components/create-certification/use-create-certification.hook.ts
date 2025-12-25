import { zodResolver } from '@hookform/resolvers/zod'
import { createCertification } from '@http/documents/certifications/create-certification'
import { useQueryClient } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const registerCertificationSchema = z.object({
  userId: z.uuid('id do usuário inválido'),
  title: z.string().min(1, 'Título é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  certification: z
    .any()
    .refine(
      (file) => file instanceof File && file.size > 0,
      'Arquivo do certificado é obrigatório',
    ),
})

export type RegisterCertificationInput = z.infer<
  typeof registerCertificationSchema
>

interface IUseRegisterCertificationProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 4

export function useCreateCertification({
  setIsOpen,
}: IUseRegisterCertificationProps) {
  const queryClient = useQueryClient()

  const [serverError, setServerError] = useState<string | null>(null)

  const [{ filtro: filter, orderBy, page, limit, userId }] = useQueryStates({
    userId: parseAsString.withDefault(''),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
  })

  const form = useForm<RegisterCertificationInput>({
    resolver: zodResolver(registerCertificationSchema),
    values: {
      description: '',
      title: '',
      userId: '',
      certification: undefined,
    },
  })

  const submit = form.handleSubmit(
    async (values: RegisterCertificationInput) => {
      try {
        await createCertification(values)

        queryClient.invalidateQueries({
          queryKey: [
            'users',
            'certifications',
            filter,
            orderBy,
            page,
            limit,
            userId,
          ],
        })

        toast.success('Certificado cadastrado com sucesso!')

        setIsOpen(false)

        form.reset()
      } catch (err) {
        if (err instanceof HTTPError) {
          const errorBody = await err.response.json()

          setServerError(errorBody.message)
        }
      }
    },
  )

  return {
    form,
    serverError,
    submit,
  }
}
