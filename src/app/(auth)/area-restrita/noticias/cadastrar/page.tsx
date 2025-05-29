"use client";

import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { useRegisterNews } from "@hooks/use-register-news.hook";
import { ErrorMessage } from "../_components/error-message";
import { ImageInput } from "../_components/image-input";

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
              <Input placeholder="Título" name="title" />

              {hasErrors && state?.errors?.title && (
                <ErrorMessage state={state} inputName="title" />
              )}
            </div>

            <div className="space-y-2">
              <Textarea placeholder="Texto" name="content" />

              {hasErrors && state?.errors?.content && (
                <ErrorMessage state={state} inputName="content" />
              )}
            </div>

            <div className="space-y-2">
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
              {!isLoading ? (
                "Cadastrar notícia"
              ) : (
                <div className="flex items-center gap-2">
                  Cadastrando notícia...
                  <div
                    role="status"
                    className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  >
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !border-0 !p-0 !whitespace-nowrap ![clip:rect(0,0,0,0)]"></span>
                  </div>
                </div>
              )}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
