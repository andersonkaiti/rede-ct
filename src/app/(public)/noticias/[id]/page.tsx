import Image from "next/image";
import { Separator } from "@components/ui/separator";
import { getNewsById } from "@services/news/news-by-id";
import { formatDate } from "@utils/format-date";
import { Calendar } from "lucide-react";

export default async function NoticiaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const news = await getNewsById(id);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col justify-center gap-12.5 p-5 py-8">
      <h1 className="mt-2 text-center text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
        {news.title}
      </h1>

      <picture className="relative h-88 w-full overflow-hidden">
        <Image
          src={news.image_url ?? ""}
          alt={news.title}
          className="rounded-md object-cover"
          fill
        />
      </picture>

      <div className="flex items-center justify-between gap-x-2">
        <time className="flex items-center gap-x-2 text-xs">
          <Calendar className="h-4 w-4 text-gray-500" />
          <div className="text-sm text-gray-500">
            Publicado em {formatDate(news.created_at)}
          </div>
        </time>

        <div className="flex items-center gap-x-2">
          <div className="text-sm text-gray-500">
            Publicado por {news.author.first_name} {news.author.last_name}
          </div>
        </div>
      </div>

      <Separator />

      <p className="mb-20 text-base/7 text-gray-700">{news.content}</p>
    </main>
  );
}
