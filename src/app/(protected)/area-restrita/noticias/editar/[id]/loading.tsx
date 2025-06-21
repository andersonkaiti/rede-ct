import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
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
import { Skeleton } from "@components/ui/skeleton";
import { ImageUpIcon, Newspaper } from "lucide-react";

export default function Loading() {
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

      <Card>
        <CardHeader className="flex items-center gap-2">
          <Newspaper className="text-primary !size-5" />
          <CardTitle>Atualizar Notícia</CardTitle>
        </CardHeader>
        <Skeleton>
          <CardContent>
            <PageForm>
              <PageFormContent>
                <PageFormContentField>
                  <Label>
                    Título <span className="text-red-500">*</span>
                  </Label>

                  <div className="h-9 w-full rounded-md bg-gray-200" />
                </PageFormContentField>
                <PageFormContentField>
                  <Label>
                    Texto <span className="text-red-500">*</span>
                  </Label>

                  <div className="h-9 w-full rounded-md bg-gray-200" />
                </PageFormContentField>
                <PageFormContentField>
                  <Label>
                    Imagem <span className="text-red-500">*</span>
                  </Label>

                  <div className="flex h-52 w-full items-center justify-center rounded-xl bg-gray-200">
                    <div
                      className="mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border bg-gray-300"
                      aria-hidden="true"
                    >
                      <ImageUpIcon className="size-4 opacity-60" />
                    </div>
                  </div>
                </PageFormContentField>
              </PageFormContent>
              <CardFooter className="p-0">
                <Button type="submit" className="w-full cursor-pointer">
                  Editar notícia
                </Button>
              </CardFooter>
            </PageForm>
          </CardContent>
        </Skeleton>
      </Card>
    </PageContainer>
  );
}
