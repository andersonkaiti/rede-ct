import { Button } from "@components/ui/button";
import { ScrollText } from "lucide-react";
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
        <div className="flex w-fit gap-4">
          <div className="relative">
            <div className="ease-in-ou mx-auto h-fit w-fit rounded-lg border-2 border-indigo-500/40 shadow-xl transition-all duration-300 group-hover:border-indigo-400 group-hover:bg-indigo-500/30 hover:border-indigo-500 hover:shadow-indigo-500/20">
              <div className="flex flex-col gap-1 p-2">
                <ScrollText />
              </div>
            </div>
          </div>
        </div>
        {children}
      </Link>
    </Button>
  );
}
