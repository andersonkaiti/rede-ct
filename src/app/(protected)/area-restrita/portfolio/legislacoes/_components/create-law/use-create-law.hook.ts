import { zodResolver } from '@hookform/resolvers/zod'
import { createLaw } from '@http/laws/create-law'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const createLawFormSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  link: z.string().url('Link deve ser uma URL válida'),
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

  const { mutateAsync: createLawFn, isPending: isSubmitting } = useMutation({
    mutationFn: createLaw,
    onSuccess: () => {
      toast.success('Lei criada com sucesso!')
      queryClient.invalidateQueries({
        queryKey: ['laws'],
      })
      form.reset()
      setIsOpen(false)
    },
    onError: (error) => {
      setServerError(error.message)
    },
  })

  const submit = form.handleSubmit(async (data) => {
    setServerError(null)
    await createLawFn(data)
  })

  return {
    form,
    isSubmitting,
    submit,
    serverError,
  }
}
