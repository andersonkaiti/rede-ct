import { NewsList } from './_components/news-list'

export default function NewsListPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <header className="flex flex-col gap-8">
        <h1 className="text-pretty font-bold text-4xl text-foreground sm:text-5xl">
          Notícias
        </h1>

        <p className="text-muted-foreground text-sm">
          Fique por dentro das últimas novidades, comunicados e atualizações da
          Rede CT.
        </p>
      </header>

      <NewsList />
    </main>
  )
}
