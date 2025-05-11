import { MissaoValoresTabs } from "@components/missao-valores-tabs/missao-valores-tabs";

export default function MissaoValoresEObjetivos() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-10 lg:p-25">
      <h1 className="title-1 text-center">
        Missão, valores, objetivos e grandes desafios da RedeCT
      </h1>
      <section className="space-y-4">
        <h2 className="title-2 text-center">Quem são os Povos Tradicionais</h2>
        <p className="text-justify text-[18px] text-gray-500">
          A RedeCT, seguindo a orientação dada por diversos autores,
          considera POVOS TRADICIONAIS o conjunto formado pelos Povos
          Originários (no caso brasileiro, os indígenas, inclusive seus
          descendentes, residentes ou não nas terras indígenas) e Comunidades
          Tradicionais (no caso brasileiro, quilombolas, geraizeiros,
          quebradeiras de coco babaçú, faxinalenses, povos de terreiro,
          caiçaras, ribeirinhos, pescadores artesanais, pantaneiros, dentre
          outros).
        </p>
        <p className="text-justify text-[18px] text-gray-500">
          O Decreto 6040 (07/02/2007) estabelece em seu art.3º que os Povos
          Tradicionais são &quot;grupos culturalmente diferenciados e que se
          reconhecem como tais, que possuem formas próprias de organização
          social, que ocupam e usam territórios e recursos naturais como
          condição para sua reprodução cultural, social, religiosa, ancestral e
          econômica, utilizando conhecimentos, inovações e práticas gerados e
          transmitidos pela tradição (BRASIL, 2007).
        </p>
      </section>
      <section>
        <MissaoValoresTabs />
      </section>
    </main>
  );
}
