'use client'

import { redirect } from 'next/navigation'
import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import { type IActionState, registerNewsAction } from '../actions'

export function useRegisterNews() {
  const [{ payload, errors, success }, formAction, isLoading] = useActionState<
    IActionState,
    FormData
  >(registerNewsAction, {} as IActionState)

  useEffect(() => {
    if (success) {
      toast.success(success, {
        description: 'Notícia cadastrada com sucesso',
      })

      redirect('/area-restrita/noticias')
    }
  }, [success])

  return {
    errors,
    payload,
    formAction,
    isLoading,
  }
}
