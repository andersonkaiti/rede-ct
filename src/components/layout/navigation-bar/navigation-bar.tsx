"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useNavigationBarDropdown } from "@hooks/navigation-bar-dropdown.hook";
import { useNavigationBar } from "@hooks/navigation-bar.hook";
import { NavigationLink as NavigationLinkType } from "types/navigation-link";
import { Dropdown } from "./dropdown";
import { Menu } from "./menu";
import { NavigationLink } from "./navigation-link";
import { navigationLinks } from "./navigation-links";

export function NavigationBar() {
  const {
    showNavigationBar,
    setShowNavigationBar,
    navigationBarRef,
    activeIndex,
    setActiveIndex,
  } = useNavigationBar();

  const {
    hovering,
    setHovering,
    leftOffset,
    heightOffset,
    onMouseEnter,
    refs,
  } = useNavigationBarDropdown();

  return (
    <header
      className="sticky top-0 z-50 flex h-21 items-center justify-between bg-white p-4 shadow-md"
      ref={navigationBarRef}
    >
      <Menu
        showNavigationBar={showNavigationBar}
        setShowNavigationBar={setShowNavigationBar}
      />

      <Link href="/">
        <Image src="/images/logo.png" width={100} height={100} alt="Rede CT" />
      </Link>

      <nav
        onMouseLeave={() => setHovering(null)}
        className={cn(
          "2lg:sticky 2lg:h-fit 2lg:shadow-none 2lg:flex-row 2lg:gap-4 2lg:justify-end 2lg:min-h-fit 2lg:overflow-visible absolute top-21 left-0 flex h-[calc(100vh-5.25rem)] w-full flex-col items-center gap-2 overflow-y-auto bg-white p-4 transition-all ease-in-out",
          !showNavigationBar && "-left-full",
        )}
      >
        {navigationLinks.map((link: NavigationLinkType, index: number) => (
          <NavigationLink
            link={link}
            hovering={hovering}
            onMouseEnter={onMouseEnter}
            index={index}
            key={link.label}
            showNavigationBar={showNavigationBar}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}

        <SignedOut>
          <Link
            href="/sign-in"
            className="group 2lg:rounded-full bg-background hover:text-red-200-foreground focus:text-red-200-foreground data-[state=open]:text-red-200-foreground focus-visible:ring-ring/50 2lg:w-fit inline-flex h-9 w-full items-center justify-between rounded-md px-4 py-2 text-sm font-medium transition-[color,box-shadow] outline-none hover:bg-gray-400/25 focus:bg-gray-400/25 focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-gray-400/25 data-[state=open]:hover:bg-gray-400/25 data-[state=open]:focus:bg-gray-400/25"
          >
            ENTRAR
          </Link>
        </SignedOut>

        <SignedIn>
          <Link
            href="/area-restrita"
            className="group 2lg:rounded-full bg-background hover:text-red-200-foreground focus:text-red-200-foreground data-[state=open]:text-red-200-foreground focus-visible:ring-ring/50 2lg:w-fit inline-flex h-9 w-full items-center justify-between rounded-md px-4 py-2 text-sm font-medium transition-[color,box-shadow] outline-none hover:bg-gray-400/25 focus:bg-gray-400/25 focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-gray-400/25 data-[state=open]:hover:bg-gray-400/25 data-[state=open]:focus:bg-gray-400/25"
          >
            ÁREA RESTRITA
          </Link>
        </SignedIn>

        {hovering && (
          <Dropdown
            leftOffset={leftOffset}
            heightOffset={heightOffset}
            hovering={hovering}
            navigationLinks={navigationLinks}
            refs={refs}
          />
        )}
      </nav>
    </header>
  );
}
