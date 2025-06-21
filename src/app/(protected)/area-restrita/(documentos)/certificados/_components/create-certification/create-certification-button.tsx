import { Button } from "@components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import { Plus } from "lucide-react";

export function CreateCertificationButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          Cadastrar certificado
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastrar certificado</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Cadastre um novo certificado para o seu usuário.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
