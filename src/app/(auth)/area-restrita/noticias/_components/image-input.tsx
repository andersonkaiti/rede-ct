import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { toast } from "sonner";
export interface IImageInputProps {
  image_url?: string;
  preview: string | null;
  handleImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BYTES = 1024;
const MEGABYTES = BYTES * BYTES;
const TOTAL_SIZE = 50 * MEGABYTES;

export function ImageInput({
  image_url,
  preview,
  handleImage,
}: IImageInputProps) {
  const hasImage = !!image_url || !!preview;

  const hasPreview = image_url && !preview;

  const [isLoading, setIsLoading] = useState(false);

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file && file.size > TOTAL_SIZE) {
      toast.error(
        "O arquivo é muito grande. O tamanho máximo permitido é 50MB.",
      );

      event.target.value = "";

      return;
    }

    if (file) {
      setIsLoading(true);

      try {
        handleImage(event);
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="flex w-full items-center justify-center">
      <label
        htmlFor="dropzone-file"
        className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
      >
        {!isLoading && hasPreview && (
          <div className="relative h-75 w-full">
            <Image
              src={image_url}
              alt="Imagem da notícia"
              fill
              className="object-contain"
            />
          </div>
        )}

        {!isLoading && preview && (
          <div className="relative h-75 w-full">
            <Image
              src={preview}
              alt="Imagem da notícia"
              fill
              className="object-contain"
            />
          </div>
        )}

        {!isLoading && !hasImage && (
          <div className="flex min-h-75 flex-col items-center justify-center p-20">
            <ImageIcon className="size-8 text-gray-500" />

            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Clique para carregar</span> ou
              arraste e solte
            </p>
            <p className="text-xs text-gray-500">
              SVG, PNG, JPG ou GIF (máx. 50MB)
            </p>
          </div>
        )}

        <input
          id="dropzone-file"
          type="file"
          name="image"
          className="hidden"
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
}
