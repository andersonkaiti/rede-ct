import { redirect } from 'next/navigation'
import { useActionState, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { type IActionState, updateNewsAction } from '../actions'

interface IUseUpdateNewsProps {
  id: string
  image_url?: string
}

export function useUpdateNews({ id, image_url }: IUseUpdateNewsProps) {
  const [{ errors, payload, success }, formAction, isLoading] = useActionState<
    IActionState,
    FormData
  >(updateNewsAction.bind(null, id, image_url), {} as IActionState)

  const [preview, setPreview] = useState<string | null>(null)

  function handleImage(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]

    if (file) {
      const imageUrl = URL.createObjectURL(file)

      setPreview(imageUrl)
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
