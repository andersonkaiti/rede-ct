import Image from "next/image";
import { IGalleryItem } from "types/congress";

export interface ICongressGalleryItemProps {
  item: IGalleryItem;
}

export function CongressGalleryItem({
  item: { url, caption },
}: ICongressGalleryItemProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={url}
          alt={caption}
          fill
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="leading-tight">{caption}</h3>
      </div>
    </div>
  );
}
