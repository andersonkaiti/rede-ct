const MAX_IMAGE_SIZE_MB = 5
const MAX_PDF_SIZE_MB = 10
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE

const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * MEGABYTE
const MAX_PDF_SIZE_BYTES = MAX_PDF_SIZE_MB * MEGABYTE

const ALLOWED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
] as const

const ALLOWED_PDF_TYPES = ['application/pdf'] as const

interface IValidateFileParams {
  file: unknown
  maxSize?: number
  allowedTypes?: readonly string[]
  optional?: boolean
}

export function validateImageFile({
  file,
  maxSize = MAX_IMAGE_SIZE_BYTES,
  allowedTypes = ALLOWED_IMAGE_TYPES,
  optional = false,
}: IValidateFileParams): boolean {
  if (optional && !file) {
    return true
  }

  if (!optional && !file) {
    return false
  }

  if (typeof file === 'object' && file !== null && 'size' in file) {
    const fileObj = file as { type?: string; mimetype?: string; size: number }
    const mimeType = fileObj.type || fileObj.mimetype

    if (!mimeType || typeof mimeType !== 'string') {
      return false
    }

    if (typeof fileObj.size !== 'number') {
      return false
    }

    return (
      (allowedTypes as readonly string[]).includes(mimeType) &&
      fileObj.size <= maxSize
    )
  }

  return false
}

export function validatePdfFile({
  file,
  maxSize = MAX_PDF_SIZE_BYTES,
  allowedTypes = ALLOWED_PDF_TYPES,
  optional = false,
}: IValidateFileParams): boolean {
  if (optional && !file) {
    return true
  }

  if (!optional && !file) {
    return false
  }

  if (typeof file === 'object' && file !== null && 'size' in file) {
    const fileObj = file as { type?: string; mimetype?: string; size: number }
    const mimeType = fileObj.type || fileObj.mimetype

    if (!mimeType || typeof mimeType !== 'string') {
      return false
    }

    if (typeof fileObj.size !== 'number') {
      return false
    }

    return (
      (allowedTypes as readonly string[]).includes(mimeType) &&
      fileObj.size <= maxSize
    )
  }

  return false
}

export const FILE_VALIDATION_CONSTANTS = {
  MAX_IMAGE_SIZE_MB,
  MAX_PDF_SIZE_MB,
  MAX_IMAGE_SIZE_BYTES,
  MAX_PDF_SIZE_BYTES,
  ALLOWED_IMAGE_TYPES,
  ALLOWED_PDF_TYPES,
} as const
