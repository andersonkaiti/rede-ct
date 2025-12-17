import { FileTextIcon } from 'lucide-react'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { RegimentsList } from './_components/regiments-list'

export default function Regiments() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <FileTextIcon className="size-7" />
        </PageHeaderIcon>

        <PageHeaderTitle>Regimentos</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Conheça os regimentos e documentos que norteiam o funcionamento da Rede
        CT.
      </PageDescription>

      <RegimentsList />
    </PageContainer>
  )
}
