import Link from "next/link";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Separator } from "@components/ui/separator";
import { Plus, Search } from "lucide-react";
import { NoticiasTable } from "./_components/table";

export default function Noticias() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center gap-2 p-4 py-10 md:gap-12.5">
      <header className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="title-2">Notícias</h1>
          <Link href="/area-restrita/noticias/cadastrar">
            <Button variant="default" className="cursor-pointer">
              <Plus />
              Nova Notícia
            </Button>
          </Link>
        </div>
        <Input placeholder="Pesquisar" className="w-full sm:w-fit">
          <Search className="h-4 w-4 text-[#B6B6B6]" />
        </Input>

        <Separator />
      </header>
      <main className="w-full">
        <NoticiasTable />
      </main>
    </div>
  );
}
