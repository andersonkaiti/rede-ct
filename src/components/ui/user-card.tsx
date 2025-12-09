import { Button } from '@components/ui/button'
import { Skeleton } from '@components/ui/skeleton'
import { ArrowRightIcon, ImageIcon } from 'lucide-react'
import type { ImageProps } from 'next/image'
import Link, { type LinkProps } from 'next/link'

import { Avatar, AvatarImage } from './avatar'
import { Card, CardContent } from './card'

interface IUserCardProps {
  children: React.ReactNode
}

function UserCardWrapper({ children }: IUserCardProps) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">{children}</div>
  )
}

function UserCard({ children }: IUserCardProps) {
  return (
    <Card className="flex w-full flex-1 flex-col items-center justify-center gap-2 border-none bg-background shadow-none">
      {children}
    </Card>
  )
}

function UserCardRedLine() {
  return (
    <div className="mx-auto h-px w-1/2 bg-linear-to-r from-transparent via-primary/80 to-transparent" />
  )
}

function UserCardContent({ children }: IUserCardProps) {
  return (
    <CardContent className="flex w-full grow flex-col items-center justify-between gap-8">
      {children}
    </CardContent>
  )
}

function UserCardImage({ alt, src, ...rest }: ImageProps) {
  return (
    <Avatar className="relative size-40 rounded-full shadow-2xl ring-4 ring-primary/20">
      <AvatarImage
        alt={alt}
        className="absolute h-full w-full rounded-full object-cover"
        src={(src as string) || '/images/placeholder.png'}
        {...rest}
      />
    </Avatar>
  )
}

interface IUserCardButtonLattesProps extends LinkProps {
  children?: string
}

function UserCardButtonLattes({
  children = 'Acessar Currículo Lattes',
  href,
  ...rest
}: IUserCardButtonLattesProps) {
  return (
    <Link href={href} target="_blank" {...rest} className="w-full">
      <Button className="group flex h-fit w-full items-center gap-2 py-3 font-bold">
        {children}
        <ArrowRightIcon className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
      </Button>
    </Link>
  )
}

function UserCardSkeleton() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 p-6">
      <Skeleton className="flex size-40 items-center justify-center rounded-full ring-4 ring-secondary/20">
        <ImageIcon className="size-10 text-background" />
      </Skeleton>

      <div className="flex w-full grow flex-col items-center justify-between gap-2">
        <Skeleton className="h-5 w-full rounded-full" />
        <Skeleton className="mx-auto h-4 w-26.5 rounded-full" />
      </div>
    </div>
  )
}

export {
  UserCard,
  UserCardButtonLattes,
  UserCardContent,
  UserCardImage,
  UserCardRedLine,
  UserCardSkeleton,
  UserCardWrapper,
}
