import { redirect } from 'next/navigation'
import { useActionState, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { type IActionState, updateNewsAction } from '../actions'

interface IUseUpdateNewsProps {
  id: string
  imageUrl?: string
}

export function useUpdateNews({ id, imageUrl }: IUseUpdateNewsProps) {
  const [{ errors, payload, success }, formAction, isLoading] = useActionState<
    IActionState,
    FormData
  >(updateNewsAction.bind(null, id, imageUrl), {} as IActionState)

  const [preview, setPreview] = useState<string | null>(null)

  function handleImage(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]

    if (file) {
      const previewImageUrl = URL.createObjectURL(file)

      setPreview(previewImageUrl)
    }
  }

  useEffect(() => {
    if (success) {
      toast.success(success, {
        description: 'Notícia atualizada com sucesso!',
      })

      redirect('/area-restrita/noticias')
    }
  }, [success])

  return {
    errors,
    payload,
    formAction,
    isLoading,
    preview,
    handleImage,
  }
}
