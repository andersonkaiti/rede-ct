"use client";

import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
import { Loader2 } from "lucide-react";

import { ErrorMessage } from "../_components/error-message";
import { ImageInput } from "../_components/image-input";
import { useRegisterNews } from "../_hooks/use-register-news.hook";

export default function CadastrarNoticia() {
  const { state, formAction, isLoading, preview, handleImage } =
    useRegisterNews();

  const hasErrors = state && "errors" in state;

  return (
    <div className="mx-auto flex w-full flex-col justify-center gap-2 p-4 py-10 md:gap-12.5">
      <header className="space-y-4">
        <h1 className="title-2">Cadastrar Notícia</h1>
      </header>
      <main>
        <form action={formAction}>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label>Título</Label>
              <Input placeholder="Título" name="title" />

              {hasErrors && state?.errors?.title && (
                <ErrorMessage state={state} inputName="title" />
              )}
            </div>

            <div className="space-y-2">
              <Label>Texto</Label>
              <Textarea placeholder="Texto" name="content" />

              {hasErrors && state?.errors?.content && (
                <ErrorMessage state={state} inputName="content" />
              )}
            </div>

            <div className="space-y-2">
              <Label>Imagem</Label>
              <ImageInput preview={preview} handleImage={handleImage} />

              {hasErrors && state?.errors?.image && (
                <ErrorMessage state={state} inputName="image" />
              )}
            </div>

            <Button
              type="submit"
              className="cursor-pointer"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="size-4 animate-spin" />}
              Cadastrar notícia
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
