import { Button } from "@components/ui/button";
import * as Dialog from "@components/ui/dialog";
import { Trash } from "lucide-react";

export interface IDeleteDialogProps {
  onDelete: () => void;
}

export function DeleteDialog({ onDelete }: IDeleteDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="ghost" className="cursor-pointer">
          <Trash />
          Excluir
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Excluir equipe</Dialog.Title>
          <Dialog.Description>
            Tem certeza de que deseja deletar essa equipe?
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="ghost" className="cursor-pointer">
              Cancelar
            </Button>
          </Dialog.Close>
          <Button
            variant="default"
            className="cursor-pointer"
            onClick={onDelete}
          >
            Excluir
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
