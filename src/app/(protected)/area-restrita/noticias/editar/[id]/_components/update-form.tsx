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
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@components/ui/page-container";
import { Loader2, Newspaper } from "lucide-react";
import { INews } from "types/news";

import { ErrorMessage } from "../../../_components/error-message";
import { useUpdateNews } from "../../../_hooks/use-update-news.hook";

interface IUpdateFormProps {
  news: INews;
}

export function UpdateForm({
  news: { title, content, id, image_url },
}: IUpdateFormProps) {
  const { state, formAction, isLoading } = useUpdateNews({
    id,
    image_url,
  });

  const hasErrors = state && "errors" in state;

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Editar Notícia</PageTitle>
          <PageDescription>
            Preencha os campos abaixo para atualizar a notícia
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <Card className="rounded-md shadow-xs">
        <CardHeader className="flex items-center gap-2">
          <Newspaper className="text-primary !size-5" />
          <CardTitle>Atualizar Notícia</CardTitle>
        </CardHeader>
        <CardContent>
          <PageForm action={formAction}>
            <PageFormContent>
              <PageFormContentField>
                <Label>
                  Título <span className="text-red-500">*</span>
                </Label>

                <Input placeholder="Título" name="title" defaultValue={title} />

                {hasErrors && state?.errors?.title && (
                  <ErrorMessage state={state} inputName="title" />
                )}
              </PageFormContentField>

              <PageFormContentField>
                <Label>
                  Texto <span className="text-red-500">*</span>
                </Label>

                <Input
                  placeholder="Texto"
                  name="content"
                  defaultValue={content}
                />

                {hasErrors && state?.errors?.content && (
                  <ErrorMessage state={state} inputName="content" />
                )}
              </PageFormContentField>

              <PageFormContentField>
                <Label>
                  Imagem <span className="text-red-500">*</span>
                </Label>

                <FileUpload maxSizeMB={50} imageUrl={image_url} />
              </PageFormContentField>

              <Button type="submit" className="cursor-pointer">
                {isLoading && <Loader2 className="size-4 animate-spin" />}
                Editar notícia
              </Button>
            </PageFormContent>
          </PageForm>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
