import { Badge } from '@components/ui/badge'
import { cn } from '@utils/cn'
import type React from 'react'

function PageContainer({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <main
      className={cn(
        'mx-auto flex w-full max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25',
        className,
      )}
      {...props}
    >
      {children}
    </main>
  )
}

function PageHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <header className={cn('flex items-center gap-4', className)} {...props}>
      {children}
    </header>
  )
}

function PageHeaderIcon({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <Badge
      className={cn('rounded-full bg-primary/10 p-1.5 text-primary', className)}
      {...props}
    >
      {children}
    </Badge>
  )
}

function PageHeaderTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'whitespace-normal font-bold text-2xl lg:text-4xl',
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

function PageDescription({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('w-full text-justify', className)} {...props}>
      {children}
    </div>
  )
}

function PageMain({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <main
      className={cn(
        'flex h-full w-full flex-col justify-between gap-4',
        className,
      )}
      {...props}
    >
      {children}
    </main>
  )
}

export {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
  PageMain,
}
