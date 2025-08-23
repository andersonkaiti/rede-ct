import { Building } from '@components/building'
import { Button } from '@components/ui/button'
import { Card, CardFooter, CardHeader, CardTitle } from '@components/ui/card'
import Link from 'next/link'

export default function LivrosECapitulos() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <h1 className="title-2">Livros e Capítulos de Interesse</h1>
        <p className="text-justify text-muted-foreground">
          Nesta seção (
          <span className="font-bold text-primary">AINDA EM CONSTRUÇÃO</span>)
          serão publicadas as apresentações e links de acesso a livros e
          capítulos de interesse dos Pesquisadores Filiados da RedeCT (obras com
          temas relacionados aos Povos Tradicionais).{' '}
          <span className="font-bold text-primary">
            ESTA ÁREA AINDA ESTÁ EM CONSTRUÇÃO.
          </span>
        </p>
      </header>

      <section className="space-y-16">
        <h2 className="title-3">
          Listagem de Obras de Interesse{' '}
          <span className="text-primary">(Livros e Capítulos)</span>
        </h2>

        <Card className="border-l-4 border-l-primary transition-all duration-200 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="font-semibold text-muted-foreground">
              BRANDÃO, Carlos Rodrigues. A comunidade tradicional. In: UDRY, C.;
              EIDT, J.S. Conhecimento tradicional: conceitos e marco legal.
              Brasília/DF: Embrapa, 2015, p. 20-101.
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <Link
              href="https://onedrive.live.com/download?resid=6AFD3E4C750A5CF9%21118&authkey=!AH7WCQ1b0x72wSw&em=2"
              target="_blank"
            >
              <Button className="font-bold">Acessar</Button>
            </Link>
          </CardFooter>
        </Card>

        <Building>
          A RedeCT está desenvolvendo o sistema de avaliação e certificação. Em
          breve, você poderá submeter seus projetos para análise.
        </Building>
      </section>
    </main>
  )
}
