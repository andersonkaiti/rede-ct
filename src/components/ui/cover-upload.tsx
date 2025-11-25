'use client'

import { Alert, AlertDescription, AlertTitle } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import { type FileWithPreview, useCoverUpload } from '@hooks/use-cover-upload'
import { cn } from '@utils/cn'
import {
  CloudUpload,
  ImageIcon,
  Sparkles,
  TriangleAlert,
  Upload,
  XIcon,
} from 'lucide-react'
import Image from 'next/image'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'

const BYTES_IN_KILOBYTE = 1024
const MB_IN_BYTES = BYTES_IN_KILOBYTE * BYTES_IN_KILOBYTE
const DEFAULT_MAX_SIZE_MB = 5
const DEFAULT_MAX_SIZE = DEFAULT_MAX_SIZE_MB * MB_IN_BYTES
const UPLOAD_PROGRESS_COMPLETE = 100
const UPLOAD_PROGESS_INCREMENT_MIN = 5
const UPLOAD_PROGESS_INCREMENT_MAX = 15
const UPLOAD_PROGESS_INTERVAL = 200
const IMAGE_CIRCLE_RADIUS = 28
const IMAGE_CIRCLE_SIZE = 64
const UPLOAD_FAILURE_CHANCE = 0.1
const IMAGE_HEIGHT_MULTIPLIER = 9
const IMAGE_WIDTH_MULTIPLIER = 21
const TWO_PI = 2 * Math.PI

interface CoverUploadProps {
  maxSize?: number
  accept?: string
  className?: string
  onImageChange?: (file: File | null) => void
  defaultImage?: string | null
}

