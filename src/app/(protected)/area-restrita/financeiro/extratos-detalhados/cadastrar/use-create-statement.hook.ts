'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { createFinancialTransactionStatement } from '@http/financial/financial-transaction-statement/create-financial-transaction-statement'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const createStatementSchema = z.object({
  document: z
    .instanceof(File, { message: 'O documento é obrigatório' })
    .refine((file) => file.size <= 10 * 1024 * 1024, {
      message: 'O documento deve ter no máximo 10MB',
    })
    .refine((file) => file.type === 'application/pdf', {
      message: 'O documento deve ser um PDF',
    }),
})

type CreateStatementFormData = z.infer<typeof createStatementSchema>

export function useCreateStatement() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<CreateStatementFormData>({
    resolver: zodResolver(createStatementSchema),
  })

  const submit = form.handleSubmit(async (values: CreateStatementFormData) => {
    try {
      await createFinancialTransactionStatement({
        document: values.document,
      })

      toast.success('Extrato cadastrado com sucesso!')

      router.replace('/area-restrita/financeiro/extratos-detalhados')
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
