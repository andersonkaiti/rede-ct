import { zodResolver } from '@hookform/resolvers/zod'
import { createLaw } from '@http/laws/create-law'
import { useQueryClient } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const createLawFormSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  link: z.url('Link deve ser uma URL válida'),
  country: z.string().min(1, 'País é obrigatório'),
})

export type CreateLawFormSchema = z.infer<typeof createLawFormSchema>

export function useCreateLaw(setIsOpen: (isOpen: boolean) => void) {
  const queryClient = useQueryClient()

  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<CreateLawFormSchema>({
    resolver: zodResolver(createLawFormSchema),
    defaultValues: {
      title: '',
      link: '',
      country: '',
    },
  })

  const submit = form.handleSubmit(async (values: CreateLawFormSchema) => {
    try {
      await createLaw(values)

      toast.success('Lei criada com sucesso!')

      queryClient.invalidateQueries({
        queryKey: ['laws'],
      })

      form.reset()

      setIsOpen(false)
    } catch (err) {
      if (err instanceof HTTPError) {
        const errorBody = await err.response.json()
        setServerError(errorBody.message)
      }
    }
  })

  return {
    form,
    submit,
    serverError,
  }
}
