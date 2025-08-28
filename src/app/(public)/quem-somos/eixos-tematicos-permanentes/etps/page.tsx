import { BackArrow } from '@components/back-arrow'
import { EPTAccordion } from './_components/etp-accordion'

export default function EixosTematicosPermanentesETPs() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-14 p-6 py-10 lg:p-28">
      <BackArrow />

      <header className="space-y-8">
        <h1 className="title-2">Eixos Temáticos Permanentes</h1>
        <p className="text-muted-foreground">
          Conheça os Eixos Temáticos Permanentes (ETPs) da Rede CT, suas áreas
          de atuação e os membros responsáveis por cada eixo.
        </p>
      </header>

      <EPTAccordion />
    </main>
  )
}
