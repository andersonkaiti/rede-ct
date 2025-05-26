"use client";

import { Button } from "@components/ui/button";
import * as Dialog from "@components/ui/dialog";
import { Trash } from "lucide-react";

export function DeleteDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="ghost" className="cursor-pointer text-xs">
          Excluir
          <Trash />
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Excluir notícia</Dialog.Title>
          <Dialog.Description>
            Tem certeza que deseja excluir a notícia?
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="ghost" className="cursor-pointer">
              Cancelar
            </Button>
          </Dialog.Close>
          <Button variant="default" className="cursor-pointer">
            Excluir
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
