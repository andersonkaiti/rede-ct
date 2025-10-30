import { Button } from '@components/ui/button'
import { Label } from '@components/ui/label'
import {
  PageContainer,
  PageDescription,
  PageForm,
  PageFormContent,
  PageFormContentField,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from '@components/ui/page-container'
import { Skeleton } from '@components/ui/skeleton'
import { ImageUpIcon } from 'lucide-react'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Cadastrar Notícia</PageTitle>
          <PageDescription>
            Preencha os campos abaixo para cadastrar uma nova notícia.
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <div>
        <PageForm>
          <PageFormContent>
            <PageFormContentField>
              <Label>
                Título <span className="text-primary">*</span>
              </Label>

              <Skeleton className="h-9 w-full rounded-md" />
            </PageFormContentField>

            <PageFormContentField>
              <Label>
                Imagem <span className="text-primary">*</span>
              </Label>

              <Skeleton className="flex h-68 w-full items-center justify-center rounded-xl">
                <div
                  aria-hidden="true"
                  className="mb-2 flex size-11 items-center justify-center rounded-full"
                >
                  <ImageUpIcon className="size-4 opacity-60" />
                </div>
              </Skeleton>
            </PageFormContentField>

            <PageFormContentField>
              <Label>
                Texto <span className="text-primary">*</span>
              </Label>

              <Skeleton className="h-16 w-full rounded-md" />
            </PageFormContentField>
          </PageFormContent>

          <Button className="w-full cursor-pointer" type="submit">
            Cadastrar notícia
          </Button>
        </PageForm>
      </div>
    </PageContainer>
  )
}
