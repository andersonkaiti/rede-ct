"use client";

import { useRouter } from "next/navigation";
import { Button } from "@components/ui/button";

export function SidebarBackButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className="w-full cursor-pointer bg-white text-black hover:bg-gray-200"
    >
      Voltar
    </Button>
  );
}
