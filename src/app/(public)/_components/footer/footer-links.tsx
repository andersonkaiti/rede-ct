import Link from 'next/link'
import type { NavigationLink } from '@/@types/navigation-link'
import { getAllLinks } from './links'

export function FooterLinks() {
  const { firstColumn, secondColumn } = getAllLinks()

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
      <ul className="space-y-4">
        {firstColumn.map(({ path, label }: NavigationLink, index: number) => (
          <li key={index}>
            <Link
              className="text-muted-foreground text-sm transition-all duration-300 hover:text-foreground"
              href={path as string}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="space-y-4">
        {secondColumn.map(({ path, label }: NavigationLink, index: number) => (
          <li key={index}>
            <Link
              className="text-muted-foreground text-sm transition-all duration-300 hover:text-foreground"
              href={path as string}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
