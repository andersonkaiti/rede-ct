import { Button } from "@components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export function CreateButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <Button className="cursor-pointer">
        <PlusIcon />
        {children}
      </Button>
    </Link>
  );
}
