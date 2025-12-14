import { Badge } from '@components/ui/badge'
import { Building } from '@components/ui/building'
import { ShoppingCart } from 'lucide-react'

export default function LojaDaRedeCT() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <ShoppingCart />
          </Badge>
          <h1 className="title-2">Loja da RedeCT</h1>
        </div>
        <p className="text-justify text-lg text-muted-foreground">
          Este é um PROJETO que, com a transparência necessária, tem 3
          objetivos: (1) auxiliar povos e comunidades tradicionais na
          comercialização de produtos artesanais, (2) promover a RedeCT e o Selo
          de Identificação de Origem Tradicional e (3) dar sustentabilidade aos
          trabalhos da própria Rede junto às comunidades tradicionais. (PROJETO
          AINDA EM FASE DE PLANEJAMENTO).
        </p>
      </header>

      <footer>
        <Building>Em breve...</Building>
      </footer>
    </main>
  )
}
