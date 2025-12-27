'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { getFinancialTransactionStatementById } from '@http/financial/financial-transaction-statement/get-financial-transaction-statement-by-id'
import { updateFinancialTransactionStatement } from '@http/financial/financial-transaction-statement/update-financial-transaction-statement'
import { useSuspenseQuery } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const updateStatementSchema = z.object({
  document: z
    .instanceof(File, { message: 'O documento é obrigatório' })
    .refine((file) => file.size <= 10 * 1024 * 1024, {
      message: 'O documento deve ter no máximo 10MB',
    })
    .refine((file) => file.type === 'application/pdf', {
      message: 'O documento deve ser um PDF',
    })
    .optional(),
})

type UpdateStatementFormData = z.infer<typeof updateStatementSchema>

export function useUpdateStatement() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()

  const [serverError, setServerError] = useState<string | null>(null)

  const { data: statement } = useSuspenseQuery({
    queryKey: ['financial-transaction-statement', id],
    queryFn: async () => await getFinancialTransactionStatementById(id),
  })

  const form = useForm<UpdateStatementFormData>({
    resolver: zodResolver(updateStatementSchema),
  })

  useEffect(() => {
    if (statement) {
      form.reset({
        document: undefined,
      })
    }
  }, [statement, form])

  const submit = form.handleSubmit(async (values) => {
    try {
      await updateFinancialTransactionStatement({
        id,
        document: values.document,
      })

      toast.success('Extrato atualizado com sucesso!')

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
    statement: statement ?? {
      id: '',
      documentUrl: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  }
}
