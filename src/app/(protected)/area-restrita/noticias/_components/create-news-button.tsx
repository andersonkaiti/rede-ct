import { Button } from "@components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export function CreateNewsButton() {
  return (
    <Link href="/area-restrita/noticias/cadastrar" className="w-full sm:w-fit">
      <Button variant="outline" className="w-full cursor-pointer sm:w-fit">
        <Plus />
        Nova Notícia
      </Button>
    </Link>
  );
}
