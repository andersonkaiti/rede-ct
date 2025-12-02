import { zodResolver } from '@hookform/resolvers/zod'
import { getScientificJournalById } from '@http/scientific-journals/get-scientific-journal-by-id'
import { updateScientificJournal } from '@http/scientific-journals/update-scientific-journal'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
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

  const { data: journal, isLoading: isJournalLoading } = useQuery({
    queryKey: ['scientific-journal', id],
    queryFn: () => getScientificJournalById(id),
    enabled: !!id,
  })

  const form = useForm<UpdateScientificJournalFormData>({
    resolver: zodResolver(updateScientificJournalFormSchema),
    defaultValues: {
      name: '',
      issn: '',
      description: '',
      journalUrl: '',
      directors: '',
      editorialBoard: '',
    },
  })

  useEffect(() => {
    if (journal) {
      form.reset({
        name: journal.name,
        issn: journal.issn,
        description: journal.description,
        journalUrl: journal.journalUrl,
        directors: journal.directors || '',
        editorialBoard: journal.editorialBoard || '',
      })
    }
  }, [journal, form])

  const { mutateAsync: updateJournal, isPending: isSubmitting } = useMutation({
    mutationFn: updateScientificJournal,
    onSuccess: () => {
      toast.success('Revista atualizada com sucesso!')
      router.push('/area-restrita/revistas')
    },
    onError: (error: Error) => {
      setServerError(error.message)
    },
  })

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setServerError(null)

    const isValid = await form.trigger()

    if (!isValid) return

    const data = form.getValues()

    await updateJournal({
      id,
      ...data,
    })
  }

  return {
    form,
    isSubmitting,
    submit,
    serverError,
    isJournalLoading,
    journal,
  }
}
