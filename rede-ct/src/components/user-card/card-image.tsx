import Image, { ImageProps } from "next/image";

export function UserCardImage({ alt, src, ...rest }: ImageProps) {
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
