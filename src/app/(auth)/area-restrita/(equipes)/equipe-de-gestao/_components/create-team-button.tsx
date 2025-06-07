import Link from "next/link";
import { Button } from "@components/ui/button";
import { Plus } from "lucide-react";

export function CreateTeamButton() {
  return (
    <Link href="/area-restrita/equipe-de-gestao/cadastrar">
      <Button className="cursor-pointer">
        <Plus />
        Adicionar equipe
      </Button>
    </Link>
  );
}
