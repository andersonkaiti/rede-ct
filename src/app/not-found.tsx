import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-balance font-semibold text-5xl text-gray-900 tracking-tight sm:text-7xl">
          Página não encontrada
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold text-sm text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2"
            href="/"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </main>
  )
}
