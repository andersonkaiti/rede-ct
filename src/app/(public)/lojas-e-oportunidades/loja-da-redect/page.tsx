import { Building } from '@components/ui/building'
import { ShoppingCart } from 'lucide-react'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'

export default function LojaDaRedeCT() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <ShoppingCart />
        </PageHeaderIcon>

        <PageHeaderTitle>Loja da RedeCT</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Este é um PROJETO que, com a transparência necessária, tem 3 objetivos:
        (1) auxiliar povos e comunidades tradicionais na comercialização de
        produtos artesanais, (2) promover a RedeCT e o Selo de Identificação de
        Origem Tradicional e (3) dar sustentabilidade aos trabalhos da própria
        Rede junto às comunidades tradicionais. (PROJETO AINDA EM FASE DE
        PLANEJAMENTO).
      </PageDescription>

      <footer>
        <Building>Em breve...</Building>
      </footer>
    </PageContainer>
  )
}
