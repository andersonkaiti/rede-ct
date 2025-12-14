import { zodResolver } from '@hookform/resolvers/zod'
import { getScientificJournalById } from '@http/scientific-journals/get-scientific-journal-by-id'
import { updateScientificJournal } from '@http/scientific-journals/update-scientific-journal'
import { useSuspenseQuery } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const MAX_IMAGE_SIZE_MB = 5
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE

export const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * MEGABYTE

const updateScientificJournalFormSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório.').optional(),
  issn: z.string().min(1, 'ISSN é obrigatório.').optional(),
  description: z.string().min(1, 'Descrição é obrigatória.').optional(),
  journalUrl: z.string().url('URL da revista deve ser válida.').optional(),
  directors: z.string().optional(),
  editorialBoard: z.string().optional(),
  logo: z
    .instanceof(File, {
      message: 'Logo deve ser um arquivo.',
    })
    .refine(
      (file) => file.size <= MAX_IMAGE_SIZE_BYTES,
      `O logo deve ter no máximo ${MAX_IMAGE_SIZE_MB}MB.`,
    )
    .optional(),
})

type UpdateScientificJournalFormData = z.infer<
  typeof updateScientificJournalFormSchema
>

export function useUpdateScientificJournal() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const [serverError, setServerError] = useState<string | null>(null)

  const { data: journal } = useSuspenseQuery({
    queryKey: ['scientific-journal', id],
    queryFn: () => getScientificJournalById(id),
  })

  const form = useForm<UpdateScientificJournalFormData>({
    resolver: zodResolver(updateScientificJournalFormSchema),
    values: {
      name: journal?.name ?? '',
      issn: journal?.issn ?? '',
      description: journal?.description ?? '',
      journalUrl: journal?.journalUrl ?? '',
      directors: journal?.directors ?? '',
      editorialBoard: journal?.editorialBoard ?? '',
    },
  })

  const submit = form.handleSubmit(
    async (values: UpdateScientificJournalFormData) => {
      try {
        await updateScientificJournal({
          id,
          ...values,
        })

        toast.success('Revista atualizada com sucesso!')
        router.push('/area-restrita/revistas')
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
    submit,
    serverError,
    journal,
  }
}
