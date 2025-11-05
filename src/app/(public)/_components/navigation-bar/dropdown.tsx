import { cn } from '@utils/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavigationLink as NavigationLinkType } from '@/@types/navigation-link'

import { NavigationBarIcon } from './navigation-bar-icon'

interface IDropdownProps {
  leftOffset: number | null
  heightOffset: number | null
  navigationLinks: NavigationLinkType[]
  hovering: number
  refs: React.RefObject<(HTMLElement | null)[]>
}

export function Dropdown({
  heightOffset,
  leftOffset,
  hovering,
  navigationLinks,
  refs,
}: IDropdownProps) {
  const PADDING_TWO = 8
  const pathname = usePathname()

  function getTransformClass(
    hoveringIndex: number,
    currentIndex: number
  ): string {
    if (hoveringIndex === currentIndex) {
      return 'transform-none'
    }

    if (hoveringIndex > currentIndex) {
      return '-translate-x-24'
    }

    return 'translate-x-24'
  }

  function isCurrentPath(path?: string) {
    if (!path) {
      return false
    }

    return pathname === path || (path !== '/' && pathname.startsWith(path))
  }

  return (
    <div
      className={cn(
        'absolute top-14 w-fit overflow-hidden rounded-lg border border-background-foreground/40 bg-background p-2 shadow transition-all duration-300'
      )}
      style={{
        left: leftOffset || 0,
        minHeight: (heightOffset || 0) + PADDING_TWO * 2,
        right: '1rem',
      }}
    >
      {navigationLinks.map(
        ({ children }: NavigationLinkType, index: number) => (
          <div
            className={cn(
              'flex-col gap-2 transition-opacity',
              hovering === index ? 'flex' : 'hidden',
              getTransformClass(hovering, index)
            )}
            key={index}
            ref={(element) => {
              refs.current[index] = element
            }}
          >
            {children?.map(
              (
                { path, label, icon }: NavigationLinkType,
                childIndex: number
              ) => (
                <Link
                  className={cn(
                    'group flex items-center gap-2 truncate rounded-md p-2 text-muted-foreground text-sm transition-colors hover:text-foreground',
                    isCurrentPath(path) && 'text-foreground'
                  )}
                  href={path as string}
                  key={`${index}-${childIndex}`}
                >
                  <NavigationBarIcon icon={icon} />
                  {label}
                </Link>
              )
            )}
          </div>
        )
      )}
    </div>
  )
}
