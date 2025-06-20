"use client";

import { useFileUpload } from "@hooks/use-file-upload";
import { AlertCircleIcon, ImageUpIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";

interface IFileUploadProps {
  maxSizeMB: number;
  imageUrl?: string;
}

export function FileUpload({ maxSizeMB = 50, imageUrl }: IFileUploadProps) {
  const maxSize = maxSizeMB * 1024 * 1024;

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
    accept: "image/*",
    maxSize,
  });

  const previewUrl = files[0]?.preview || imageUrl || null;

  // Callback ref para sincronizar o arquivo com o input HTML
  const inputCallbackRef = useCallback(
    (inputElement: HTMLInputElement | null) => {
      if (inputElement && files[0]?.file) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(files[0].file as File);
        inputElement.files = dataTransfer.files;
      } else if (inputElement && files.length === 0) {
        // Limpa o input quando não há arquivos
        inputElement.value = "";
      }
    },
    [files],
  );

  const handleRemoveFile = () => {
    if (files[0]?.id) {
      removeFile(files[0].id);
    }
  };

  // Pega as props do input e adiciona nossa callback ref
  const inputProps = getInputProps();
  const combinedRef = useCallback(
    (element: HTMLInputElement | null) => {
      // Chama a ref original do hook se existir
      if (typeof inputProps.ref === "function") {
        inputProps.ref(element);
      } else if (inputProps.ref) {
        inputProps.ref.current = element;
      }

      // Chama nossa callback ref
      inputCallbackRef(element);
    },
    [inputProps, inputCallbackRef],
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <div
          role="button"
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-dragging={isDragging || undefined}
          className="border-input hover:bg-accent/50 data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none has-[input:focus]:ring-[3px]"
        >
          <input
            {...inputProps}
            ref={combinedRef}
            className="sr-only"
            aria-label="Carregar imagem"
            name="image"
          />
          {previewUrl ? (
            <div className="absolute inset-0">
              <Image
                src={previewUrl || "/placeholder.svg"}
                alt={files[0]?.file?.name || "Imagem carregada"}
                fill
                className="size-full object-cover"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
              <div
                className="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
                aria-hidden="true"
              >
                <ImageUpIcon className="size-4 opacity-60" />
              </div>
              <p className="mb-1.5 text-sm font-medium">
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
              type="button"
              className="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
              onClick={handleRemoveFile}
              aria-label="Remover imagem"
            >
              <XIcon className="size-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {errors.length > 0 && (
        <div
          className="text-destructive flex items-center gap-1 text-xs"
          role="alert"
        >
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}
    </div>
  );
}
