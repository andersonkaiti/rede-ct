import { BlocksIcon } from '@components/icons/blocks'
import { FileTextIcon } from '@components/icons/file-text'
import { BackArrow } from '@components/ui/back-arrow'
import { Badge } from '@components/ui/badge'
import { FiliationProcess } from './_components/cards/filiation-process'
import { ResearchersClassificationCard } from './_components/cards/researchers-classification'
import { ContactEmail } from './_components/contact-email'
import { Coordinator } from './_components/coordinator'
import { Presidency } from './_components/presidency'

export default function Affiliation() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <BackArrow href="/quem-somos/apresentacao-e-historia" />

      <section className="space-y-14">
        <div className="flex items-center justify-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <FileTextIcon className="text-primary" />
          </Badge>
          <h1 className="text-center font-bold text-3xl">
            Como se filiar à RedeCT?
          </h1>
        </div>
      </section>

      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <BlocksIcon className="text-primary" />
          </Badge>
          <h2 className="font-semibold text-2xl">A RedeCT atual</h2>
        </div>
        <div className="space-y-7">
          <p className="text-justify">
            A RedeCT é uma Rede de Pesquisadores mantida pela OSCIP SocialDHC
            (Instituto de Pesquisas Amazônicas e de Povos Tradicionais) e que
            possui sede administrativa e jurídica no município de Porto Nacional
            – Estado do Tocantins – Brasil.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Presidency />

            <Coordinator />

            <ContactEmail />
          </div>
        </div>
      </section>

      <FiliationProcess />

      <ResearchersClassificationCard />
    </main>
  )
}
