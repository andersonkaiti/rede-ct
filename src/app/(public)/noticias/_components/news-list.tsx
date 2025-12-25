'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Separator } from '@components/ui/separator'
import { FilterInput } from './filter-input'
import LoadingSkeleton from './loading-skeleton'
import { News } from './news'
import { SelectAuthor } from './select-author'
import { DEFAULT_LIMIT, DEFAULT_PAGE, useNews } from './use-news.hook'

export function NewsList() {
  const { data, isLoading } = useNews()

  return (
    <>
      <div className="flex w-full gap-2 sm:flex-row sm:items-center sm:gap-4">
        <FilterInput />

        <div className="sm:ml-auto sm:flex">
          <SelectAuthor />
        </div>
      </div>

      {isLoading && <LoadingSkeleton />}

      <div className="grid w-full grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {data?.news.map((news) => (
          <News key={news.id} news={news} />
        ))}

        {!isLoading && !data?.news.length && (
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
        currentPage={data?.page ?? DEFAULT_PAGE}
        defaultRowsPerPage={data?.limit ?? DEFAULT_LIMIT}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
