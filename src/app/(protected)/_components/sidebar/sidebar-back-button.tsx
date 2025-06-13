"use client";

import { Button } from "@components/ui/button";
import { useRouter } from "next/navigation";

export function SidebarBackButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.replace("/")}
      className="w-full cursor-pointer bg-white text-black hover:bg-gray-200"
    >
      Voltar
    </Button>
  );
}
