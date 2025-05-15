import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "@utils/cn";
import { Button, buttonVariants } from "@components/ui/button";

function Root({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function Content({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function Item({ ...props }: React.ComponentProps<"li">) {
  return (
    <li data-slot="pagination-item" className="cursor-pointer" {...props} />
  );
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

function Link({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}

function First({ className, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link aria-label="Ir para a primeira página" size="default" {...props}>
      <ChevronsLeftIcon className="size-4" />
    </Link>
  );
}

function Last({ className, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link aria-label="Ir para a última página" size="default" {...props}>
      <ChevronsRightIcon className="size-4" />
    </Link>
  );
}

function Previous({ className, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link
      aria-label="Ir para a página anterior"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      {/* <span className="hidden sm:block">Anterior</span> */}
    </Link>
  );
}

function Next({ className, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link
      aria-label="Ir para a próxima página"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      {/* <span className="hidden sm:block">Próximo</span> */}
      <ChevronRightIcon />
    </Link>
  );
}

function Ellipsis({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export { Root, Content, Item, Link, First, Last, Previous, Next, Ellipsis };
