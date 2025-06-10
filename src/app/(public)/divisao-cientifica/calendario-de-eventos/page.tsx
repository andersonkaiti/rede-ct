import { Calendar as CalendarIcon } from "lucide-react";
import Image from "next/image";

export default function CalendarioDeEventos() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            Calendário de eventos
          </h1>
          <p className="text-base text-gray-600">
            Nesta seção são divulgados os eventos científicos relacionados
            direta ou indiretamente à pauta central da RedeCT (também os eventos
            que não são conduzidos pelos Pesquisadores Filiados, mas de
            interesse destes).
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col md:flex-row">
            {/* Imagem à esquerda */}
            <div className="relative w-full overflow-hidden md:w-1/3">
              <Image
                src="/images/congressos-regionais/rede-ct.png"
                alt="Evento Rede CT"
                fill
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Conteúdo à direita */}
            <div className="w-full p-6 md:w-2/3">
              {/* Badge de período de inscrição */}
              <div className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
                <CalendarIcon className="mr-1 h-3 w-3" />
                <span>
                  Período de inscrição: 26/11/2025 até 28/11/2025 - 08:00 -
                  22:00
                </span>
              </div>

              {/* Título do evento */}
              <h3 className="mb-3 text-xl leading-tight font-bold text-gray-900">
                1º Colóquio Científico Internacional sobre Povos e Comunidades
                Tradicionais (COLÓQUIO INTERNACIONAL DA REDECT)
              </h3>

              {/* Descrição do evento */}
              <p className="mb-6 text-sm text-gray-600">
                Nonono nonono nonono on on nn nnonononon oonnono nonon ono no no
                onono nnon on ono n ono nononono nononononoo.
              </p>

              {/* Botão de acesso */}
              <button className="w-full rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 md:w-auto">
                Link de acesso ao Congresso
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
