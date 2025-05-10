import { MembroCard } from "@components/membro-card";

export interface IMembroEquipe {
  name: string;
  role: string;
  image: {
    src: string;
    alt: string;
  };
  lattesUrl: string;
}

export interface ISecaoEquipe {
  title: string;
  members: IMembroEquipe[];
}

const sections: ISecaoEquipe[] = [
  {
    title: "Coordenadoria Geral da RedeCT",
    members: [
      {
        name: "Profª. Me. Laurenita Gualberto Pereira Alves (LAURINHA GUALBERTO)",
        role: "Coordenadora Geral da RedeCT",
        image: {
          src: "/images/coordenadoria-geral-redect-1.png",
          alt: "Profª. Me. Laurenita Gualberto Pereira Alves (LAURINHA GUALBERTO)",
        },
        lattesUrl:
          "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K8183620Z2",
      },
      {
        name: "Prof. Dr. Edson Machado de Brito (EDSON KAYAPÓ)",
        role: "Vice-coordenador Geral da RedeCT",
        image: {
          src: "/images/coordenadoria-geral-redect-2.png",
          alt: "Prof. Dr. Edson Machado de Brito (EDSON KAYAPÓ)",
        },
        lattesUrl: "http://lattes.cnpq.br/0433710450942228",
      },
      {
        name: "Prof. Victor Hugo Silva Souza",
        role: "Secretário Geral da RedeCT",
        image: {
          src: "/images/coordenadoria-geral-redect-3.png",
          alt: "Prof. Victor Hugo Silva Souza",
        },
        lattesUrl:
          "http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K2796479E7",
      },
    ],
  },
];

export default function EquipeDeGestao() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-10 lg:p-25">
      {sections.map((section, index: number) => (
        <section key={index} className="space-y-8 md:space-y-14">
          <h1 className="text-center text-5xl font-extrabold">
            {section.title}
          </h1>
          <div className="flex flex-col gap-10 md:flex-row">
            {section.members.map((member, index: number) => (
              <MembroCard.Root key={index}>
                <MembroCard.Image
                  src={member.image.src}
                  alt={member.image.alt}
                />
                <div className="flex flex-grow flex-col items-center justify-between gap-4">
                  <h1 className="text-center text-xl font-bold">
                    {member.name}
                  </h1>
                  <h2 className="text-center font-bold">{member.role}</h2>
                  <MembroCard.Button href={member.lattesUrl} />
                </div>
              </MembroCard.Root>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
