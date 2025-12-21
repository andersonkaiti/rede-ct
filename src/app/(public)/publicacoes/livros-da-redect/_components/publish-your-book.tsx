import Image from 'next/image'
import Link from 'next/link'

export function PublishYourBook() {
  return (
    <div className="grid items-center gap-8 md:grid-cols-2">
      <div className="space-y-4 text-left">
        <p className="whitespace-normal font-bold text-2xl lg:text-4xl">
          Publique seu livro na série de livros da RedeCT
        </p>
        <p className="text-primary">
          Você só paga as taxas de edição final e hospedagem da Editora Fi, a
          RedeCT não cobra taxas adicionais de seus filiados.
        </p>

        <p className="whitespace-normal font-bold text-2xl lg:text-4xl">
          Série na Editora Fi
        </p>

        <p className="text-justify">
          Desde 2018, a RedeCT mantém um espaço para a publicação de livros de
          seus Pesquisadores Filiados, a série de livros intitulada{' '}
          <span className="text-primary">
            &quot;Estudos sobre Povos Originários e Comunidades
            Tradicionais&quot;
          </span>
          , contando com comitê editorial internacional.
        </p>

        <p className="text-justify">
          A série de livros está hospedada no website da EDITORA FI (clique na
          figura ao lado ou acesse o link{' '}
          <Link
            className="text-primary underline"
            href="https://editorafi.org/povos"
            target="_blank"
          >
            editorafi.org/povos
          </Link>
          ) e segue a política internacional de acesso livre/gratuito aos
          interessados na leitura da obra final (é só o leitor baixar o arquivo
          em pdf), mas se preferir o livro físico é só fazer o pedido no próprio
          website e não precisa comprar lote (o orçamento e a remessa pode ser
          de apenas um exemplar).
        </p>

        <div className="rounded-md border border-primary/20 bg-primary/20 p-4 text-primary text-sm italic">
          Responsável: Me. Isaltina Santos da Costa Oliveira (TINA).
        </div>
      </div>

      <picture className="relative h-70 w-full rounded-md border border-gray-300 p-2 shadow-lg">
        <Image
          alt="Série Estudos sobre Povos Originários e Comunidades Tradicionais"
          className="overflow-hidden object-cover"
          fill
          src="https://redect.org/novaredect/images/2024/04/03/serie-na-fi.png"
        />
      </picture>
    </div>
  )
}
