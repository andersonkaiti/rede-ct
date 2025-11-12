'use client'

import { Button } from '@components/ui/button'
import {
	type FileMetadata,
	formatBytes,
	useFileUpload,
} from '@hooks/use-file-uploader'
import { cn } from '@utils/cn'
import { AlertCircleIcon, PaperclipIcon, UploadIcon, XIcon } from 'lucide-react'
import React, { useEffect, useMemo } from 'react'

const BYTES_PER_KB = 1024
const KB_PER_MB = 1024
const DEFAULT_MAX_FILE_SIZE_MB = 10
const DEFAULT_MAX_FILE_SIZE =
	DEFAULT_MAX_FILE_SIZE_MB * KB_PER_MB * BYTES_PER_KB

interface FileUploaderProps {
	maxSize?: number
	className?: string
	onFileChange?: (file: File | null) => void
	accept?: string
	multiple?: boolean
	name: string
	disabled?: boolean
	defaultFile?: string
}

export function FileUploader({
	maxSize = DEFAULT_MAX_FILE_SIZE,
	className,
	onFileChange,
	accept,
	multiple = false,
	name,
	disabled = false,
	defaultFile,
}: FileUploaderProps) {
	const initialFiles = useMemo(() => {
		if (!defaultFile) {
			return []
		}
		const fileName = defaultFile.split('/').pop() || 'arquivo'
		return [
			{
				name: fileName,
				size: 0,
				type: 'application/octet-stream',
				url: defaultFile,
				id: `default-${Date.now()}`,
			} satisfies FileMetadata,
		]
	}, [defaultFile])

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
			handleFileChange,
		},
	] = useFileUpload({
		maxSize,
		accept,
		multiple,
		initialFiles,
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

	const file = files[0]

	const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault()
			openFileDialog()
		}
	}

	const handleRemove = React.useCallback(() => {
		if (file) {
			removeFile(file.id)
		}
	}, [file, removeFile])

	return (
		<div className={cn('flex flex-col gap-2', className)}>
			<button
				type="button"
				onClick={openFileDialog}
				onDragEnter={handleDragEnter}
				onDragLeave={handleDragLeave}
				onDragOver={handleDragOver}
				onDrop={handleDrop}
				onKeyDown={handleKeyDown}
				data-dragging={isDragging || undefined}
				disabled={disabled || Boolean(file)}
				className="cursor-pointer flex min-h-40 flex-col items-center justify-center rounded-xl border border-dashed border-input p-4 transition-colors hover:bg-accent/50 disabled:pointer-events-none disabled:opacity-50 has-[input:focus]:border-ring has-[input:focus]:ring-[3px] has-[input:focus]:ring-ring/50 data-[dragging=true]:bg-accent/50"
			>
				<input
					{...getInputProps()}
					className="sr-only"
					aria-label="Fazer upload"
					name={name}
					onChange={handleFileChange}
					disabled={disabled || Boolean(file)}
				/>

				<div className="flex flex-col items-center justify-center text-center">
					<div
						className="mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border bg-background"
						aria-hidden="true"
					>
						<UploadIcon className="size-4 opacity-60" />
					</div>
					<p className="mb-1.5 text-sm font-medium">Fazer upload</p>
					<p className="text-xs text-muted-foreground">
						Solte o arquivo aqui (máximo {formatBytes(maxSize)})
					</p>
				</div>
			</button>

			{errors.length > 0 && (
				<div
					className="flex items-center gap-1 text-xs text-destructive"
					role="alert"
				>
					<AlertCircleIcon className="size-3 shrink-0" />
					<span>{errors[0]}</span>
				</div>
			)}

			{file && (
				<div className="space-y-2">
					<div
						key={file.id}
						className="flex items-center justify-between gap-2 rounded-xl border px-4 py-2"
					>
						<div className="flex items-center gap-3 overflow-hidden">
							<PaperclipIcon
								className="size-4 shrink-0 opacity-60"
								aria-hidden="true"
							/>
							<div className="min-w-0">
								<p className="truncate text-[13px] font-medium">
									{file.file.name}
								</p>
							</div>
						</div>

						<Button
							size="icon"
							variant="ghost"
							className="-me-2 size-8 text-muted-foreground/80 hover:bg-transparent hover:text-foreground"
							onClick={handleRemove}
							aria-label="Remover arquivo"
							type="button"
						>
							<XIcon className="size-4" aria-hidden="true" />
						</Button>
					</div>
				</div>
			)}
		</div>
	)
}
