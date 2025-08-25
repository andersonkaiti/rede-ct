export const dynamic = 'force-dynamic'

import { Input } from '@components/ui/input'
import { getNews } from '@http/news/get-news'
import type { INews } from 'types/news'

import { Noticia } from './_components/noticia'

export default async function Noticias() {
  const news = await getNews()

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-14">
      <h1 className="text-pretty font-semibold text-4xl text-foreground tracking-tight sm:text-5xl">
        Notícias
      </h1>
      {news.length > 0 && (
        <Input className="w-full sm:w-fit" placeholder="Buscar" />
      )}
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {news.map((newsItem: INews, index: number) => (
          <Noticia key={index} news={newsItem} />
        ))}

        {news.length === 0 && (
          <div className="flex w-full items-center justify-center">
            <p>Nenhuma notícia encontrada</p>
          </div>
        )}
      </div>
    </main>
  )
}
