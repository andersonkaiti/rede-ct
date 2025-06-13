import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DisciplinasECursosDePosGraduacao() {
  // Dados de exemplo baseados na imagem fornecida
  const disciplinas = [
    {
      id: 1,
      title: "Curso de Pós-graduação em Gestão da Inovação",
      description:
        "Curso completo sobre gestão da inovação em ambientes corporativos e acadêmicos, com foco em desenvolvimento de competências para liderança em inovação.",
      imageUrl: "/images/congressos-regionais/rede-ct.png",
      link: "#",
      date: "15 de Agosto a 30 de Novembro de 2024",
      time: "19:00 às 22:00",
      location: "Online - Plataforma Zoom",
      vacancies: "30 vagas disponíveis",
      category: "PÓS-GRADUAÇÃO",
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
          Conheça os programas de pós-graduação e disciplinas isoladas
          oferecidas ou chanceladas pela RedeCT. Amplie sua formação acadêmica e
          profissional com nossos cursos de excelência.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {disciplinas.map((disciplina) => (
          <div
            key={disciplina.id}
            className="overflow-hidden rounded-lg bg-white shadow-lg"
          >
            <div className="flex flex-col md:flex-row">
              {/* Coluna da Imagem */}
              <div
                className="relative w-full p-0 md:w-1/3"
                style={{ aspectRatio: "4/3" }}
              >
                <div className="absolute inset-0 h-full w-full">
                  <Image
                    src={disciplina.imageUrl}
                    alt={disciplina.title}
                    fill
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Coluna do Conteúdo */}
              <div className="w-full p-6 md:w-2/3">
                {/* Categoria */}
                <span className="mb-4 inline-block rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
                  {disciplina.category}
                </span>

                {/* Título */}
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
                  {disciplina.title}
                </h3>

                {/* Descrição */}
                <p className="mb-6 text-gray-600">{disciplina.description}</p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Data e Horário */}
                  <div>
                    <div className="mb-1 flex items-center text-blue-600">
                      <Calendar className="mr-2 h-5 w-5" />
                      <span className="text-sm font-semibold">
                        DATA E HORÁRIO
                      </span>
                    </div>
                    <p className="ml-7 text-sm text-gray-700">
                      {disciplina.date} | {disciplina.time}
                    </p>
                  </div>

                  {/* Local */}
                  <div>
                    <div className="flex items-center text-blue-600">
                      <MapPin className="mr-2 h-5 w-5" />
                      <span className="text-sm font-semibold">LOCAL</span>
                    </div>
                    <p className="ml-7 text-sm text-gray-800">
                      {disciplina.location}
                    </p>
                  </div>

                  {/* Vagas */}
                  <div>
                    <div className="flex items-center text-blue-600">
                      <Users className="mr-2 h-5 w-5" />
                      <span className="text-sm font-semibold">VAGAS</span>
                    </div>
                    <p className="ml-7 text-sm text-gray-800">
                      {disciplina.vacancies}
                    </p>
                  </div>
                </div>

                {/* Botão */}
                <div className="mt-6">
                  <Link
                    href={disciplina.link}
                    className="inline-block rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
                  >
                    INSCREVA-SE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-lg text-gray-600">
        <p className="mb-4">
          A RedeCT oferece programas de pós-graduação e disciplinas isoladas em
          diversas áreas do conhecimento, com o objetivo de promover o
          desenvolvimento acadêmico e profissional de seus membros.
        </p>
        <p>
          Nossos cursos são ministrados por professores doutores e especialistas
          reconhecidos em suas áreas de atuação, proporcionando uma experiência
          de aprendizado de excelência.
        </p>
      </div>
    </main>
  );
}
