import type React from 'react'

function PageContainer({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="mx-auto flex h-full w-full flex-col justify-center gap-2 p-4 py-10 md:gap-8"
      {...props}
    >
      {children}
    </div>
  )
}

function PageHeader({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <header
      className="flex w-full flex-col items-center justify-between gap-2 lg:flex-row"
      {...props}
    >
      {children}
    </header>
  )
}

function PageHeaderContent({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="w-full space-y-1" {...props}>
      {children}
    </div>
  )
}

function PageTitle({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className="w-fit font-bold text-3xl" {...props}>
      {children}
    </h1>
  )
}

function PageDescription({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="w-fit text-muted-foreground text-sm" {...props}>
      {children}
    </div>
  )
}

function PageActionsContainer({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex w-full items-center gap-2 lg:w-fit" {...props}>
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

function PageFooter({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className="w-full" {...props}>
      {children}
    </footer>
  )
}

export {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageFooter,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
}
