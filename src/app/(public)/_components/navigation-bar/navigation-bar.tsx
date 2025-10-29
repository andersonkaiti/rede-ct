'use client'

import { AnimatedThemeToggler } from '@components/ui/animated-theme-toggler'
import { Button } from '@components/ui/button'
import { useAuth } from '@hooks/use-auth.hook'
import { cn } from '@utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import type { NavigationLink as NavigationLinkType } from 'types/navigation-link'
import { Dropdown } from './dropdown'
import { useNavigationBarDropdown } from './hooks/use-navigation-bar-dropdown.hook'
import { useNavigationBar } from './hooks/use-navigation-bar.hook'
import { Menu } from './menu'
import { NavigationLink } from './navigation-link'
import { navigationLinks } from './navigation-links'

export function NavigationBar() {
  const {
    showNavigationBar,
    setShowNavigationBar,
    navigationBarRef,
    activeIndex,
    setActiveIndex,
  } = useNavigationBar()

  const {
    hovering,
    setHovering,
    leftOffset,
    heightOffset,
    onMouseEnter,
    refs,
  } = useNavigationBarDropdown()

  const { isAuthenticated } = useAuth()

  return (
    <header
      className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-b-gray-200/10 bg-background/60 p-4 shadow-md backdrop-blur-md"
      ref={navigationBarRef}
    >
      <Menu
        setShowNavigationBar={setShowNavigationBar}
        showNavigationBar={showNavigationBar}
      />

      <Link className="2lg:flex hidden items-center gap-2 md:pr-3" href="/">
        <Image
          alt="Rede CT"
          className="invert-100 dark:invert-0"
          height={25}
          priority
          src="/images/favicon.png"
          width={25}
        />

        <span className="font-semibold text-lg">RedeCT</span>
      </Link>

      <nav
        className={cn(
          'absolute 2lg:sticky top-16 left-0 flex 2lg:h-fit h-[calc(100vh-4rem)] 2lg:min-h-fit w-full 2lg:flex-row flex-col items-center 2lg:justify-end gap-2 2lg:overflow-visible overflow-y-auto 2lg:bg-transparent bg-background/95 p-4 2lg:shadow-none 2lg:backdrop-blur-none backdrop-blur-md transition-all ease-in-out',
          !showNavigationBar && '-left-full'
        )}
        onMouseLeave={() => setHovering(null)}
      >
        {navigationLinks.map((link: NavigationLinkType, index: number) => (
          <NavigationLink
            activeIndex={activeIndex}
            hovering={hovering}
            index={index}
            key={link.label}
            link={link}
            onMouseEnter={onMouseEnter}
            setActiveIndex={setActiveIndex}
            setShowNavigationBar={setShowNavigationBar}
            showNavigationBar={showNavigationBar}
          />
        ))}

        {!isAuthenticated() && (
          <Link
            className="group inline-flex h-9 2lg:w-fit w-full items-center justify-between 2lg:rounded-full rounded-md px-4 py-2 text-sm outline-none transition-[color,box-shadow] hover:bg-gray-400/25 hover:text-red-200-foreground focus:bg-gray-400/25 focus:text-red-200-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-gray-400/25 data-[state=open]:text-red-200-foreground data-[state=open]:focus:bg-gray-400/25 data-[state=open]:hover:bg-gray-400/25 dark:text-muted-foreground"
            href="/sign-in"
            onClick={() => setShowNavigationBar(false)}
          >
            Entrar
          </Link>
        )}

        {isAuthenticated() && (
          <Link
            className="group inline-flex h-9 2lg:w-fit w-full items-center justify-between 2lg:rounded-full rounded-md px-4 py-2 text-sm outline-none transition-[color,box-shadow] hover:bg-gray-400/25 hover:text-foreground hover:text-red-200-foreground focus:bg-gray-400/25 focus:text-red-200-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-gray-400/25 data-[state=open]:text-red-200-foreground data-[state=open]:focus:bg-gray-400/25 data-[state=open]:hover:bg-gray-400/25 dark:text-muted-foreground"
            href="/area-restrita"
          >
            Área restrita
          </Link>
        )}

        {hovering && (
          <Dropdown
            heightOffset={heightOffset}
            hovering={hovering}
            leftOffset={leftOffset}
            navigationLinks={navigationLinks}
            refs={refs}
          />
        )}
      </nav>

      <Button asChild className="size-8" variant="ghost">
        <AnimatedThemeToggler />
      </Button>
    </header>
  )
}
