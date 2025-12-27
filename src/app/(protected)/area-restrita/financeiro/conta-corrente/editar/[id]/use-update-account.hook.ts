'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { getCheckingAccountById } from '@http/financial/checking-account/get-checking-account-by-id'
import { updateCheckingAccount } from '@http/financial/checking-account/update-checking-account'
import { useSuspenseQuery } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const updateAccountSchema = z.object({
  type: z.enum(['EXCLUSIVE_REDECT_USE', 'EVENTS', 'COLLOQUIUM']).optional(),
  balance: z.number().positive('O saldo deve ser positivo').optional(),
})

type UpdateAccountFormData = z.infer<typeof updateAccountSchema>

export function useUpdateAccount() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()

  const [serverError, setServerError] = useState<string | null>(null)

  const { data: account } = useSuspenseQuery({
    queryKey: ['checking-account', id],
    queryFn: async () => await getCheckingAccountById(id),
  })

  const form = useForm<UpdateAccountFormData>({
    resolver: zodResolver(updateAccountSchema),
    defaultValues: {
      type: account.type,
      balance: account.balance,
    },
  })

  const submit = form.handleSubmit(async (values: UpdateAccountFormData) => {
    try {
      await updateCheckingAccount({
        id,
        type: values.type,
        balance: values.balance,
      })

      toast.success('Conta corrente atualizada com sucesso!')

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
    account: account ?? {
      id: '',
      type: 'EXCLUSIVE_REDECT_USE' as const,
      balance: 0,
      balanceInCents: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  }
}
