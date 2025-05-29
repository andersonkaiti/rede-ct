import Image from "next/image";

export interface IImageInputProps {
  image_url?: string;
  preview: string | null;
  handleImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ImageInput({
  image_url,
  preview,
  handleImage,
}: IImageInputProps) {
  const hasImage = !!image_url || !!preview;

  const hasPreview = image_url && !preview;

  return (
    <div className="flex w-full items-center justify-center">
      <label
        htmlFor="dropzone-file"
        className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
      >
        {hasPreview && (
          <div className="relative h-75 w-full">
            <Image
              src={image_url}
              alt="Imagem da notícia"
              fill
              className="object-contain p-10"
            />
          </div>
        )}

        {preview && (
          <div className="relative h-75 w-full">
            <Image
              src={preview}
              alt="Imagem da notícia"
              fill
              className="object-contain p-10"
            />
          </div>
        )}

        {!hasImage && (
          <div className="flex min-h-75 flex-col items-center justify-center p-20">
            <svg
              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Clique para carregar</span> ou
              arraste e solte
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG ou GIF (máx. 50MB)
            </p>
          </div>
        )}
        <input
          id="dropzone-file"
          type="file"
          name="image"
          className="hidden"
          onChange={handleImage}
        />
      </label>
    </div>
  );
}
