import { zodResolver } from '@hookform/resolvers/zod'
import { getCertificationById } from '@http/documents/certifications/get-certification-by-id'
import { updateCertification } from '@http/documents/certifications/update-certification'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import {
  FILE_VALIDATION_CONSTANTS,
  validatePdfFile,
} from '@utils/validate-file'
import { HTTPError } from 'ky'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const updateCertificationSchema = z.object({
  id: z.uuid(),
  title: z.string().min(1, 'Título é obrigatório.'),
  description: z.string().min(1, 'Descrição é obrigatória.'),
  certification: z
    .any()
    .refine((file) =>
      validatePdfFile({
        file,
        maxSize: FILE_VALIDATION_CONSTANTS.MAX_PDF_SIZE_BYTES,
        optional: true,
      }),
    )
    .optional(),
})

export type UpdateCertificationInput = z.infer<typeof updateCertificationSchema>

interface IUseUpdateCertificationProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 7

export function useUpdateCertification({
  setIsOpen,
}: IUseUpdateCertificationProps) {
  const queryClient = useQueryClient()

  const [serverError, setServerError] = useState<string | null>(null)

  const [{ certificationId, filtro: filter, orderBy, page, limit, userId }] =
    useQueryStates({
      certificationId: parseAsString.withDefault(''),
      userId: parseAsString.withDefault(''),
      page: parseAsString.withDefault(String(DEFAULT_PAGE)),
      limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
      filtro: parseAsString.withDefault(''),
      orderBy: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
    })

  const { data: certification } = useQuery({
    queryKey: ['certification', certificationId],
    queryFn: () => getCertificationById(certificationId),
    enabled: !!certificationId,
  })

  const form = useForm<UpdateCertificationInput>({
    resolver: zodResolver(updateCertificationSchema),
    values: {
      id: certification?.id ?? '',
      title: certification?.title ?? '',
      description: certification?.description ?? '',
      certification: undefined,
    },
  })

  const submit = form.handleSubmit(async (values: UpdateCertificationInput) => {
    try {
      await updateCertification(values)

      queryClient.invalidateQueries({
        queryKey: [
          'user',
          'certifications',
          filter,
          orderBy,
          page,
          limit,
          userId,
        ],
      })

      toast.success('Certificado atualizado com sucesso!')

      setIsOpen(false)

      form.reset()
    } catch (err) {
      if (err instanceof HTTPError) {
        const errorBody = await err.response.json()
        setServerError(errorBody.message)
      }
    }
  })

  return {
    certification,
    form,
    serverError,
    submit,
  }
}
