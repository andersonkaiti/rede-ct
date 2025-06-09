"use client";

import { Button } from "@components/ui/button";
import * as Dialog from "@components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

import { CreateComiteLegitimadorForm } from "./create-team-form";

interface ICreateComiteLegitimadorButtonProps {
  children: React.ReactNode;
}

export function CreateComiteLegitimadorButton({
  children,
}: ICreateComiteLegitimadorButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button className="cursor-pointer">
          <PlusIcon className="h-4 w-4" />
          {children}
        </Button>
      </Dialog.Trigger>
      <CreateComiteLegitimadorForm setIsOpen={setIsOpen} />
    </Dialog.Root>
  );
}
