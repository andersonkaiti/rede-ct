export interface IBook {
  year: number;
  volume: number;
  preface: string;
  prefaceText: string;
  publisher: string;
  link: string;
}

const books: IBook[] = [
  {
    year: 2024,
    volume: 13,
    preface:
      "Dra. Ana D'Arc Martins Azevedo (Professora Doutora da UNAMA e UEPA)",
    prefaceText:
      "Articulada com a pauta dos Povos e Comunidades Tradicionais, especialmente amazônicas, apresenta os treze capítulos aprovados e publicados neste 13º volume do Livro da RedeCT.",
    publisher: "Editora da UFT - Observatório Edições",
    link: "https://www.editorafi.org/ebook/c057-povos-originarios-comunidades-tradicionais",
  },
  {
    year: 2023,
    volume: 12,
    preface: "Dra. Raquel Cabral (Professora Doutora da FAAC/UNESP Bauru)",
    prefaceText:
      "Sustentada por toda sua contextualização e criticidade, apresenta os dez capítulos aprovados e publicados neste 12º volume do Livro da RedeCT.",
    publisher: "Editora da UFT - Observatório Edições",
    link: "https://www.editorafi.org/ebook/b53-povos-originarios-comunidades-tradicionais",
  },
  {
    year: 2022,
    volume: 11,
    preface: "Prof. Dr. Alceu Zoia (UNEMAT)",
    prefaceText:
      "De modo crítico ao momento político do Brasil, mas sempre com olhar esperançoso para o futuro, apresenta os doze capítulos aprovados e publicados neste volume do Livro da RedeCT.",
    publisher: "Editora da UFT - Observatório Edições",
    link: "https://www.editorafi.org/ebook/647-povos-originarios-comunidades-tradicionais",
  },
  {
    year: 2021,
    volume: 10,
    preface: "Prefácio não disponível",
    prefaceText:
      "Volume 10 contendo capítulos aprovados e publicados, com foco em temas atuais sobre Povos Originários e Comunidades Tradicionais.",
    publisher: "Editora da UFT - Observatório Edições",
    link: "https://www.editorafi.org/360povos",
  },
  {
    year: 2020,
    volume: 9,
    preface: "Prefácio não disponível",
    prefaceText:
      "Volume 9 contendo capítulos aprovados e publicados, aprofundando os debates temáticos da RedeCT.",
    publisher: "Editora da UFT - Observatório Edições",
    link: "https://www.editorafi.org/360povos",
  },
  {
    year: 2019,
    volume: 8,
    preface: "Prefácio não disponível",
    prefaceText:
      "Volume 8 da coletânea com temas diversos dos Povos Originários e Comunidades Tradicionais.",
    publisher: "Editora da UFT - Observatório Edições",
    link: "https://www.editorafi.org/360povos",
  },
  {
    year: 2018,
    volume: 7,
    preface: "Prefácio não disponível",
    prefaceText:
      "Volume 7 consolidando o trabalho da RedeCT em temas ligados às comunidades tradicionais.",
    publisher: "Editora da UFT - Observatório Edições",
    link: "https://www.editorafi.org/360povos",
  },
  {
    year: 2017,
    volume: 6,
    preface: "Prefácio não disponível",
    prefaceText:
      "Volume 6 da coletânea com capítulos aprovados e publicados pela RedeCT.",
    publisher: "Editora da UFT - Observatório Edições",
    link: "https://www.editorafi.org/047povos",
  },
  {
    year: 2016,
    volume: 5,
    preface: "Prefácio não disponível",
    prefaceText:
      "Volume 5 da coletânea com capítulos aprovados e publicados pela RedeCT.",
    publisher: "Editora da UFT - Observatório Edições",
    link: "https://www.editorafi.org/047povos",
  },
  {
    year: 2015,
    volume: 4,
    preface: "Prefácio não disponível",
    prefaceText:
      "Volume 4 da coletânea com capítulos aprovados e publicados pela RedeCT.",
    publisher: "Editora da UFT - Observatório Edições",
    link: "https://www.editorafi.org/047povos",
  },
  {
    year: 2014,
    volume: 3,
    preface: "Prefácio não disponível",
    prefaceText:
      "Volume 3 da coletânea com capítulos aprovados e publicados pela RedeCT.",
    publisher: "Editora da UFT - Observatório Edições",
    link: "https://www.editorafi.org/09comunidade",
  },
  {
    year: 2013,
    volume: 2,
    preface: "Prefácio não disponível",
    prefaceText:
      "Volume 2 da coletânea com capítulos aprovados e publicados pela RedeCT.",
    publisher: "Editora da UFT - Observatório Edições",
    link: "https://www.editorafi.org/501povos",
  },
  {
    year: 2012,
    volume: 1,
    preface: "Prefácio não disponível",
    prefaceText:
      "Volume 1 da coletânea com capítulos aprovados e publicados pela RedeCT.",
    publisher: "Editora da UFT - Observatório Edições",
    link: "https://www.editorafi.org/501povos",
  },
];

export async function getBooks() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return books;
}
