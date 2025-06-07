import { WebinarCard } from "./_components/webinar-card";

export default function WebinarioPermanente() {
  // Dados de exemplo baseados na imagem fornecida
  const webinarios = [
    {
      id: 1,
      title:
        "Regimes de conhecimento territorializados: o que nos informa a produção intelectual PCT?",
      description:
        "Descrição detalhada sobre o webinário, incluindo os principais tópicos que serão abordados, objetivos e informações relevantes para os participantes. Não perca esta oportunidade de se atualizar sobre os mais recentes desenvolvimentos na área.",
      imageUrl: "/images/webnario-permanente/webnario.png",
      speakerImageUrl: "/images/webnario-permanente/Avatar.png",
      link: "#",
      date: "09 de Agosto de 2024",
      time: "16:00",
      speakers: ["Profa. Dra. Mônica Celeida Rabelo Nogueira (UNB)"],
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Webinário Permanente da RedeCT
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          O Webinário Permanente da RedeCT foi criado como espaço midiático de
          diálogo, apresentação e divulgação dos trabalhos (pesquisas, projetos,
          livros) dos Pesquisadores Filiados e outros convidados. O acesso é
          livre e gratuito pelo Canal do Youtube da RedeCT, programe-se,
          participe, prestigie, veja aqui a PROGRAMAÇÃO DOS PRÓXIMOS WEBINARIOS.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {webinarios.map((webinario) => (
          <WebinarCard
            key={webinario.id}
            title={webinario.title}
            description={webinario.description}
            imageUrl={webinario.imageUrl}
            speakerImageUrl={webinario.speakerImageUrl}
            link={webinario.link}
            date={webinario.date}
            time={webinario.time}
            speakers={webinario.speakers}
          />
        ))}
      </div>
    </main>
  );
}
