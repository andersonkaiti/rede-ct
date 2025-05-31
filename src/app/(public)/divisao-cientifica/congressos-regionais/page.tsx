import { CongressCard } from "./_components/congress-card";

export default function CongressosRegionais() {
  // Dados de exemplo - substitua pelos dados reais do seu sistema
  const congressos = [
    {
      id: 1,
      title: "Congresso Nonono Nonononno",
      description:
        "Nononon nonono onono non nn ono nnno nono noon no non o non ono nono nono nono no nono nononoonnono nononon ononono nonononon nonnnono nonon nono ono nono non onoonnonnnonono.",
      imageUrl: "/images/congressos-regionais/rede-ct.png",
      link: "#",
    },
    {
      id: 2,
      title: "Congresso Nonono Nononnono",
      description:
        "Nononon nonono onono non nn ono nnno nono noon no non o non ono nono nono nono no nono nononoonnono nononon ononono nonononon nonnnono nonon nono ono nono non onoonnonnnonono.",
      imageUrl: "/images/congressos-regionais/rede-ct.png",
      link: "#",
    },
    {
      id: 3,
      title: "Congresso Nonono Nononnono",
      description:
        "Nononon nonono onono non nn ono nnno nono noon no non o non ono nono nono nono no nono nononoonnono nononon ononono nonononon nonnnono nonon nono ono nono non onoonnonnnonono.",
      imageUrl: "/images/congressos-regionais/rede-ct.png",
      link: "#",
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Congressos Regionais da RedeCT
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Nesta seção são apresentados os congressos credenciados pela Rede como
          sendo Congressos Regionais da RedeCT, ou mesmo operacionalizado em
          parceria institucional da Rede.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {congressos.map((congresso) => (
          <CongressCard
            key={congresso.id}
            title={congresso.title}
            description={congresso.description}
            imageUrl={congresso.imageUrl}
            link={congresso.link}
          />
        ))}
      </div>
    </main>
  );
}
