import { Card } from '@components/ui/card'
import { Copy } from '@components/ui/copy'

export function InstituteDataCard() {
  return (
    <Card className="grid grid-cols-1 gap-8 rounded-xl p-7 text-center shadow-lg lg:grid-cols-3 lg:p-14">
      <div className="space-y-2">
        <h3 className="text-foreground">Razão Social</h3>
        <h3 className="title-3">Social Desenvolvimento Humano e Comunitário</h3>
      </div>
      <div className="space-y-2">
        <h3 className="text-foreground">Nome Fantasia</h3>
        <h3 className="title-3">
          Instituto de Pesquisas Amazônicas e de Povos Tradicionais
        </h3>
      </div>
      <div className="space-y-2">
        <h3 className="text-foreground">Identificações Alternativas</h3>
        <h3 className="title-3">
          SocialDHC, OSCIP SocialDHC, OSCIP Instituto, OSCIP RedeCT
        </h3>
      </div>
      <div className="space-y-2">
        <h3 className="text-foreground">CNPJ</h3>
        <Copy className="title-3">05.375.958/0001-80</Copy>
      </div>
      <div className="space-y-2">
        <h3 className="text-foreground">Data de Criação</h3>
        <h3 className="title-3">02 de setembro de 2002</h3>
      </div>
      <div className="space-y-2">
        <h3 className="text-foreground">Data de Qualificação como OSCIP</h3>
        <h3 className="title-3">14/04/2003</h3>
      </div>
      <div className="space-y-2">
        <h3 className="text-foreground">
          Data de Apresentação Pública da RedeCT
        </h3>
        <h3 className="title-3">22/05/2018</h3>
      </div>
      <div className="space-y-2">
        <h3 className="text-foreground">Sede</h3>
        <h3 className="title-3">
          Porto Nacional (estado do Tocantins - Amazônia legal brasileira)
        </h3>
      </div>
      <div className="space-y-2">
        <h3 className="text-foreground">Escritório Regional</h3>
        <h3 className="title-3">Bauru (estado de São Paulo - Brasil)</h3>
      </div>
    </Card>
  )
}