export function CoverUpload({
  maxSize = DEFAULT_MAX_SIZE,
  accept = 'image/*',
  className,
  onImageChange,
  defaultImage = null,
}: CoverUploadProps) {
  const [coverImage, setCoverImage] = useState<FileWithPreview | null>(null)
  const [initialized, setInitialized] = useState(false)

  const [imageLoading, setImageLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const pendingFileToNotify = useRef<File | null>(null)
  const onImageChangeRef = useRef(onImageChange)
  const lastNotifiedImageId = useRef<string | null>(null)

  useEffect(() => {
    onImageChangeRef.current = onImageChange
  }, [onImageChange])

  useEffect(() => {
    if (!(initialized || coverImage) && defaultImage) {
      setCoverImage({
        file: null,
        id: `default-${Date.now()}`,
        preview: defaultImage,
      })
      setImageLoading(false)
      setInitialized(true)
    }
  }, [defaultImage, initialized, coverImage])

  const [
    { isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      getInputProps,
    },
  ] = useCoverUpload({
    maxFiles: 1,
    maxSize,
    accept,
    multiple: false,
    onFilesChange: (files) => {
      if (files.length > 0) {
        setImageLoading(true)
        setIsUploading(true)
        setUploadProgress(0)
        setUploadError(null)
        setCoverImage(files[0])
        const file = files[0].file
        if (file instanceof File) {
          pendingFileToNotify.current = file
        }
        simulateUpload()
      }
    },
  })

  useEffect(() => {
    if (
      coverImage &&
      coverImage.id !== lastNotifiedImageId.current &&
      pendingFileToNotify.current !== null
    ) {
      const file = pendingFileToNotify.current
      pendingFileToNotify.current = null
      lastNotifiedImageId.current = coverImage.id
      onImageChangeRef.current?.(file)
    }
  }, [coverImage])

  const simulateUpload = () => {
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= UPLOAD_PROGRESS_COMPLETE) {
          clearInterval(interval)
          setIsUploading(false)
          if (Math.random() < UPLOAD_FAILURE_CHANCE) {
            setUploadError('Falha ao enviar imagem. Tente novamente.')
            return 0
          }
          return UPLOAD_PROGRESS_COMPLETE
        }
        const increment =
          Math.random() *
            (UPLOAD_PROGESS_INCREMENT_MAX - UPLOAD_PROGESS_INCREMENT_MIN) +
          UPLOAD_PROGESS_INCREMENT_MIN

        return Math.min(prev + increment, UPLOAD_PROGRESS_COMPLETE)
      })
    }, UPLOAD_PROGESS_INTERVAL)
  }

  const removeCoverImage = () => {
    setCoverImage(null)
    setImageLoading(false)
    setIsUploading(false)
    setUploadProgress(0)
    setUploadError(null)
    lastNotifiedImageId.current = null
    queueMicrotask(() => {
      onImageChangeRef.current?.(null)
    })
  }

  const retryUpload = () => {
    if (coverImage) {
      setUploadError(null)
      setIsUploading(true)
      setUploadProgress(0)
      simulateUpload()
    }
  }

  const hasImage = Boolean(coverImage?.preview)
  const containerClass = (() => {
    const base =
      'w-full group relative flex h-80 flex-col justify-center overflow-hidden rounded-xl border border-border transition-all duration-200'
    if (isDragging) {
      return cn(base, 'border-primary border-dashed bg-primary/5')
    }
    if (hasImage) {
      return cn(base, 'border-border bg-background hover:border-primary/50')
    }
    return cn(
      base,
      'border-muted-foreground/25 border-dashed bg-background hover:border-primary hover:bg-primary/5',
    )
  })()
  const PERCENT_MAX = 100

  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openFileDialog()
    }
  }

  return (
    <div className={cn('w-full space-y-4', className)}>
      <button
        aria-label="Enviar imagem de capa"
        className={containerClass}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onKeyDown={handleKeyDown}
        type="button"
      >
        <input {...getInputProps()} className="sr-only" />

        {hasImage ? (
          <div className="relative h-full w-full">
            {imageLoading && (
              <div className="absolute inset-0 flex animate-pulse items-center justify-center bg-muted">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <ImageIcon className="size-5" />
                  <span className="text-sm">Carregando imagem...</span>
                </div>
              </div>
            )}

            <picture className="block size-full">
              <Image
                alt="Capa"
                className={cn(
                  'h-full w-full object-cover transition-opacity duration-300',
                  imageLoading ? 'opacity-0' : 'opacity-100',
                )}
                height={IMAGE_CIRCLE_SIZE * IMAGE_HEIGHT_MULTIPLIER}
                onError={() => setImageLoading(false)}
                onLoad={() => setImageLoading(false)}
                src={coverImage?.preview || ''}
                style={{
                  aspectRatio: '21/9',
                }}
                width={IMAGE_CIRCLE_SIZE * IMAGE_WIDTH_MULTIPLIER}
              />
            </picture>

            <div className="absolute inset-0 bg-black/0 transition-all duration-200 group-hover:bg-black/40" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <div className="flex gap-2">
                <Button
                  asChild
                  className="bg-white/90 text-gray-900 hover:bg-white"
                  onClick={openFileDialog}
                  size="sm"
                  variant="secondary"
                >
                  {/* biome-ignore lint: cannot render a <button> inside another <button> */}
                  <span
                    className="inline-flex items-center gap-2"
                    role="button"
                    tabIndex={0}
                  >
                    <Upload />
                    Trocar imagem
                  </span>
                </Button>
                <Button
                  asChild
                  onClick={removeCoverImage}
                  size="sm"
                  variant="outline"
                >
                  {/* biome-ignore lint: cannot render a <button> inside another <button> */}
                  <span
                    className="inline-flex items-center gap-2"
                    role="button"
                    tabIndex={0}
                  >
                    <XIcon />
                    Remover
                  </span>
                </Button>
              </div>
            </div>

            {isUploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="relative">
                  <svg
                    aria-label="Enviando"
                    className="-rotate-90 size-16"
                    viewBox={`0 0 ${IMAGE_CIRCLE_SIZE} ${IMAGE_CIRCLE_SIZE}`}
                  >
                    <title>Enviando imagem</title>
                    <circle
                      className="text-white/20"
                      cx={IMAGE_CIRCLE_SIZE / 2}
                      cy={IMAGE_CIRCLE_SIZE / 2}
                      fill="none"
                      r={IMAGE_CIRCLE_RADIUS}
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <circle
                      className="text-white transition-all duration-300"
                      cx={IMAGE_CIRCLE_SIZE / 2}
                      cy={IMAGE_CIRCLE_SIZE / 2}
                      fill="none"
                      r={IMAGE_CIRCLE_RADIUS}
                      stroke="currentColor"
                      strokeDasharray={`${TWO_PI * IMAGE_CIRCLE_RADIUS}`}
                      strokeDashoffset={`${TWO_PI * IMAGE_CIRCLE_RADIUS * (1 - uploadProgress / PERCENT_MAX)}`}
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-medium text-sm text-white">
                      {Math.round(uploadProgress)}%
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div
            className="flex aspect-[21/5] w-full cursor-pointer flex-col items-center justify-center gap-4 p-8 text-center"
            onClick={openFileDialog}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                openFileDialog()
              }
            }}
          >
            <div className="rounded-full bg-primary/10 p-4">
              <CloudUpload className="size-8 text-primary" />
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Enviar imagem de capa</h3>
              <p className="text-muted-foreground text-sm">
                Arraste e solte uma imagem aqui, ou clique para buscar
              </p>
              <p className="flex items-center justify-center gap-2 text-muted-foreground text-xs">
                <Sparkles className="size-3.5" />
                Tamanho máximo: {Math.round(maxSize / MB_IN_BYTES)} MB
              </p>
            </div>
          </div>
        )}
      </button>

      {errors.length > 0 && (
        <Alert className="mt-5" variant="destructive">
          <span className="inline-flex items-center pr-2 text-destructive">
            <TriangleAlert />
          </span>
          <div>
            <AlertTitle>Erro(s) de upload</AlertTitle>
            <AlertDescription>
              {errors.map((error, index) => (
                <p className="last:mb-0" key={index}>
                  {error}
                </p>
              ))}
            </AlertDescription>
          </div>
        </Alert>
      )}

      {uploadError && (
        <Alert className="mt-5" variant="destructive">
          <TriangleAlert />
          <div>
            <AlertTitle>Falha no envio</AlertTitle>
            <AlertDescription>
              <p>{uploadError}</p>
              <Button onClick={retryUpload} size="sm" variant="ghost">
                Tentar novamente
              </Button>
            </AlertDescription>
          </div>
        </Alert>
      )}
    </div>
  )
}
