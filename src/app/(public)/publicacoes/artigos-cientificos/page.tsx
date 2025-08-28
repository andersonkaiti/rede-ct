import { Building } from '@components/building'
import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import { Card, CardFooter, CardHeader, CardTitle } from '@components/ui/card'
import { FileText } from 'lucide-react'
import Link from 'next/link'

export default function ArtigosCientificos() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <FileText className="!size-7" />
          </Badge>
          <h1 className="title-2">Congressos da RedeCT</h1>
        </div>
        <p className="text-justify text-muted-foreground">
          Nesta seção (
          <span className="font-bold text-primary">AINDA EM CONSTRUÇÃO</span>)
          serão publicadas as apresentações e links de acesso a artigos
          científicos publicados em periódicos e que sejam de interesse dos
          Pesquisadores Filiados à RedeCT (artigos com temas relacionados aos
          Povos Tradicionais).{' '}
          <span className="font-bold text-primary">
            ESTA ÁREA AINDA ESTÁ EM CONSTRUÇÃO.
          </span>
        </p>
      </header>

      <section className="space-y-8">
        <h2 className="title-3">
          Listagem de Artigos Científicos de Interesse{' '}
          <span className="text-primary">
            (Artigos Publicados em Periódicos/Revistas Científicas)
          </span>
        </h2>
        <p className="text-muted-foreground">
          Nesta área, a RedeCT traz alguns artigos publicados em periódicos e
          que são de alto interesse dos pesquisadores da RedeCT.
        </p>

        <Card className="border-l-4 border-l-primary transition-all duration-200 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="font-semibold text-muted-foreground">
              CARVALHO, José Jorge de. Notório saber para os Mestres e Mestras
              dos Povos e Comunidades Tradicionais: uma revolução no mundo
              acadêmico brasileiro. Revista UFMG, v.28, n.1, p. 54-77, jan./abr.
              2021. Belo Horizonte/MG: UFMG, 2021.
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <Link
              href="https://periodicos.ufmg.br/index.php/revistadaufmg/article/view/29103"
              target="_blank"
            >
              <Button className="font-bold">Acessar artigo</Button>
            </Link>
          </CardFooter>
        </Card>
      </section>

      <Building>
        A RedeCT está desenvolvendo o sistema de avaliação e certificação. Em
        breve, você poderá submeter seus artigos para análise.
      </Building>
    </main>
  )
}
