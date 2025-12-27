'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { createCheckingAccount } from '@http/financial/checking-account/create-checking-account'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const createAccountSchema = z.object({
  type: z.enum(['EXCLUSIVE_REDECT_USE', 'EVENTS', 'COLLOQUIUM']),
  balance: z.number().positive('O saldo deve ser positivo'),
})

type CreateAccountFormData = z.infer<typeof createAccountSchema>

export function useCreateAccount() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<CreateAccountFormData>({
    resolver: zodResolver(createAccountSchema),
  })

  const submit = form.handleSubmit(async (values: CreateAccountFormData) => {
    try {
      await createCheckingAccount({
        type: values.type,
        balance: values.balance,
      })

      toast.success('Conta corrente cadastrada com sucesso!')

      router.replace('/area-restrita/financeiro/conta-corrente')
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
