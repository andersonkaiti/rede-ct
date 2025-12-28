import { zodResolver } from '@hookform/resolvers/zod'
import { createMuseum } from '@http/museums/create-museum'
import { validateImageFile } from '@utils/validate-file'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const createMuseumSchema = z.object({
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

type CreateMuseumInput = z.infer<typeof createMuseumSchema>

const INITIAL_VALUES: CreateMuseumInput = {
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

export function useCreateMuseum() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<CreateMuseumInput>({
    resolver: zodResolver(createMuseumSchema),
    defaultValues: INITIAL_VALUES,
  })

  const submit = form.handleSubmit(async (values) => {
    try {
      await createMuseum(values)

      toast.success('Museu cadastrado com sucesso!')

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
  }
}
