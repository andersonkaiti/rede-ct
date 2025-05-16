"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { useNavigationBarDropdown } from "@hooks/navigation-bar-dropdown.hook";
import { useNavigationBar } from "@hooks/navigation-bar.hook";
import { Dropdown } from "./dropdown";
import { Menu } from "./menu";
import { NavigationLink } from "./navigation-link";
import { NavLink, navLinks } from "./navigation-links";

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
        {navLinks.map((link: NavLink, index: number) => (
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

        {hovering && (
          <Dropdown
            leftOffset={leftOffset}
            heightOffset={heightOffset}
            hovering={hovering}
            navLinks={navLinks}
            refs={refs}
          />
        )}
      </nav>
    </header>
  );
}
