import { formatDate } from "@utils/format-date";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { INews } from "types/news";

export function Noticia({
  news: {
    title,
    content,
    updated_at,
    image_url,
    author: { image_url: author_image_url, first_name, last_name },
    id,
  },
}: {
  news: INews;
}) {
  return (
    <article className="flex w-full flex-col items-start justify-between gap-4 rounded-md shadow-md transition-all duration-300 hover:shadow-lg">
      <picture className="relative h-60 w-full overflow-hidden rounded-t-md">
        <Image
          src={image_url ?? ""}
          alt={`Foto de ${first_name} ${last_name}`}
          fill
          className="object-cover transition-all duration-300 hover:scale-110"
        />
      </picture>

      <div className="flex grow flex-col justify-between gap-2 p-4">
        <div className="flex items-center gap-x-2 text-xs">
          <Calendar className="size-4 text-gray-500" />
          <time dateTime={updated_at} className="text-gray-500">
            Última atualização: {formatDate(updated_at)}
          </time>
        </div>
        <div className="group relative">
          <h3 className="group-hover:text-primary text-lg/6 font-semibold text-gray-900">
            <Link href={`/noticias/${id}`}>
              <span className="absolute inset-0"></span>
              {title}
            </Link>
          </h3>
          <p className="group-hover:text-primary mt-5 line-clamp-3 text-justify text-sm/6 text-gray-600">
            {content.substring(0, 100)}...
          </p>
        </div>
        <div className="relative mt-4 flex items-center gap-x-2 text-xs">
          <div className="relative size-6">
            <Image
              src={author_image_url}
              alt={`Foto de ${first_name} ${last_name}`}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="font-semibold text-gray-900">
            {first_name} {last_name}
          </div>
        </div>
      </div>
    </article>
  );
}
