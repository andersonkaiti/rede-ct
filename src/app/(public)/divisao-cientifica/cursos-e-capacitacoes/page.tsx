import { CourseCard } from "./_components/course-card";

export default function CursosECapacitacoes() {
  // Dados de exemplo baseados na imagem fornecida
  const cursos = [
    {
      id: 1,
      title: "Curso de Capacitação em Gestão da Inovação",
      description: "Curso completo sobre gestão da inovação em ambientes corporativos e acadêmicos.",
      imageUrl: "/images/congressos-regionais/rede-ct.png",
      link: "#",
      date: "15 a 30 de Julho de 2024",
      time: "14:00 às 18:00",
      location: "Online - Plataforma Zoom",
      vacancies: "50 vagas disponíveis",
      category: "CAPACITAÇÃO"
    },
    // Adicione mais cursos conforme necessário
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Cursos e Capacitações
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Conheça os cursos e capacitações promovidos ou chancelados pela RedeCT.
          Desenvolva novas habilidades e conhecimentos com nossos programas de capacitação.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {cursos.map((curso) => (
          <div key={curso.id} className="flex justify-center">
            <CourseCard
              title={curso.title}
              description={curso.description}
              imageUrl={curso.imageUrl}
              link={curso.link}
              date={curso.date}
              time={curso.time}
              location={curso.location}
              vacancies={curso.vacancies}
              category={curso.category}
            />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-600 text-lg">
        <p className="mb-4">
          A RedeCT oferece cursos de capacitação em diversas áreas do conhecimento, com o objetivo de
          promover o desenvolvimento profissional e acadêmico de seus membros.
        </p>
        <p>
          Nossos cursos são ministrados por especialistas reconhecidos em suas áreas de atuação,
          proporcionando uma experiência de aprendizado de alta qualidade.
        </p>
      </div>
    </main>
  );
}
