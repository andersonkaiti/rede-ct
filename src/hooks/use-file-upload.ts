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
  file: File | FileMetadata
  id: string
  preview?: string
}

export type FileUploadOptions = {
  maxFiles?: number // Only used when multiple is true, defaults to Infinity
  maxSize?: number // in bytes
  accept?: string
  multiple?: boolean // Defaults to false
  initialFiles?: FileMetadata[]
  onFilesChange?: (files: FileWithPreview[]) => void // Callback when files change
  onFilesAdded?: (addedFiles: FileWithPreview[]) => void // Callback when new files are added
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

export const useFileUpload = (
  options: FileUploadOptions = {}
): [FileUploadState, FileUploadActions] => {
  const {
    maxFiles = Number.POSITIVE_INFINITY,
    maxSize = Number.POSITIVE_INFINITY,
    accept = '*',
    multiple = false,
    initialFiles = [],
    onFilesChange,
    onFilesAdded,
    onError,
  } = options

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

  const validateFileSize = useCallback(
    (file: File | FileMetadata): string | null => {
      if (file.size > maxSize) {
        return `O arquivo "${file.name}" excede o tamanho máximo de ${formatBytes(maxSize)}.`
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
      const fileExtension = (() => {
        const name = file instanceof File ? file.name : file.name
        const parts = name.split('.')
        if (parts.length > 1) {
          return `.${parts.pop()}`
        }
        return ''
      })()

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
        return `O arquivo "${file.name}" não é um tipo de arquivo aceito.`
      }

      return null
    },
    [accept]
  )

  const validateFile = useCallback(
    (file: File | FileMetadata): string | null => {
      const sizeError = validateFileSize(file)
      if (sizeError) {
        return sizeError
      }

      const typeError = validateFileType(file)
      if (typeError) {
        return typeError
      }

      return null
    },
    [validateFileSize, validateFileType]
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
      const RANDOM_STRING_LENGTH = 7
      const RANDOM_STRING_START = 2
      const RADIX = 36
      return `${file.name}-${Date.now()}-${Math.random()
        .toString(RADIX)
        .substring(
          RANDOM_STRING_START,
          RANDOM_STRING_START + RANDOM_STRING_LENGTH
        )}`
    }
    return file.id
  }, [])

  const clearFiles = useCallback(() => {
    setState((prev) => {
      // Clean up object URLs
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

  const checkMaxFilesLimit = useCallback(
    (newFilesCount: number): string | null => {
      if (
        multiple &&
        maxFiles !== Number.POSITIVE_INFINITY &&
        state.files.length + newFilesCount > maxFiles
      ) {
        return `Você pode fazer upload de no máximo ${maxFiles} arquivos.`
      }
      return null
    },
    [multiple, maxFiles, state.files.length]
  )

  const isDuplicateFile = useCallback(
    (file: File): boolean => {
      if (!multiple) {
        return false
      }
      return state.files.some(
        (existingFile) =>
          existingFile.file instanceof File &&
          existingFile.file.name === file.name &&
          existingFile.file.size === file.size
      )
    },
    [multiple, state.files]
  )

  const processFile = useCallback(
    (file: File, errors: string[]): FileWithPreview | null => {
      if (isDuplicateFile(file)) {
        errors.push(`O arquivo "${file.name}" já foi adicionado.`)
        return null
      }

      if (file.size > maxSize) {
        errors.push(
          multiple
            ? `Alguns arquivos excedem o tamanho máximo de ${formatBytes(maxSize)}.`
            : `O arquivo excede o tamanho máximo de ${formatBytes(maxSize)}.`
        )
        return null
      }

      const error = validateFile(file)
      if (error) {
        errors.push(error)
        return null
      }

      return {
        file,
        id: generateUniqueId(file),
        preview: createPreview(file),
      }
    },
    [
      isDuplicateFile,
      maxSize,
      multiple,
      validateFile,
      generateUniqueId,
      createPreview,
    ]
  )

  const processFiles = useCallback(
    (files: File[]): { validFiles: FileWithPreview[]; errors: string[] } => {
      const errors: string[] = []
      const validFiles: FileWithPreview[] = []

      for (const file of files) {
        const processedFile = processFile(file, errors)
        if (processedFile) {
          validFiles.push(processedFile)
        }
      }

      return { validFiles, errors }
    },
    [processFile]
  )

  const updateStateWithFiles = useCallback(
    (validFiles: FileWithPreview[], errors: string[]) => {
      if (validFiles.length > 0) {
        onFilesAdded?.(validFiles)

        setState((prev) => {
          const updatedFiles = multiple
            ? [...prev.files, ...validFiles]
            : validFiles
          onFilesChange?.(updatedFiles)
          return {
            ...prev,
            files: updatedFiles,
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
    },
    [multiple, onFilesAdded, onFilesChange, onError]
  )

  const addFiles = useCallback(
    (newFiles: FileList | File[]) => {
      if (!newFiles || newFiles.length === 0) {
        return
      }

      const newFilesArray = Array.from(newFiles)

      // Clear existing errors when new files are uploaded
      setState((prev) => ({ ...prev, errors: [] }))

      // In single file mode, clear existing files first
      if (!multiple) {
        clearFiles()
      }

      // Check if adding these files would exceed maxFiles
      const maxFilesError = checkMaxFilesLimit(newFilesArray.length)
      if (maxFilesError) {
        const maxFilesErrors = [maxFilesError]
        onError?.(maxFilesErrors)
        setState((prev) => ({ ...prev, errors: maxFilesErrors }))
        return
      }

      const { validFiles, errors } = processFiles(newFilesArray)
      updateStateWithFiles(validFiles, errors)

      // Reset input value after handling files
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    },
    [
      multiple,
      clearFiles,
      checkMaxFilesLimit,
      processFiles,
      updateStateWithFiles,
      onError,
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

    // Fix: Only set isDragging to false if the mouse has left the dropzone
    if (
      e.currentTarget &&
      e.relatedTarget &&
      e.currentTarget.contains(e.relatedTarget as Node)
    ) {
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

      // Don't process files if the input is disabled
      if (inputRef.current?.disabled) {
        return
      }

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        // In single file mode, only use the first file
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

// Função auxiliar para formatar bytes em formato legível
export const formatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) {
    return '0 Bytes'
  }

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${Number.parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`
}
