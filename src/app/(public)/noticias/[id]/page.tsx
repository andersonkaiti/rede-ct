import { getNewsById } from "@services/news/news-by-id";
import { formatDate } from "@utils/format-date";
import Image from "next/image";

import { ShareButton } from "./_components/share-button";

export default async function NoticiaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const news = await getNewsById(id);

  return (
    <main className="mx-auto my-10 flex w-full max-w-5xl flex-col justify-center gap-7 p-5 py-8">
      <header className="space-y-8">
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-pretty text-gray-900 sm:text-4xl">
          {news.title}
        </h1>

        <div className="flex items-center justify-between">
          <div className="space-y-2 text-sm">
            <time className="flex items-center gap-x-1">
              <div className="text-gray-500">
                Última atualização em {formatDate(news.updated_at)}
              </div>
            </time>

            <div className="text-gray-500">
              Por{" "}
              <span className="text-primary font-bold">
                {news.author.first_name} {news.author.last_name}
              </span>
            </div>
          </div>

          <ShareButton news={news} />
        </div>
      </header>

      <picture className="relative h-88 w-full overflow-hidden">
        <Image
          src={news.image_url ?? ""}
          alt={news.title}
          className="rounded-md object-cover"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </picture>

      <p className="text-justify text-base/7">{news.content}</p>
    </main>
  );
}
