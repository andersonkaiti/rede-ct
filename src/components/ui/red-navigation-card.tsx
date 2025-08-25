import { cn } from '@utils/cn'
import { ArrowRightIcon } from 'lucide-react'
import Link, { type LinkProps } from 'next/link'

interface INavigationCardProps
  extends LinkProps,
    React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

export function RedNavigationCard({
  children,
  href,
  className,
  ...props
}: INavigationCardProps) {
  return (
    <Link className="group" href={href} {...props}>
      <div
        className={cn(
          'flex items-center justify-between rounded-md bg-primary p-10 text-primary-foreground md:p-10',
          className
        )}
      >
        {children}
        <div className="ml-auto">
          <ArrowRightIcon className="text-white transition-all duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
