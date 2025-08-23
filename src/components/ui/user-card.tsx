import { Button } from '@components/ui/button'
import { Skeleton } from '@components/ui/skeleton'
import { ArrowRightIcon } from 'lucide-react'
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
    <Card className="flex w-full flex-1 flex-col items-center justify-center gap-8 border-none shadow-none">
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
    <Skeleton>
      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700">
          <svg
            aria-hidden="true"
            className="h-10 w-10 text-gray-200 dark:text-gray-600"
            fill="currentColor"
            viewBox="0 0 20 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="h-7 w-full rounded-full bg-gray-300" />
        <div className="h-4 w-full rounded-full bg-gray-300" />
      </div>
    </Skeleton>
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
