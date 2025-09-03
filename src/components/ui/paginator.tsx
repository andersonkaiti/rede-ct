import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  Pagination as Paginator,
} from '@components/ui/pagination'
import { usePagination } from '@hooks/use-pagination.hook'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from 'lucide-react'
import { parseAsString, useQueryState } from 'nuqs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'

interface IPaginatorProps {
  currentPage: number
  totalPages: number
  defaultRowsPerPage: number
  paginationItemsToDisplay?: number
}

export default function PaginatorComponent({
  currentPage,
  totalPages,
  defaultRowsPerPage = 9,
  paginationItemsToDisplay = 5,
}: IPaginatorProps) {
  const { pages, showLeftEllipsis, showRightEllipsis } = usePagination({
    currentPage,
    totalPages,
    paginationItemsToDisplay,
  })

  const [limit, setLimit] = useQueryState(
    'limit',
    parseAsString.withDefault(String(defaultRowsPerPage))
  )

  function formatPageHref(page: number) {
    const url = new URL(window.location.href)

    url.searchParams.set('page', String(page))

    return `${url.pathname}?${url.searchParams.toString()}`
  }

  return (
    <Paginator className="mt-auto">
      {/* Mobile pagination */}
      <PaginationContent className="flex w-full items-center justify-center gap-2 sm:hidden">
        {/* Previous page button */}
        <PaginationItem>
          <PaginationLink
            aria-disabled={currentPage === 1}
            aria-label="Página anterior"
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            href={
              currentPage === 1 ? undefined : formatPageHref(currentPage - 1)
            }
            role={currentPage === 1 ? 'link' : undefined}
          >
            <ChevronLeftIcon aria-hidden="true" size={18} />
          </PaginationLink>
        </PaginationItem>
        <span className="select-none px-2 font-medium text-sm">
          Página {currentPage} de {totalPages}
        </span>
        {/* Next page button */}
        <PaginationItem>
          <PaginationLink
            aria-disabled={currentPage === totalPages}
            aria-label="Próxima página"
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            href={
              currentPage === totalPages
                ? undefined
                : formatPageHref(currentPage + 1)
            }
            role={currentPage === totalPages ? 'link' : undefined}
          >
            <ChevronRightIcon aria-hidden="true" size={18} />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>

      {/* Desktop pagination */}
      <PaginationContent className="hidden w-full items-center justify-center gap-1 sm:flex">
        <div className="mr-auto flex items-center gap-4">
          <span
            aria-live="polite"
            className="flex-1 whitespace-nowrap text-muted-foreground text-sm"
          >
            Página <span className="text-foreground">{currentPage}</span> de{' '}
            <span className="text-foreground">{totalPages}</span>
          </span>

          {/* Results per page */}
          <div className="flex flex-1 justify-end">
            <Select
              aria-label="Resultados por página"
              defaultValue={limit}
              onValueChange={(value) => setLimit(value)}
            >
              <SelectTrigger
                className="w-fit whitespace-nowrap"
                id="results-per-page"
              >
                <SelectValue placeholder="Selecione o número de resultados" />
              </SelectTrigger>
              <SelectContent className="max-h-40">
                <SelectItem value="1">1 / pág.</SelectItem>
                <SelectItem value="2">2 / pág.</SelectItem>
                <SelectItem value="3">3 / pág.</SelectItem>
                <SelectItem value="4">4 / pág.</SelectItem>
                <SelectItem value="5">5 / pág.</SelectItem>
                <SelectItem value="6">6 / pág.</SelectItem>
                <SelectItem value="7">7 / pág.</SelectItem>
                <SelectItem value="8">8 / pág.</SelectItem>
                <SelectItem value="9">9 / pág.</SelectItem>
                <SelectItem value="10">10 / pág.</SelectItem>
                <SelectItem value="15">15 / pág.</SelectItem>
                <SelectItem value="20">20 / pág.</SelectItem>
                <SelectItem value="25">25 / pág.</SelectItem>
                <SelectItem value="30">30 / pág.</SelectItem>
                <SelectItem value="35">35 / pág.</SelectItem>
                <SelectItem value="40">40 / pág.</SelectItem>
                <SelectItem value="45">45 / pág.</SelectItem>
                <SelectItem value="50">50 / pág.</SelectItem>
                <SelectItem value="100">100 / pág.</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* First page button */}
        <PaginationItem>
          <PaginationLink
            aria-disabled={currentPage === 1}
            aria-label="Ir para a primeira página"
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            href={currentPage === 1 ? undefined : formatPageHref(1)}
            role={currentPage === 1 ? 'link' : undefined}
          >
            <ChevronsLeftIcon aria-hidden="true" size={16} />
          </PaginationLink>
        </PaginationItem>

        {/* Previous page button */}
        <PaginationItem>
          <PaginationLink
            aria-disabled={currentPage === 1}
            aria-label="Página anterior"
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            href={
              currentPage === 1 ? undefined : formatPageHref(currentPage - 1)
            }
            role={currentPage === 1 ? 'link' : undefined}
          >
            <ChevronLeftIcon aria-hidden="true" size={16} />
          </PaginationLink>
        </PaginationItem>

        {/* Left ellipsis (...) */}
        {showLeftEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Page number links */}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              aria-disabled={page === currentPage}
              className={
                'aria-disabled:pointer-events-none aria-disabled:opacity-50' +
                (page === currentPage
                  ? '!bg-muted !text-muted-foreground !border-muted'
                  : '')
              }
              href={page === currentPage ? undefined : formatPageHref(page)}
              isActive={page === currentPage}
              role={page === currentPage ? 'link' : undefined}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Right ellipsis (...) */}
        {showRightEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Next page button */}
        <PaginationItem>
          <PaginationLink
            aria-disabled={currentPage === totalPages}
            aria-label="Próxima página"
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            href={
              currentPage === totalPages
                ? undefined
                : formatPageHref(currentPage + 1)
            }
            role={currentPage === totalPages ? 'link' : undefined}
          >
            <ChevronRightIcon aria-hidden="true" size={16} />
          </PaginationLink>
        </PaginationItem>

        {/* Last page button */}
        <PaginationItem>
          <PaginationLink
            aria-disabled={currentPage === totalPages}
            aria-label="Ir para a última página"
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            href={
              currentPage === totalPages
                ? undefined
                : formatPageHref(totalPages)
            }
            role={currentPage === totalPages ? 'link' : undefined}
          >
            <ChevronsRightIcon aria-hidden="true" size={16} />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Paginator>
  )
}
