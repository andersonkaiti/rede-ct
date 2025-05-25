import Link, { LinkProps } from "next/link";
import { LinkIcon } from "lucide-react";

export interface IBlueLinkProps extends LinkProps {
  children: React.ReactNode;
}

export function BlueLink({ children, ...rest }: IBlueLinkProps) {
  return (
    <Link
      className="flex items-center justify-center space-x-2 rounded-lg border border-blue-100 bg-blue-50 p-4 px-6 py-3 text-center text-blue-700 transition-all hover:border-blue-300 hover:bg-blue-50 hover:shadow-md"
      {...rest}
    >
      <LinkIcon className="h-5 w-5" />
      <span className="font-medium">{children}</span>
    </Link>
  );
}
