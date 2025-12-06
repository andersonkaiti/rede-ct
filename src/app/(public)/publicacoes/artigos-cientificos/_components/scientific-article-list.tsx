'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Separator } from '@components/ui/separator'
import { FilterInput } from './filter-input'
import { LoadingSkeleton } from './loading-skeleton'
import { ScientificArticleCard } from './scientific-article-card'
import { useScientificArticles } from './use-scientific-articles'

export function ScientificArticleList() {
  const { data, isLoading, page, limit } = useScientificArticles()

  return (
    <>
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
        <FilterInput />
      </div>

      {isLoading && <LoadingSkeleton />}

      {data?.scientificArticles && (
        <div className="flex flex-col gap-6">
          {data.scientificArticles.map((article) => (
            <ScientificArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}

      {!isLoading && !data?.scientificArticles.length && (
        <div className="col-end-3 flex w-full flex-col items-center justify-center py-12">
          <p className="font-medium text-lg text-muted-foreground">
            Nenhum artigo encontrado.
          </p>
          <span className="mt-2 text-muted-foreground text-sm">
            Tente ajustar o filtro ou pesquise por outro termo.
          </span>
        </div>
      )}

      <Separator />

      <PaginatorComponent
        currentPage={Number(page)}
        defaultRowsPerPage={Number(limit)}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
