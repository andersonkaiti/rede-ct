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
              <Skeleton className="h-4 w-16 rounded-md" />
              <Skeleton className="h-9 w-full rounded-md" />
            </PageFormContentField>

            <PageFormContentField>
              <Skeleton className="h-4 w-20 rounded-md" />
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
              <Skeleton className="h-4 w-16 rounded-md" />
              <Skeleton className="h-16 w-full rounded-md" />
            </PageFormContentField>
          </PageFormContent>

          <Skeleton className="h-9 w-full rounded-md" />
        </PageForm>
      </div>
    </PageContainer>
  )
}
