const MAX_PHOTO_SIZE_MB = 2
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE
const MAX_PHOTO_SIZE_BYTES = MAX_PHOTO_SIZE_MB * MEGABYTE

const ALLOWED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
] as const

interface IValidateImageFileParams {
  value: unknown
  maxSize?: number
  allowedImageTypes?: readonly string[]
  optional?: boolean
}

export function validateImageFile({
  value,
  allowedImageTypes = ALLOWED_IMAGE_TYPES,
  maxSize = MAX_PHOTO_SIZE_BYTES,
  optional = true,
}: IValidateImageFileParams): boolean {
  if (optional && (value === undefined || value === null)) {
    return true
  }

  if (!optional && (value === undefined || value === null)) {
    return false
  }

  if (value && typeof value === 'object' && 'file' in value) {
    const file = (value as { file: File }).file

    if (file instanceof File) {
      return file.size <= maxSize && allowedImageTypes.includes(file.type)
    }

    return false
  }

  if (value instanceof File) {
    return value.size <= maxSize && allowedImageTypes.includes(value.type)
  }

  return false
}
