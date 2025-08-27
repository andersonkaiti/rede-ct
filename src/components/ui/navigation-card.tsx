import { cn } from '@utils/cn'
import { cva } from 'class-variance-authority'
import { ArrowRightIcon } from 'lucide-react'
import Link, { type LinkProps } from 'next/link'

const navigationCardVariants = cva(
  'group flex items-center justify-between rounded-md transition-colors',
  {
    variants: {
      variant: {
        default: [
          'gap-4 p-6 text-justify',
          'dark:border dark:border-zinc-800',
          'shadow-[0_0_10px_rgba(0,0,0,0.1)]',
          'transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl',
          'hover:bg-zinc-100 dark:hover:bg-zinc-800/60',
        ],
        red: [
          'border border-red-600 bg-primary/10 p-10 text-primary',
          'hover:bg-primary/20 md:p-10',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const arrowIconVariants = cva(
  'transition-all duration-300 group-hover:translate-x-1',
  {
    variants: {
      variant: {
        default: 'text-white',
        red: 'text-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

type NavigationCardVariant = 'default' | 'red'

interface INavigationCardProps
  extends LinkProps,
    React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  variant?: NavigationCardVariant
}

export function NavigationCard({
  children,
  href,
  className,
  variant = 'default',
  ...props
}: INavigationCardProps) {
  return (
    <Link className="group" href={href} {...props}>
      <div className={cn(navigationCardVariants({ variant }), className)}>
        {children}
        <div className="ml-auto">
          <ArrowRightIcon className={cn(arrowIconVariants({ variant }))} />
        </div>
      </div>
    </Link>
  )
}
