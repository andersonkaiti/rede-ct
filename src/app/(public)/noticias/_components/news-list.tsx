'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Separator } from '@components/ui/separator'
import type { INews } from 'types/news'
import { useNews } from '../_hooks/use-news.hook'
import { FilterInput } from './filter-input'
import LoadingSkeleton from './loading-skeleton'
import { Noticia } from './news'
import { SelectAuthor } from './select-author'

export function NewsList() {
  const { data, isLoading, page } = useNews()

  const authors = Array.from(
    new Map(
      (data?.news ?? []).map((notice) => [notice.author.id, notice.author])
    ).values()
  )

  const news = data?.news ?? []

  const hasNews = news?.length > 0

  return (
    <>
      <div className="flex w-full gap-2 sm:flex-row sm:items-center sm:gap-4">
        <FilterInput />

        <div className="sm:ml-auto sm:flex">
          <SelectAuthor authors={authors} />
        </div>
      </div>

      {isLoading && <LoadingSkeleton />}

      <div className="grid w-full grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {hasNews &&
          (data?.news ?? []).map((newsItem: INews, index: number) => (
            <Noticia key={index} news={newsItem} />
          ))}

        {hasNews && !isLoading && data?.news?.length === 0 && (
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

      <Separator />

      <PaginatorComponent
        currentPage={Number(page)}
        defaultRowsPerPage={9}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
