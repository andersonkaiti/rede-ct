"use client";

import { registerNews } from "@actions/news/register";
import { redirect } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

export function useRegisterNews() {
  const [state, formAction, isLoading] = useActionState(registerNews, null);

  const [preview, setPreview] = useState<string | null>(null);

  function handleImage(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setPreview(imageUrl);
    }
  }

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
    preview,
    handleImage,
  };
}
