import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";

export default function CalendarioDeEventos() {
  return (
    <main className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Calendário de eventos
          </h1>
          <p className="text-gray-600 text-base">
            Nesta seção são divulgados os eventos científicos relacionados direta ou indiretamente à pauta central da RedeCT (também os eventos que não são conduzidos pelos Pesquisadores Filiados, mas de interesse destes).
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Imagem à esquerda */}
            <div className="w-full md:w-1/3 relative overflow-hidden">
              <img 
                src="/images/congressos-regionais/rede-ct.png" 
                alt="Evento Rede CT" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Conteúdo à direita */}
            <div className="w-full md:w-2/3 p-6">
              {/* Badge de período de inscrição */}
              <div className="inline-flex items-center bg-blue-50 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
                <CalendarIcon className="h-3 w-3 mr-1" />
                <span>Período de inscrição: 26/11/2025 até 28/11/2025 - 08:00 - 22:00</span>
              </div>
              
              {/* Título do evento */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                1º Colóquio Científico Internacional sobre Povos e Comunidades Tradicionais (COLÓQUIO INTERNACIONAL DA REDECT)
              </h3>
              
              {/* Descrição do evento */}
              <p className="text-gray-600 text-sm mb-6">
                Nonono nonono nonono on on nn nnonononon oonnono nonon ono no no onono nnon on ono n ono nononono nononononoo.
              </p>
              
              {/* Botão de acesso */}
              <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md text-sm transition-colors">
                Link de acesso ao Congresso
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
