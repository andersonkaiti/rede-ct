import { zodResolver } from '@hookform/resolvers/zod'
import { getMuseumById } from '@http/museums/get-museum-by-id'
import { updateMuseum } from '@http/museums/update-museum'
import { useSuspenseQuery } from '@tanstack/react-query'
import { validateImageFile } from '@utils/validate-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const updateMuseumSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório.'),
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
  description: z.string().optional(),
  website: z.union([z.url('URL inválida'), z.literal('')]).optional(),
  email: z.union([z.email('E-mail inválido'), z.literal('')]).optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  functioning: z.string().optional(),
  logo: z.any().refine((file) =>
    validateImageFile({
      file,
      optional: true,
    }),
  ),
})

type UpdateMuseumInput = z.infer<typeof updateMuseumSchema>

const INITIAL_VALUES: UpdateMuseumInput = {
  name: '',
  city: '',
  state: '',
  country: '',
  description: '',
  website: '',
  email: '',
  phone: '',
  address: '',
  functioning: '',
  logo: undefined,
}

export function useUpdateMuseum() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()

  const [serverError, setServerError] = useState<string | null>(null)

  const { data: museum } = useSuspenseQuery({
    queryKey: ['museum', id],
    queryFn: () => getMuseumById(id),
  })

  const form = useForm<UpdateMuseumInput>({
    resolver: zodResolver(updateMuseumSchema),
    defaultValues: INITIAL_VALUES,
  })

  useEffect(() => {
    if (museum) {
      form.reset({
        name: museum.name,
        city: museum.city || '',
        state: museum.state || '',
        country: museum.country || '',
        description: museum.description || '',
        website: museum.website || '',
        email: museum.email || '',
        phone: museum.phone || '',
        address: museum.address || '',
        functioning: museum.functioning || '',
        logo: undefined,
      })
    }
  }, [museum, form])

  const submit = form.handleSubmit(async (values) => {
    try {
      await updateMuseum({
        id,
        ...values,
      })

      toast.success('Museu atualizado com sucesso!')

      router.push('/area-restrita/portfolio/museus')
    } catch (err) {
      if (err instanceof HTTPError) {
        const errorBody = await err.response.json()
        setServerError(errorBody.message)
      }
    }
  })

  return {
    form,
    serverError,
    submit,
    museum,
  }
}
