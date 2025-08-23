import { type Button, buttonVariants } from '@components/ui/button'
import { cn } from '@utils/cn'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  MoreHorizontalIcon,
} from 'lucide-react'
import type * as React from 'react'

function Root({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      aria-label="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      data-slot="pagination"
      {...props}
    />
  )
}

function Content({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      className={cn('flex flex-row items-center gap-1', className)}
      data-slot="pagination-content"
      {...props}
    />
  )
}

function Item({ ...props }: React.ComponentProps<'li'>) {
  return (
    <li className="cursor-pointer" data-slot="pagination-item" {...props} />
  )
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
  React.ComponentProps<'button'>

function Link({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) {
  return (
    <button
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        className
      )}
      data-active={isActive}
      data-slot="pagination-link"
      type="button"
      {...props}
    />
  )
}

function First({ className, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link
      aria-label="Ir para a primeira página"
      className={cn(className)}
      size="default"
      {...props}
    >
      <ChevronsLeftIcon className="size-4" />
    </Link>
  )
}

function Last({ className, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link
      aria-label="Ir para a última página"
      className={cn(className)}
      size="default"
      {...props}
    >
      <ChevronsRightIcon className="size-4" />
    </Link>
  )
}

function Previous({ className, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link
      aria-label="Ir para a página anterior"
      className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
      size="default"
      {...props}
    >
      <ChevronLeftIcon />
      {/* <span className="hidden sm:block">Anterior</span> */}
    </Link>
  )
}

function Next({ className, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link
      aria-label="Ir para a próxima página"
      className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
      size="default"
      {...props}
    >
      {/* <span className="hidden sm:block">Próximo</span> */}
      <ChevronRightIcon />
    </Link>
  )
}

function Ellipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      className={cn('flex size-9 items-center justify-center', className)}
      data-slot="pagination-ellipsis"
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export { Content, Ellipsis, First, Item, Last, Link, Next, Previous, Root }
