'use client'

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
    props?: InputHTMLAttributes<HTMLInputElement>,
  ) => InputHTMLAttributes<HTMLInputElement> & {
    ref: React.Ref<HTMLInputElement>
  }
}

export function useAvatarUploader(
  options: FileUploadOptions = {},
): [FileUploadState, FileUploadActions] {
  const {
    maxFiles = Number.POSITIVE_INFINITY,
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

  const createPreview = useCallback(
    (file: File | FileMetadata): string | undefined => {
      if (file instanceof File) {
        return URL.createObjectURL(file)
      }
      return file.url
    },
    [],
  )

  const generateUniqueId = useCallback((file: File | FileMetadata): string => {
    if (file instanceof File) {
      const timestamp = Date.now()
      const randomStringLength = 7
      const base36StartIndex = 2
      const base36 = 36
      const randomString = Math.random()
        .toString(base36)
        .substring(base36StartIndex, base36StartIndex + randomStringLength)
      return `${file.name}-${timestamp}-${randomString}`
    }
    return file.id
  }, [])

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

  const processFiles = useCallback(
    (files: File[]): FileWithPreview[] => {
      return files.map((file) => ({
        file,
        id: generateUniqueId(file),
        preview: createPreview(file),
      }))
    },
    [generateUniqueId, createPreview],
  )

  const checkFileLimit = useCallback(
    (newFilesCount: number): boolean => {
      return !(
        multiple &&
        maxFiles !== Number.POSITIVE_INFINITY &&
        state.files.length + newFilesCount > maxFiles
      )
    },
    [multiple, maxFiles, state.files.length],
  )

  const addFiles = useCallback(
    (newFiles: FileList | File[]) => {
      if (!newFiles || newFiles.length === 0) {
        return
      }

      const newFilesArray = Array.from(newFiles)
      setState((prev) => ({ ...prev, errors: [] }))

      if (!multiple) {
        clearFiles()
      }

      if (!checkFileLimit(newFilesArray.length)) {
        const errorMessages = [
          `You can only upload a maximum of ${maxFiles} files.`,
        ]
        onError?.(errorMessages)
        setState((prev) => ({ ...prev, errors: errorMessages }))
        return
      }

      const validFiles = processFiles(newFilesArray)

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
            errors: [],
          }
        })
      }

      if (inputRef.current) {
        inputRef.current.value = ''
      }
    },
    [
      multiple,
      clearFiles,
      checkFileLimit,
      maxFiles,
      onError,
      processFiles,
      onFilesAdded,
      onFilesChange,
    ],
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
    [onFilesChange],
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
    [addFiles, multiple],
  )

  const handleFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        addFiles(e.target.files)
      }
    },
    [addFiles],
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
    [accept, multiple, handleFileChange],
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
