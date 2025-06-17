"use client";

import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "./ui/button";

export function BackArrow() {
  const router = useRouter();

  return (
    <Button
      className="group flex w-fit cursor-pointer items-center gap-4"
      variant="ghost"
      onClick={() => router.back()}
    >
      <ArrowLeftIcon className="h-5 w-5 transition-all duration-300" />
      <div className="text-sm font-medium transition-all duration-300">
        Voltar
      </div>
    </Button>
  );
}
