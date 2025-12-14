import { zodResolver } from '@hookform/resolvers/zod'
import { createScientificJournal } from '@http/scientific-journals/create-scientific-journal'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const MAX_IMAGE_SIZE_MB = 5
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE

export const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * MEGABYTE

const createScientificJournalFormSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório.'),
  issn: z.string().min(1, 'ISSN é obrigatório.'),
  description: z.string().min(1, 'Descrição é obrigatória.'),
  journalUrl: z.url('URL da revista deve ser válida.'),
  directors: z.string().optional(),
  editorialBoard: z.string().optional(),
  logo: z
    .instanceof(File, {
      message: 'Logo é obrigatório.',
    })
    .refine(
      (file) => file.size <= MAX_IMAGE_SIZE_BYTES,
      `O logo deve ter no máximo ${MAX_IMAGE_SIZE_MB}MB.`,
    ),
})

type CreateScientificJournalFormData = z.infer<
  typeof createScientificJournalFormSchema
>

export function useCreateScientificJournal() {
  const router = useRouter()

  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<CreateScientificJournalFormData>({
    resolver: zodResolver(createScientificJournalFormSchema),
    defaultValues: {
      name: '',
      issn: '',
      description: '',
      journalUrl: '',
      directors: '',
      editorialBoard: '',
    },
  })

  const submit = form.handleSubmit(
    async (values: CreateScientificJournalFormData) => {
      try {
        await createScientificJournal(values)

        toast.success('Revista criada com sucesso!')

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
  }
}
