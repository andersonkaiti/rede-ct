"use client";

import { Button } from "@components/ui/button";
import { Dialog, DialogTrigger } from "@components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";

import { CreateInMemoriamForm } from "./create-in-memoriam-form";

export function CreateInMemoriamButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus />
          Cadastrar In Memoriam
        </Button>
      </DialogTrigger>
      <CreateInMemoriamForm setIsOpen={setIsOpen} />
    </Dialog>
  );
}
