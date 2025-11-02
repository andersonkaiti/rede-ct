import { cn } from '@utils/cn'
import { ChevronDownIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavigationLink as NavigationLinkType } from '@/@types/navigation-link'

import { NavigationBarIcon } from './navigation-bar-icon'

interface INavLinkProps {
  link: NavigationLinkType
  onMouseEnter: (index: number, element: HTMLElement) => void
  hovering: number | null
  index: number
  showNavigationBar: boolean
  activeIndex: number | null
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>
  setShowNavigationBar: React.Dispatch<React.SetStateAction<boolean>>
}

export function NavigationLink({
  link: { label, children, path },
  onMouseEnter,
  hovering,
  index,
  showNavigationBar,
  activeIndex,
  setActiveIndex,
  setShowNavigationBar,
}: INavLinkProps) {
  const pathname = usePathname()
  const hasChildren = children && children?.length > 0

  const isHovered = hovering === index
  const isActived = activeIndex === index

  const isCurrent =
    path && (pathname === path || (path !== '/' && pathname.startsWith(path)))

  const isAnyChildCurrent =
    hasChildren &&
    children?.some(
      (child: NavigationLinkType) =>
        child.path &&
        (pathname === child.path ||
          (child.path !== '/' && pathname.startsWith(child.path)))
    )

  function handleMouseEnter(event: React.MouseEvent<HTMLElement>) {
    if (hasChildren && !showNavigationBar) {
      onMouseEnter(index, event.currentTarget)
    }
  }

  function handleMouseClick() {
    if (isActived) {
      setActiveIndex(null)
      return
    }

    if (hasChildren && showNavigationBar) {
      setActiveIndex(index)
    }
  }

  return (
    <div className="flex 2lg:w-fit w-full flex-col items-center">
      <Link
        className={cn(
          'group inline-flex h-9 w-full items-center justify-between 2lg:rounded-full rounded-md px-4 py-2 text-sm outline-none transition-[color,box-shadow] hover:bg-gray-400/25 hover:text-foreground hover:text-red-200-foreground focus:text-red-200-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-red-200-foreground dark:text-muted-foreground',
          (isHovered || isActived || isCurrent || isAnyChildCurrent) &&
            'text-foreground'
        )}
        data-state={isHovered || isActived ? 'open' : 'closed'}
        href={path || '#'}
        onClick={() => {
          handleMouseClick()

          if (!hasChildren) {
            setShowNavigationBar(false)
          }
        }}
        onMouseEnter={handleMouseEnter}
      >
        {label}
        {children && (
          <ChevronDownIcon
            aria-hidden="true"
            className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
          />
        )}
      </Link>

      {showNavigationBar && hasChildren && (
        <div
          className={cn(
            'flex 2lg:w-52 w-full flex-col items-center gap-1 overflow-hidden pl-5 transition-all duration-300 ease-in-out',
            isActived ? 'max-h-120 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          {children.map(
            (
              {
                path: childPath,
                label: childLabel,
                icon: childIcon,
              }: NavigationLinkType,
              childIndex: number
            ) => {
              const isChildCurrent =
                childPath &&
                (pathname === childPath ||
                  (childPath !== '/' && pathname.startsWith(childPath)))

              return (
                <Link
                  className={cn(
                    'mt-2 flex w-full items-center gap-2 2lg:rounded-full rounded-md p-2 text-center text-sm dark:text-muted-foreground',
                    isChildCurrent && 'bg-gray-400/25 text-foreground'
                  )}
                  href={childPath || '#'}
                  key={childIndex}
                  onClick={() => setShowNavigationBar(false)}
                >
                  <NavigationBarIcon icon={childIcon} />
                  {childLabel}
                </Link>
              )
            }
          )}
        </div>
      )}
    </div>
  )
}
