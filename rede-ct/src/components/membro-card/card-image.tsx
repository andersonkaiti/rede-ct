import Image, { ImageProps } from "next/image";

export type MembroCardImageProps = ImageProps;

export function MembroCardImage({ alt, src, ...rest }: MembroCardImageProps) {
  return (
    <div className="relative h-48 w-48">
      <Image
        src={src}
        alt={alt}
        fill
        className="absolute h-full w-full rounded-full object-cover"
        {...rest}
      />
    </div>
  );
}
