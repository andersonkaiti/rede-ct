'use client'

import { SignedIn, SignedOut } from '@clerk/nextjs'
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

  return (
    <header
      className="sticky top-0 z-50 flex 2lg:h-25 h-18 items-center justify-between bg-white p-4 shadow-md"
      ref={navigationBarRef}
    >
      <Menu
        setShowNavigationBar={setShowNavigationBar}
        showNavigationBar={showNavigationBar}
      />

      <Link href="/">
        <Image alt="Rede CT" height={100} src="/images/logo.png" width={100} />
      </Link>

      <nav
        className={cn(
          'absolute 2lg:sticky top-18 left-0 flex 2lg:h-fit h-[calc(100vh-5.25rem)] 2lg:min-h-fit w-full 2lg:flex-row flex-col items-center 2lg:justify-end 2lg:gap-4 gap-2 2lg:overflow-visible overflow-y-auto bg-white p-4 2lg:shadow-none transition-all ease-in-out',
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
            showNavigationBar={showNavigationBar}
          />
        ))}

        <SignedOut>
          <Link
            className="group inline-flex h-9 2lg:w-fit w-full items-center justify-between 2lg:rounded-full rounded-md bg-background px-4 py-2 font-medium text-sm outline-none transition-[color,box-shadow] hover:bg-gray-400/25 hover:text-red-200-foreground focus:bg-gray-400/25 focus:text-red-200-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-gray-400/25 data-[state=open]:text-red-200-foreground data-[state=open]:focus:bg-gray-400/25 data-[state=open]:hover:bg-gray-400/25"
            href="/sign-in"
          >
            ENTRAR
          </Link>
        </SignedOut>

        <SignedIn>
          <Link
            className="group inline-flex h-9 2lg:w-fit w-full items-center justify-between 2lg:rounded-full rounded-md bg-background px-4 py-2 font-medium text-sm outline-none transition-[color,box-shadow] hover:bg-gray-400/25 hover:text-red-200-foreground focus:bg-gray-400/25 focus:text-red-200-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-gray-400/25 data-[state=open]:text-red-200-foreground data-[state=open]:focus:bg-gray-400/25 data-[state=open]:hover:bg-gray-400/25"
            href="/area-restrita"
          >
            ÁREA RESTRITA
          </Link>
        </SignedIn>

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
    </header>
  )
}
