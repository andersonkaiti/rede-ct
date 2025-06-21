"use client";

import { Badge } from "@components/ui/badge";
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
import { Info, Trash } from "lucide-react";

interface IDeleteDialogProps {
  handleRemove: () => void;
}

export function DeleteDialog({ handleRemove }: IDeleteDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex w-full cursor-pointer justify-between text-xs"
        >
          Excluir
          <Trash />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Badge className="bg-primary/10 text-primary rounded-full p-2">
              <Info className="!size-5" />
            </Badge>
            <DialogTitle>Tem certeza de que deseja excluir?</DialogTitle>
          </div>
          <DialogDescription>
            Esta ação não pode ser desfeita.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancelar</Button>
          </DialogClose>
          <Button onClick={handleRemove}>Excluir</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
