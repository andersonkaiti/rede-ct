"use server";

import "server-only";
import { IPartnership } from "types/partnership";

const partnerships: IPartnership[] = [
  {
    name: "CITeBauru",
    image: {
      src: "/images/parcerias/citebauru.png",
      alt: "CITeBauru",
    },
    description:
      "No Edital 01/2024 da Saruê Incubadora/CITEB Bauru, instituições ligadas à FUNDUNESP e localizadas na UNESP Bauru (e em parceria com a Whadawani Foundation), um projeto da RedeCT foi selecionado para ser pré-incubado na perspectiva de estrutura, fluxo e sustentabilidade negocial liagado à inovação. Trata-se da proposta de criação do Selo de Indicador de Procedência Tradicional pela RedeCT (no sentido de auxiliar os povos e comunidades tradicionais na organização de seus projetos de geração de renda). Também via SARUÊ Incubadora/CITEB/UNESP, a RedeCT está sendo preparada para ser incubada enquanto Organização Social na perspectiva de gestão de tecnologias e redes sociais on-line.",
    startDate: "28/03/2024",
  },
  {
    name: "FAPESP",
    image: {
      src: "/images/parcerias/fapesp.png",
      alt: "FAPESP",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.",
    startDate: "",
  },
  {
    name: "India Vanuire",
    image: {
      src: "/images/parcerias/india-vanuire.png",
      alt: "India Vanuire",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.",
    startDate: "",
  },
  {
    name: "UNAMA",
    image: {
      src: "/images/parcerias/unama.png",
      alt: "UNAMA",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.",
    startDate: "",
  },
  {
    name: "UNEMAT",
    image: {
      src: "/images/parcerias/unemat.png",
      alt: "UNEMAT",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.",
    startDate: "",
  },
  {
    name: "UFNT",
    image: {
      src: "/images/parcerias/ufnt.png",
      alt: "UFNT",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.",
    startDate: "",
  },
  {
    name: "Editora FI",
    image: {
      src: "/images/parcerias/editora-fi.png",
      alt: "Editora FI",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.",
    startDate: "",
  },
  {
    name: "Editora Universidade Federal de Roraima",
    image: {
      src: "/images/parcerias/editora-universidade-federal-roraima.png",
      alt: "Editora Universidade Federal de Roraima",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.",
    startDate: "",
  },
  {
    name: "Governo do Estado do Tocantins",
    image: {
      src: "/images/parcerias/tocantins.png",
      alt: "Governo do Estado do Tocantins",
    },
    description:
      "O Governo do Estado do Tocantins sempre apoiou os projetos e atividades da OSCIP RedeCT junto às Comunidades Tradicionais e populações mais carentes do estado.",
    startDate: "2004",
  },
  {
    name: "RGS",
    image: {
      src: "/images/parcerias/rgs.png",
      alt: "RGS",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.",
    startDate: "",
  },
  {
    name: "UNESP",
    image: {
      src: "/images/parcerias/unesp.png",
      alt: "UNESP",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.",
    startDate: "",
  },
  {
    name: "Social Desenvolvimento Humano e Comunitário",
    image: {
      src: "/images/parcerias/social-dhc.png",
      alt: "Social Desenvolvimento Humano e Comunitário",
    },
    description:
      "A OSCIP Instituto de Pesquisas Amazônicas e de Povos Tradicionais/RedeCT, também chamada de OSCIP RedeCT, (com a razão social: Social Desenvolvimento Humano e Comunitário, criada em 2002) foi a instituição motivadora para que seus associados que somados aos integrantes do Grupo de Pesquisa GEDGS/UNESP planejaram, em convergência aos trabalhos já realizados pela OSCIP, a criação da RedeCT.\n\nInformações Institucionais:\n\n• Razão Social: Social Desenvolvimento Humano e Comunitário\n• Nome Fantasia: Instituto de Pesquisas Amazônicas e de Povos Tradicionais\n• Identificações alternativas: SocialDHC, OSCIP SocialDHC, OSCIP Instituto, OSCIP RedeCT\n• CNPJ: 05.375.958/0001-80\n• Data de criação: 02 de setembro de 2002\n• Data de qualificação como OSCIP (Lei 9790/99): 14/04/2003\n• Data de apresentação pública da RedeCT: 22/05/2018\n• Sede: Porto Nacional (estado do Tocantins - Amazônia legal brasileira)\n• Escritório regional: Bauru (estado de São Paulo - Brasil)\n\nDesde o ano de sua criação (2002) até 2013 a OSCIP desenvolveu inúmeros projetos voltados à aproximação entre a academia e as demandas de Povos Tradicionais, especialmente no combate à pobreza, à geração de renda, à promoção do desenvolvimento sustentável e à formação de jovens.\n\nParcerias efetivadas de 2002 a 2013\n\nNa área abaixo destacam-se as parcerias institucionais da OSCIP Instituto de Pesquisas Amazônicas e de Povos Tradicionais/RedeCT de 2002 a 2013.\n\nUtiliza-se o termo PARCERIA para as relações consolidadas por meio de contrato formal, com tempo determinado, financiamentos e participação em atividades previamente definidas; por outro lado, utiliza-se o termo COLABORAÇÃO INSTITUCIONAL para os casos em que as instituições realizaram ações conjuntas ao longo de um tempo e onde as atividades foram colaborativas entre si, seja com a cessão de espaços físicos ou estruturas, seja com a cessão de professores, seja com a instrumentalização de projetos conjuntos de extensão universitária ou mesmo de pesquisa científica, com ou sem pequenos acoredos contratuais firmados.",
    startDate: "02/09/2002",
  },
  {
    name: "CNPq",
    image: {
      src: "/images/parcerias/cnpq.png",
      alt: "CNPq",
    },
    description:
      "Em 2005, o CNPq (Edital MCT/MMA/SEAP/SEPPIR/CNPq nº 026/2005) financiou o projeto de combate à insegurança alimentar de comunidades tradicionais. Em 2015, financiou pesquisa sobre cooperação internacional para promoção da educação junto às comunidades tradicionais amazônicas.",
    startDate: "2005",
  },
  {
    name: "FAG - Faculdade de Guaraí",
    image: {
      src: "/images/parcerias/fag.png",
      alt: "FAG - Faculdade de Guaraí",
    },
    description:
      "A cooperação entre a OSCIP RedeCT e a FAG ocorreu a partir do edital do CNPq (2005) e desdobrou-se por diversas ações e projetos de extensão universitária e pesquisas científicas junto às Comunidades Tradicionais da Amazônia.",
    startDate: "2005",
  },
  {
    name: "UNITINS",
    image: {
      src: "/images/parcerias/unitins.png",
      alt: "UNITINS",
    },
    description:
      "A partir de 2006 iniciou-se a colaboração institucional da UNITINS, especialmente nas ações socioambientais desenvolvidas como desdobramento do Projeto Escola de Agroecologia.",
    startDate: "2006",
  },
  {
    name: "UFT",
    image: {
      src: "/images/parcerias/uft.png",
      alt: "UFT",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.",
    startDate: "",
  },
  {
    name: "ARABRAS",
    image: {
      src: "/images/parcerias/arabras.png",
      alt: "ARABRAS",
    },
    description:
      "A ARABRAS - Entidade Alemã de Assistência Escolar foi a primeira grande instituição a acreditar e creditar na então associação SocialDHC, depois OSCIP RedeCT.",
    startDate: "2004",
  },
  {
    name: "Instituto HSBC Solidariedade",
    image: {
      src: "/images/parcerias/instituto-hsbc-solidariedade.png",
      alt: "Instituto HSBC Solidariedade",
    },
    description:
      "Em 2006 o Banco HSBC, por meio do Instituto HSBC Solidariedade, iniciou suas ações no Brasil, financiando três projetos da OSCIP RedeCT.",
    startDate: "2006",
  },
  {
    name: "SEBRAE",
    image: {
      src: "/images/parcerias/sebrae.png",
      alt: "SEBRAE",
    },
    description:
      "Em 2005, a OSCIP RedeCT, sob financiamento do SEBRAE, elaborou o Plano Municipal de Desenvolvimento Local Integrado e Sustentável - PMDLIS.",
    startDate: "2005",
  },
];

export async function getPartnerships() {
  return partnerships;
}
