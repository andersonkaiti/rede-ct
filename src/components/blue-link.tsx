import { LinkIcon } from 'lucide-react'
import Link, { type LinkProps } from 'next/link'

interface IRedLinkProps extends LinkProps {
  children: React.ReactNode
}

export function RedLink({ children, ...rest }: IRedLinkProps) {
  return (
    <Link
      className="flex items-center justify-center space-x-2 rounded-lg border border-primary/20 bg-primary/10 p-4 px-6 py-3 text-center text-primary transition-all hover:border-primary/30 hover:bg-primary/20 hover:shadow-md"
      {...rest}
    >
      <LinkIcon className="h-5 w-5" />
      <span className="font-medium">{children}</span>
    </Link>
  )
}
