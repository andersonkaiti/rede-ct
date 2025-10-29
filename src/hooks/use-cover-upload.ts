'use client'

import type React from 'react'

import {
  type ChangeEvent,
  type DragEvent,
  type InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react'

export type FileMetadata = {
  name: string
  size: number
  type: string
  url: string
  id: string
}

export type FileWithPreview = {
  file: File | FileMetadata | null
  id: string
  preview?: string
}

export type FileUploadOptions = {
  maxFiles?: number
  maxSize?: number
  accept?: string
  multiple?: boolean
  initialFiles?: FileMetadata[]
  onFilesChange?: (files: FileWithPreview[]) => void
  onFilesAdded?: (addedFiles: FileWithPreview[]) => void
  onError?: (errors: string[]) => void
}

export type FileUploadState = {
  files: FileWithPreview[]
  isDragging: boolean
  errors: string[]
}

export type FileUploadActions = {
  addFiles: (files: FileList | File[]) => void
  removeFile: (id: string) => void
  clearFiles: () => void
  clearErrors: () => void
  handleDragEnter: (e: DragEvent<HTMLElement>) => void
  handleDragLeave: (e: DragEvent<HTMLElement>) => void
  handleDragOver: (e: DragEvent<HTMLElement>) => void
  handleDrop: (e: DragEvent<HTMLElement>) => void
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void
  openFileDialog: () => void
  getInputProps: (
    props?: InputHTMLAttributes<HTMLInputElement>
  ) => InputHTMLAttributes<HTMLInputElement> & {
    ref: React.Ref<HTMLInputElement>
  }
}

const BYTES_IN_KILOBYTE = 1024
const BYTES_IN_MB = BYTES_IN_KILOBYTE * BYTES_IN_KILOBYTE
const MAX_SIZE_MB_THRESHOLD = 1000
const RANDOM_ID_SUBSTRING_START = 2
const RANDOM_ID_SUBSTRING_END = 9
const RADIX_BASE_36 = 36

function normalizeMaxSize(rawMaxSize?: number) {
  if (
    rawMaxSize !== undefined &&
    rawMaxSize !== Number.POSITIVE_INFINITY &&
    rawMaxSize !== Number.NEGATIVE_INFINITY &&
    rawMaxSize !== null &&
    !Number.isNaN(rawMaxSize)
  ) {
    if (rawMaxSize <= MAX_SIZE_MB_THRESHOLD) {
      return rawMaxSize * BYTES_IN_MB
    }
    return rawMaxSize
  }
  return Number.POSITIVE_INFINITY
}

export function useCoverUpload(
  options: FileUploadOptions = {}
): [FileUploadState, FileUploadActions] {
  const {
    maxFiles = Number.POSITIVE_INFINITY,
    maxSize: maxSizeRaw = Number.POSITIVE_INFINITY,
    accept = '*',
    multiple = false,
    initialFiles = [],
    onFilesChange,
    onFilesAdded,
    onError,
  } = options

  const maxSize = normalizeMaxSize(maxSizeRaw)

  const [state, setState] = useState<FileUploadState>({
    files: initialFiles.map((file) => ({
      file,
      id: file.id,
      preview: file.url,
    })),
    isDragging: false,
    errors: [],
  })

  const inputRef = useRef<HTMLInputElement>(null)

  const isDuplicate = useCallback(
    (existingFiles: FileWithPreview[], file: File): boolean => {
      return existingFiles.some((existing) => {
        if (!(existing.file instanceof File)) {
          return false
        }
        return (
          existing.file.name === file.name && existing.file.size === file.size
        )
      })
    },
    []
  )

  const validateFileSize = useCallback(
    (file: File | FileMetadata): string | null => {
      if (file.size > maxSize) {
        return `File "${file.name}" exceeds the maximum size of ${formatBytes(maxSize)}.`
      }
      return null
    },
    [maxSize]
  )

  const validateFileType = useCallback(
    (file: File | FileMetadata): string | null => {
      if (accept === '*') {
        return null
      }
      const acceptedTypes = accept.split(',').map((type) => type.trim())
      const fileType = file instanceof File ? file.type || '' : file.type
      const fileExtension = `.${file.name.split('.').pop()}`

      const isAccepted = acceptedTypes.some((type) => {
        if (type.startsWith('.')) {
          return fileExtension.toLowerCase() === type.toLowerCase()
        }
        if (type.endsWith('/*')) {
          const baseType = type.split('/')[0]
          return fileType.startsWith(`${baseType}/`)
        }
        return fileType === type
      })
      if (!isAccepted) {
        return `File "${file.name}" is not an accepted file type.`
      }
      return null
    },
    [accept]
  )

  const validateIncomingFile = useCallback(
    (file: File): string | null => {
      if (file.size > maxSize) {
        return `File exceeds the maximum size of ${formatBytes(maxSize)}.`
      }
      return validateFileSize(file) || validateFileType(file)
    },
    [maxSize, validateFileSize, validateFileType]
  )

  const createPreview = useCallback(
    (file: File | FileMetadata): string | undefined => {
      if (file instanceof File) {
        return URL.createObjectURL(file)
      }
      return file.url
    },
    []
  )

  const generateUniqueId = useCallback((file: File | FileMetadata): string => {
    if (file instanceof File) {
      return `${file.name}-${Date.now()}-${Math.random()
        .toString(RADIX_BASE_36)
        .substring(RANDOM_ID_SUBSTRING_START, RANDOM_ID_SUBSTRING_END)}`
    }
    return file.id
  }, [])

  const processFiles = useCallback(
    (
      existingFiles: FileWithPreview[],
      incomingFiles: File[],
      allowMultiple: boolean
    ): { validFiles: FileWithPreview[]; errors: string[] } => {
      const validFiles: FileWithPreview[] = []
      const errors: string[] = []
      for (const file of incomingFiles) {
        if (allowMultiple && isDuplicate(existingFiles, file)) {
          continue
        }
        const error = validateIncomingFile(file)
        if (error) {
          errors.push(
            allowMultiple && error.startsWith('File exceeds')
              ? `Some files exceed the maximum size of ${formatBytes(maxSize)}.`
              : error
          )
          continue
        }
        validFiles.push({
          file,
          id: generateUniqueId(file),
          preview: createPreview(file),
        })
      }
      return { validFiles, errors }
    },
    [
      isDuplicate,
      validateIncomingFile,
      maxSize,
      generateUniqueId,
      createPreview,
    ]
  )

  const clearFiles = useCallback(() => {
    setState((prev) => {
      for (const file of prev.files) {
        if (
          file.preview &&
          file.file instanceof File &&
          file.file.type.startsWith('image/')
        ) {
          URL.revokeObjectURL(file.preview)
        }
      }

      if (inputRef.current) {
        inputRef.current.value = ''
      }

      const newState = {
        ...prev,
        files: [],
        errors: [],
      }

      onFilesChange?.(newState.files)
      return newState
    })
  }, [onFilesChange])

  const addFiles = useCallback(
    (newFiles: FileList | File[]) => {
      let newFilesArray = Array.from(newFiles)
      const errors: string[] = []

      setState((prev) => ({ ...prev, errors: [] }))

      if (!multiple) {
        clearFiles()
      }

      const exceedsMaxFiles =
        multiple &&
        maxFiles !== Number.POSITIVE_INFINITY &&
        state.files.length + newFilesArray.length > maxFiles
      if (exceedsMaxFiles) {
        errors.push(`You can only upload a maximum of ${maxFiles} files.`)
        newFilesArray = []
      }

      const { validFiles, errors: collectedErrors } = processFiles(
        state.files,
        newFilesArray,
        multiple
      )
      if (collectedErrors.length > 0) {
        errors.push(...collectedErrors)
      }

      if (validFiles.length > 0) {
        onFilesAdded?.(validFiles)

        setState((prev) => {
          const nextFiles = multiple
            ? [...prev.files, ...validFiles]
            : validFiles
          onFilesChange?.(nextFiles)
          return {
            ...prev,
            files: nextFiles,
            errors,
          }
        })
      } else if (errors.length > 0) {
        onError?.(errors)
        setState((prev) => ({
          ...prev,
          errors,
        }))
      }

      if (inputRef.current) {
        inputRef.current.value = ''
      }
    },
    [
      state.files,
      maxFiles,
      multiple,
      clearFiles,
      onFilesChange,
      onFilesAdded,
      onError,
      processFiles,
    ]
  )

  const removeFile = useCallback(
    (id: string) => {
      setState((prev) => {
        const fileToRemove = prev.files.find((file) => file.id === id)
        if (
          fileToRemove?.preview &&
          fileToRemove.file instanceof File &&
          fileToRemove.file.type.startsWith('image/')
        ) {
          URL.revokeObjectURL(fileToRemove.preview)
        }

        const newFiles = prev.files.filter((file) => file.id !== id)
        onFilesChange?.(newFiles)

        return {
          ...prev,
          files: newFiles,
          errors: [],
        }
      })
    },
    [onFilesChange]
  )

  const clearErrors = useCallback(() => {
    setState((prev) => ({
      ...prev,
      errors: [],
    }))
  }, [])

  const handleDragEnter = useCallback((e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setState((prev) => ({ ...prev, isDragging: true }))
  }, [])

  const handleDragLeave = useCallback((e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return
    }

    setState((prev) => ({ ...prev, isDragging: false }))
  }, [])

  const handleDragOver = useCallback((e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDrop = useCallback(
    (e: DragEvent<HTMLElement>) => {
      e.preventDefault()
      e.stopPropagation()
      setState((prev) => ({ ...prev, isDragging: false }))

      if (inputRef.current?.disabled) {
        return
      }

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        if (multiple) {
          addFiles(e.dataTransfer.files)
        } else {
          const file = e.dataTransfer.files[0]
          addFiles([file])
        }
      }
    },
    [addFiles, multiple]
  )

  const handleFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        addFiles(e.target.files)
      }
    },
    [addFiles]
  )

  const openFileDialog = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }, [])

  const getInputProps = useCallback(
    (props: InputHTMLAttributes<HTMLInputElement> = {}) => {
      return {
        ...props,
        type: 'file' as const,
        onChange: handleFileChange,
        accept: props.accept || accept,
        multiple: props.multiple !== undefined ? props.multiple : multiple,
        ref: inputRef,
      }
    },
    [accept, multiple, handleFileChange]
  )

  return [
    state,
    {
      addFiles,
      removeFile,
      clearFiles,
      clearErrors,
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      handleFileChange,
      openFileDialog,
      getInputProps,
    },
  ]
}

export const formatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) {
    return '0 Bytes'
  }

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return Number.parseFloat((bytes / k ** i).toFixed(dm)) + sizes[i]
}
