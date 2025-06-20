"use client";

import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { FileUpload } from "@components/ui/file-upload";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import {
  PageContainer,
  PageDescription,
  PageForm,
  PageFormContent,
  PageFormContentField,
  PageTitle,
} from "@components/ui/page-container";
import { Textarea } from "@components/ui/textarea";
import { Loader2, Newspaper } from "lucide-react";

import { ErrorMessage } from "../_components/error-message";
import { useRegisterNews } from "../_hooks/use-register-news.hook";

export default function CadastrarNoticia() {
  const { state, formAction, isLoading } = useRegisterNews();

  const hasErrors = state && "errors" in state;

  return (
    <PageContainer>
      <header className="space-y-4">
        <PageTitle>Informações da Notícia</PageTitle>
        <PageDescription>
          Preencha os campos abaixo para cadastrar uma nova notícia
        </PageDescription>
      </header>

      <Card className="rounded-md shadow-xs">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Newspaper className="text-primary !size-5" />
            <CardTitle>Cadastrar Notícia</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <PageForm action={formAction}>
            <PageFormContent>
              <PageFormContentField>
                <Label>
                  Título <span className="text-red-500">*</span>
                </Label>

                <Input placeholder="Digite o título da notícia" name="title" />

                {hasErrors && state?.errors?.title && (
                  <ErrorMessage state={state} inputName="title" />
                )}
              </PageFormContentField>

              <PageFormContentField>
                <Label>
                  Texto <span className="text-red-500">*</span>
                </Label>

                <Textarea
                  placeholder="Digite o conteúdo da notícia"
                  name="content"
                />

                {hasErrors && state?.errors?.content && (
                  <ErrorMessage state={state} inputName="content" />
                )}
              </PageFormContentField>

              <PageFormContentField>
                <Label>
                  Imagem <span className="text-red-500">*</span>
                </Label>

                <FileUpload maxSizeMB={50} />

                {hasErrors && state?.errors?.image && (
                  <ErrorMessage state={state} inputName="image" />
                )}
              </PageFormContentField>

              <Button
                type="submit"
                className="cursor-pointer py-6 font-normal"
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="size-4 animate-spin" />}
                Cadastrar notícia
              </Button>
            </PageFormContent>
          </PageForm>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
