import { Button } from "@components/ui/button";
import { ArrowRightIcon, ScrollText } from "lucide-react";
import Link, { LinkProps } from "next/link";

export interface ICardButtonLattesProps extends LinkProps {
  children?: string;
}

export function CardButtonLattes({
  children = "Acessar currículo Lattes",
  href,
  ...rest
}: ICardButtonLattesProps) {
  return (
    <Button asChild className="group">
      <Link
        href={href}
        target="_blank"
        {...rest}
        className="flex h-fit items-center gap-2"
      >
        <ScrollText />
        {children}
        <ArrowRightIcon className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
      </Link>
    </Button>
  );
}
