import { Badge } from '@components/ui/badge'
import type React from 'react'

function PageContainer({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <main
      className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25"
      {...props}
    >
      {children}
    </main>
  )
}

function PageHeader({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <header className="flex items-center gap-4" {...props}>
      {children}
    </header>
  )
}

function PageHeaderIcon({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <Badge className="rounded-full bg-primary/10 p-1.5 text-primary" {...props}>
      {children}
    </Badge>
  )
}

function PageHeaderTitle({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className="whitespace-normal font-bold text-2xl lg:text-4xl" {...props}>
      {children}
    </h1>
  )
}

function PageDescription({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="w-full text-justify" {...props}>
      {children}
    </div>
  )
}

function PageMain({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <main
      className="flex h-full w-full flex-col justify-between gap-4"
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
