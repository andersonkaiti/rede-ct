import { Button } from "@components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export function CreateNewsButton() {
  return (
    <Link href="/area-restrita/noticias/cadastrar">
      <Button variant="default" className="cursor-pointer">
        <Plus />
        Nova Notícia
      </Button>
    </Link>
  );
}
