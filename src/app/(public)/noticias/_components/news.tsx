'use client'

import type { INews } from 'types/news'
import { useNews } from '../_hooks/use-news.hook'
import Loading from '../loading'
import { FilterInput } from './filter-input'
import { Noticia } from './noticia'
import { SelectAuthor } from './select-author'

export function NewsList() {
  const { data: news = [], isLoading } = useNews()

  const authors = Array.from(
    new Map(news.map((notice) => [notice.author.id, notice.author])).values()
  )

  return (
    <>
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
        <div className="w-full flex-1">
          <FilterInput />
        </div>

        <SelectAuthor authors={authors} />
      </div>

      {isLoading && <Loading />}

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {news.map((newsItem: INews, index: number) => (
          <Noticia key={index} news={newsItem} />
        ))}

        {news.length === 0 && (
          <div className="col-end-3 flex w-full flex-col items-center justify-center">
            <p className="font-medium text-lg text-muted-foreground">
              Nenhuma notícia encontrada.
            </p>
            <span className="mt-2 text-muted-foreground text-sm">
              Tente ajustar o filtro ou pesquise por outro termo.
            </span>
          </div>
        )}
      </div>
    </>
  )
}
