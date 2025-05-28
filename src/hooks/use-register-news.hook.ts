"use client";

import { redirect } from "next/navigation";
import { useActionState } from "react";
import { useEffect } from "react";
import { registerNews } from "@actions/news/register";
import { toast } from "sonner";

export function useRegisterNews() {
  const [state, formAction, isLoading] = useActionState(registerNews, null);

  useEffect(() => {
    if (state && "success" in state) {
      toast.success(state.success, {
        description: "Notícia cadastrada com sucesso",
      });

      redirect("/area-restrita/noticias");
    }
  }, [state]);

  return {
    state,
    formAction,
    isLoading,
  };
}
