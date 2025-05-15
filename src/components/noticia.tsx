import { formatDate } from "@utils/format-date";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { INoticia } from "types/noticia";

export function Noticia({
  noticia: { title, content, author, date },
}: {
  noticia: INoticia;
}) {
  return (
    <article className="flex flex-1 flex-col items-start justify-between p-10 shadow-md">
      <div className="flex items-center gap-x-2 text-xs">
        <Calendar className="h-4 w-4 text-gray-500" />
        <time dateTime={date} className="text-gray-500">
          {formatDate(date)}
        </time>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-indigo-500">
          <Link href={`/noticias/${title}`}>
            <span className="absolute inset-0"></span>
            {title}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{content}</p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <div className="text-sm/6">
          <p className="font-semibold text-gray-900">{author}</p>
        </div>
      </div>
    </article>
  );
}
