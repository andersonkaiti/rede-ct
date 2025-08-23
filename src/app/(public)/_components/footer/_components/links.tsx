import Link from 'next/link'
import type { NavigationLink } from 'types/navigation-link'

import { getAllLinks } from '../_helpers/links'

export default function Links() {
  const { firstColumn, secondColumn } = getAllLinks()

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
      <ul className="space-y-4">
        {firstColumn.map(({ path, label }: NavigationLink, index: number) => (
          <li key={index}>
            <Link
              className="group flex items-center text-sm transition-all duration-300 hover:text-primary"
              href={path as string}
            >
              <div className="mr-3 h-1 w-2 origin-left scale-x-50 rounded-full bg-primary transition-transform duration-200 group-hover:scale-x-100" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="space-y-4">
        {secondColumn.map(({ path, label }: NavigationLink, index: number) => (
          <li key={index}>
            <Link
              className="group flex items-center text-sm transition-all duration-300 hover:text-primary"
              href={path as string}
            >
              <div className="mr-3 h-1 w-2 origin-left scale-x-50 rounded-full bg-primary transition-transform duration-200 group-hover:scale-x-100" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
