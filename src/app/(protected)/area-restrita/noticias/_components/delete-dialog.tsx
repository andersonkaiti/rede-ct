"use client";

import { Button } from "@components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import { Trash } from "lucide-react";

export interface IDeleteDialogProps {
  onDelete: () => void;
}

export function DeleteDialog({ onDelete }: IDeleteDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="cursor-pointer text-xs">
          Excluir
          <Trash />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Excluir notícia</DialogTitle>
          <DialogDescription>
            Tem certeza que deseja excluir a notícia?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" className="cursor-pointer">
              Cancelar
            </Button>
          </DialogClose>
          <Button
            variant="default"
            className="cursor-pointer"
            onClick={onDelete}
          >
            Excluir
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
