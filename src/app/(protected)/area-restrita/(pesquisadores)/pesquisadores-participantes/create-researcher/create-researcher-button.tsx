"use client";

import { Button } from "@components/ui/button";
import { Dialog, DialogTrigger } from "@components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";

import { CreateResearcherForm } from "./create-researcher-form";

export function CreateResearcherButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus />
          Cadastrar pesquisador participante
        </Button>
      </DialogTrigger>
      <CreateResearcherForm setIsOpen={setIsOpen} />
    </Dialog>
  );
}
