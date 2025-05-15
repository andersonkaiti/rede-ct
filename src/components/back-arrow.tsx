"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";

export function BackArrow() {
  const router = useRouter();

  return (
    <div
      className="group -mt-10 flex cursor-pointer items-center gap-2"
      onClick={() => router.back()}
    >
      <ArrowLeftIcon className="h-5 w-5 transition-all duration-300 group-hover:text-indigo-500" />
      <p className="text-sm font-medium transition-all duration-300 group-hover:text-indigo-500">
        Voltar
      </p>
    </div>
  );
}
