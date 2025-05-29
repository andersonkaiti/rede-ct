import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@utils/format-date";
import { Calendar } from "lucide-react";
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
    <article className="max flex w-full flex-col items-start justify-between gap-4 rounded-md shadow-md transition-all duration-300 hover:shadow-lg">
      <picture className="relative h-60 w-full overflow-hidden">
        <Image
          src={image_url ?? ""}
          alt={`Foto de ${first_name} ${last_name}`}
          fill
          className="rounded-t-md object-cover"
        />
      </picture>
      <div className="space-y-10 p-4">
        <div className="flex items-center gap-x-2 text-xs">
          <Calendar className="h-4 w-4 text-gray-500" />
          <time dateTime={updated_at} className="text-gray-500">
            Última atualização: {formatDate(updated_at)}
          </time>
        </div>
        <div className="group relative">
          <h3 className="text-lg/6 font-semibold text-gray-900 group-hover:text-indigo-500">
            <Link href={`/noticias/${id}`}>
              <span className="absolute inset-0"></span>
              {title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600 group-hover:text-indigo-400">
            {content}
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-2">
          <div className="relative size-6">
            <Image
              src={author_image_url}
              alt={`Foto de ${first_name} ${last_name}`}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="text-xs font-semibold text-gray-900">
            {first_name} {last_name}
          </div>
        </div>
      </div>
    </article>
  );
}
