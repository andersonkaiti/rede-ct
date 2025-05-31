import Link from "next/link";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export default function DisciplinasECursosDePosGraduacao() {
  // Dados de exemplo baseados na imagem fornecida
  const disciplinas = [
    {
      id: 1,
      title: "Curso de Pós-graduação em Gestão da Inovação",
      description: "Curso completo sobre gestão da inovação em ambientes corporativos e acadêmicos, com foco em desenvolvimento de competências para liderança em inovação.",
      imageUrl: "/images/congressos-regionais/rede-ct.png",
      link: "#",
      date: "15 de Agosto a 30 de Novembro de 2024",
      time: "19:00 às 22:00",
      location: "Online - Plataforma Zoom",
      vacancies: "30 vagas disponíveis",
      category: "PÓS-GRADUAÇÃO"
    },
    // Adicione mais disciplinas conforme necessário
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Programas de Pós-graduação e Disciplinas com Inscrições Abertas
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Conheça os programas de pós-graduação e disciplinas isoladas oferecidas ou chanceladas pela RedeCT.
          Amplie sua formação acadêmica e profissional com nossos cursos de excelência.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {disciplinas.map((disciplina) => (
          <div key={disciplina.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Coluna da Imagem */}
              <div className="w-full md:w-1/3 p-0 relative" style={{ aspectRatio: '4/3' }}>
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={disciplina.imageUrl}
                    alt={disciplina.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Coluna do Conteúdo */}
              <div className="w-full md:w-2/3 p-6">
                {/* Categoria */}
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-4">
                  {disciplina.category}
                </span>
                
                {/* Título */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{disciplina.title}</h3>
                
                {/* Descrição */}
                <p className="text-gray-600 mb-6">
                  {disciplina.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Data e Horário */}
                  <div>
                    <div className="flex items-center text-blue-600 mb-1">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span className="text-sm font-semibold">DATA E HORÁRIO</span>
                    </div>
                    <p className="text-gray-700 text-sm ml-7">
                      {disciplina.date} | {disciplina.time}
                    </p>
                  </div>
                  
                  {/* Local */}
                  <div>
                    <div className="flex items-center text-blue-600">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span className="text-sm font-semibold">LOCAL</span>
                    </div>
                    <p className="text-gray-800 text-sm ml-7">{disciplina.location}</p>
                  </div>
                  
                  {/* Vagas */}
                  <div>
                    <div className="flex items-center text-blue-600">
                      <Users className="h-5 w-5 mr-2" />
                      <span className="text-sm font-semibold">VAGAS</span>
                    </div>
                    <p className="text-gray-800 text-sm ml-7">{disciplina.vacancies}</p>
                  </div>
                </div>
                
                {/* Botão */}
                <div className="mt-6">
                  <Link
                    href={disciplina.link}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md text-sm transition-colors duration-200"
                  >
                    INSCREVA-SE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-600 text-lg">
        <p className="mb-4">
          A RedeCT oferece programas de pós-graduação e disciplinas isoladas em diversas áreas do conhecimento,
          com o objetivo de promover o desenvolvimento acadêmico e profissional de seus membros.
        </p>
        <p>
          Nossos cursos são ministrados por professores doutores e especialistas reconhecidos em suas áreas de atuação,
          proporcionando uma experiência de aprendizado de excelência.
        </p>
      </div>
    </main>
  );
}
