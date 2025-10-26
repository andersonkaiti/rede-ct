'use client'

import { Button } from '@components/ui/button'
import { formatBytes, useAvatarUploader } from '@hooks/use-avatar-uploader'
import { cn } from '@utils/cn'
import { User, X } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'

const BYTES_PER_KB = 1024
const KB_PER_MB = 1024
const DEFAULT_MAX_AVATAR_SIZE_MB = 2
const DEFAULT_MAX_AVATAR_SIZE =
  DEFAULT_MAX_AVATAR_SIZE_MB * KB_PER_MB * BYTES_PER_KB

interface AvatarUploaderProps {
  maxSize?: number
  className?: string
  onFileChange?: (file: File | null) => void
  defaultAvatar?: string
  name: string
}

export function AvatarUploader({
  maxSize = DEFAULT_MAX_AVATAR_SIZE,
  className,
  onFileChange,
  defaultAvatar,
  name,
}: AvatarUploaderProps) {
  const [
    { files, isDragging },
    {
      removeFile,
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      getInputProps,
      handleFileChange,
    },
  ] = useAvatarUploader({
    maxFiles: 1,
    maxSize,
    accept: 'image/*',
    multiple: false,
  })

  useEffect(() => {
    if (files.length > 0) {
      const currentFile = files[0]
      const file = currentFile.file instanceof File ? currentFile.file : null
      onFileChange?.(file)
    } else {
      onFileChange?.(null)
    }
  }, [files, onFileChange])

  const currentFile = files[0]
  const previewUrl = currentFile?.preview || defaultAvatar

  const handleRemove = React.useCallback(() => {
    if (currentFile) {
      removeFile(currentFile.id)
    }
  }, [currentFile, removeFile])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      openFileDialog()
    }
  }

  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      <div className="relative">
        <button
          aria-label="Fazer upload do avatar"
          className={cn(
            'group/avatar relative size-50 cursor-pointer overflow-hidden rounded-full border border-dashed transition-colors',
            isDragging
              ? 'border-primary bg-primary/5'
              : 'border-muted-foreground/25 hover:border-muted-foreground/20',
            previewUrl && 'border-solid'
          )}
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onKeyDown={handleKeyDown}
          type="button"
        >
          <input
            {...getInputProps()}
            className="sr-only"
            name={name}
            onChange={handleFileChange}
          />

          {previewUrl ? (
            <div className="inset-0 size-30">
              <Image
                alt="Avatar"
                className="size-full object-cover"
                draggable={false}
                fill
                src={previewUrl}
              />
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <User className="size-6 text-muted-foreground" />
            </div>
          )}
        </button>

        {currentFile && (
          <Button
            aria-label="Remover avatar"
            className="absolute end-0 top-0 size-6 rounded-full"
            onClick={handleRemove}
            size="icon"
            tabIndex={0}
            variant="outline"
          >
            <X className="size-3.5" />
          </Button>
        )}
      </div>

      <div className="space-y-0.5 text-center">
        <p className="font-medium text-sm">
          {currentFile ? 'Avatar enviado' : 'Enviar avatar'}
        </p>
        <p className="text-muted-foreground text-xs">
          PNG, JPG até {formatBytes(maxSize)}
        </p>
      </div>
    </div>
  )
}
