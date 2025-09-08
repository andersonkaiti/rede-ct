'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import { type FileWithPreview, useFileUpload } from '@hooks/use-file-upload'
import { cn } from '@utils/cn'
import { TriangleAlert, User, X } from 'lucide-react'
import Image from 'next/image'

const BYTES_PER_KB = 1024
const KB_PER_MB = 1024
const MAX_AVATAR_SIZE_MB = 2
const DEFAULT_MAX_SIZE = MAX_AVATAR_SIZE_MB * KB_PER_MB * BYTES_PER_KB
const AVATAR_DISPLAY_SIZE = 96

interface AvatarUploadProps {
  maxSize?: number
  className?: string
  onFileChange?: (file: FileWithPreview | null) => void
  defaultAvatar?: string | null
}

export default function AvatarUpload({
  maxSize = DEFAULT_MAX_SIZE,
  className,
  onFileChange,
  defaultAvatar,
}: AvatarUploadProps) {
  const [
    { files, isDragging, errors },
    {
      removeFile,
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      getInputProps,
    },
  ] = useFileUpload({
    maxFiles: 1,
    maxSize,
    accept: 'image/*',
    multiple: false,
    onFilesChange: (uploadedFiles) => {
      onFileChange?.(uploadedFiles[0] || null)
    },
  })

  const currentFile = files[0]
  const previewUrl = currentFile?.preview || defaultAvatar

  const handleRemove = () => {
    if (currentFile) {
      removeFile(currentFile.id)
    }
  }

  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      {/* Error Messages */}
      {errors.length > 0 && (
        <Alert variant="destructive">
          <TriangleAlert className="size-4" />
          <AlertDescription>
            {errors.map((error, index) => (
              <p className="last:mb-0" key={index}>
                {error}
              </p>
            ))}
          </AlertDescription>
        </Alert>
      )}

      {/* Avatar Preview */}
      <div className="relative">
        <button
          aria-label="Upload avatar"
          className={cn(
            'group/avatar relative size-30 cursor-pointer overflow-hidden rounded-full border border-dashed transition-colors sm:size-60',
            isDragging
              ? 'border-primary bg-primary/5'
              : 'border-muted-foreground/25 hover:border-muted-foreground/20 hover:bg-accent/40',
            previewUrl && 'border-solid'
          )}
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          type="button"
        >
          <input {...getInputProps()} className="sr-only" name="avatarImage" />

          {previewUrl ? (
            <Image
              alt="Avatar"
              className="size-full object-cover"
              height={AVATAR_DISPLAY_SIZE}
              src={previewUrl}
              width={AVATAR_DISPLAY_SIZE}
            />
          ) : (
            <div className="flex size-full items-center justify-center">
              <User className="size-6 text-muted-foreground" />
            </div>
          )}
        </button>

        {/* Remove Button - only show when file is uploaded */}
        {currentFile && (
          <Button
            aria-label="Remove avatar"
            className="absolute end-0 top-0 size-6 rounded-full"
            onClick={handleRemove}
            size="icon"
            variant="outline"
          >
            <X className="size-3.5" />
          </Button>
        )}
      </div>
    </div>
  )
}
