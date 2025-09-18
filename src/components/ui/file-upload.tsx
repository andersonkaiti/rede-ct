'use client'

import { useFileUpload } from '@hooks/use-file-upload'
import { AlertCircleIcon, ImageUpIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect } from 'react'

const BYTES_IN_KB = 1024
const KB_IN_MB = 1024

interface IFileUploadProps {
  maxSizeMB: number
  imageUrl?: string
  onChange?: (file: File | undefined) => void
}

export function FileUpload({
  maxSizeMB = 50,
  imageUrl,
  onChange,
}: IFileUploadProps) {
  const maxSize = maxSizeMB * BYTES_IN_KB * KB_IN_MB

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ] = useFileUpload({
    accept: 'image/*',
    maxSize,
  })

  const previewUrl = files[0]?.preview || imageUrl || null

  // Callback ref para sincronizar o arquivo com o input HTML
  const inputCallbackRef = useCallback(
    (inputElement: HTMLInputElement | null) => {
      if (inputElement && files[0]?.file) {
        const dataTransfer = new DataTransfer()
        dataTransfer.items.add(files[0].file as File)
        inputElement.files = dataTransfer.files
      } else if (inputElement && files.length === 0) {
        // Limpa o input quando não há arquivos
        inputElement.value = ''
      }
    },
    [files]
  )

  // Chama o onChange sempre que o arquivo mudar
  useEffect(() => {
    if (onChange) {
      if (files.length > 0 && files[0].file instanceof File) {
        onChange(files[0].file)
      } else if (files.length === 0) {
        onChange(undefined)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files, onChange])

  const handleRemoveFile = () => {
    if (files[0]?.id) {
      removeFile(files[0].id)
    }
  }

  // Pega as props do input e adiciona nossa callback ref
  const inputProps = getInputProps()
  const combinedRef = useCallback(
    (element: HTMLInputElement | null) => {
      // Chama a ref original do hook se existir
      if (typeof inputProps.ref === 'function') {
        inputProps.ref(element)
      } else if (inputProps.ref) {
        inputProps.ref.current = element
      }

      // Chama nossa callback ref
      inputCallbackRef(element)
    },
    [inputProps, inputCallbackRef]
  )

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <div
          className="relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-input border-dashed p-4 transition-colors hover:bg-accent/50 has-disabled:pointer-events-none has-[input:focus]:border-ring has-[img]:border-none has-disabled:opacity-50 has-[input:focus]:ring-[3px] has-[input:focus]:ring-ring/50 data-[dragging=true]:bg-accent/50"
          data-dragging={isDragging || undefined}
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          role="button"
        >
          <input
            {...inputProps}
            aria-label="Carregar imagem"
            className="sr-only"
            name="image"
            ref={combinedRef}
          />
          {previewUrl ? (
            <div className="absolute inset-0">
              <Image
                alt={files[0]?.file?.name || 'Imagem carregada'}
                className="size-full object-cover"
                fill
                src={previewUrl || '/placeholder.svg'}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
              <div
                aria-hidden="true"
                className="mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border bg-background"
              >
                <ImageUpIcon className="size-4 opacity-60" />
              </div>
              <p className="mb-1.5 font-medium text-sm">
                Arraste e solte a imagem aqui ou clique para selecionar
              </p>
              <p className="text-muted-foreground text-xs">
                Tamanho máximo: {maxSizeMB}MB
              </p>
            </div>
          )}
        </div>
        {previewUrl && (
          <div className="absolute top-4 right-4">
            <button
              aria-label="Remover imagem"
              className="z-50 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-none transition-[color,box-shadow] hover:bg-black/80 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
              onClick={handleRemoveFile}
              type="button"
            >
              <XIcon aria-hidden="true" className="size-4" />
            </button>
          </div>
        )}
      </div>

      {errors.length > 0 && (
        <div
          className="flex items-center gap-1 text-destructive text-xs"
          role="alert"
        >
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}
    </div>
  )
}
