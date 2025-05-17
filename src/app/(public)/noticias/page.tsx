import { getNews } from "@actions/news";
import { Input } from "@components/input";
import { News } from "@components/news";
import { PaginationContainer } from "@components/noticias/pagination";
import { Search } from "lucide-react";

import { INews } from "types/news";

export default async function Noticias() {
  const news = await getNews();

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-10 p-5 py-8 lg:p-25">
      <h1 className="text-center text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
        Notícias
      </h1>
      <Input placeholder="Buscar">
        <Search className="mr-2 h-4 w-4 text-gray-400" />
      </Input>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {news.map((news: INews, index: number) => (
          <News key={index} news={news} />
        ))}
      </div>

      <PaginationContainer />
    </main>
  );
}
