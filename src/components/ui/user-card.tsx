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
    <Card className="flex w-full flex-1 flex-col items-center justify-center gap-8 border-none bg-background shadow-none">
      {children}
    </Card>
  )
}

function UserCardContent({ children }: IUserCardProps) {
  return (
    <CardContent className="flex w-full flex-grow flex-col items-center justify-between gap-8">
      {children}
    </CardContent>
  )
}

function UserCardImage({ alt, src, ...rest }: ImageProps) {
  return (
    <Avatar className="relative size-30 rounded-full shadow-2xl ring-4 ring-primary/20">
      <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-r from-primary to-red-600 opacity-20 blur-lg" />
      <AvatarImage
        alt={alt}
        className="absolute h-full w-full rounded-full object-cover"
        src={src as string}
        {...rest}
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent" />
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
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <Skeleton className="flex h-48 w-48 items-center justify-center rounded-full dark:bg-gray-700">
        <ImageIcon />
      </Skeleton>
      <Skeleton className="h-7 w-full rounded-full" />
      <Skeleton className="h-4 w-full rounded-full" />
    </div>
  )
}

export {
  UserCard,
  UserCardButtonLattes,
  UserCardContent,
  UserCardImage,
  UserCardSkeleton,
  UserCardWrapper,
}
