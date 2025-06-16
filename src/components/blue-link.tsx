import { LinkIcon } from "lucide-react";
import Link, { LinkProps } from "next/link";

export interface IRedLinkProps extends LinkProps {
  children: React.ReactNode;
}

export function RedLink({ children, ...rest }: IRedLinkProps) {
  return (
    <Link
      className="border-primary/20 bg-primary/10 text-primary hover:border-primary/30 hover:bg-primary/20 flex items-center justify-center space-x-2 rounded-lg border p-4 px-6 py-3 text-center transition-all hover:shadow-md"
      {...rest}
    >
      <LinkIcon className="h-5 w-5" />
      <span className="font-medium">{children}</span>
    </Link>
  );
}
