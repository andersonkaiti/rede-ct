const timelineData = [
  {
    date: "02/09/2002",
    title: "Criação da SocialDHC",
    text: "Professores, membros de comunidades tradicionais amazônicas e demais interessados criam a associação Social Desenvolvimento Humano e Comunitário – SocialDHC, com o objetivo de contribuir para a promoção do desenvolvimento humano de comunidades, especialmente de povos tradicionais amazônicos.",
  },
  {
    date: "14/04/2003",
    title: "Qualificação como OSCIP",
    text: "A SocialDHC é qualificada como OSCIP (Organização da Sociedade Civil de Interesse Público) junto ao Ministério da Justiça do Brasil, seguindo-se todos os trâmites da Lei Federal 9.790/99.",
  },
  {
    date: "07/2014",
    title: "Criação do GEDGS",
    text: "Criação do grupo de pesquisa GEDGS (Grupo de Estudos em Democracia e Gestão Social), na UNESP Tupã. O grupo se dedicaria aos estudos sobre povos tradicionais.",
  },
  {
    date: "11/2017",
    title: "Planejamento da RedeCT",
    text: "Integrantes do grupo de pesquisa GEDGS/UNESP e da OSCIP SocialDHC planejam a criação da Rede de Pesquisadores RedeCT.",
  },
  {
    date: "22/05/2018",
    title: "Apresentação pública da RedeCT",
    text: "A proposta de criação da RedeCT foi apresentada ao público dentro do X ENAPEGS, na Universidade Federal do Cariri (UFCA), pelos professores Nelson Russo de Moraes e Alexandre de Castro Campos.",
  },
  {
    date: "15/12/2018",
    title: "Criação da série de livros da RedeCT",
    text: 'A RedeCT adquire espaço repositório para livros e coletâneas junto à Editora Fi, intitulado "Estudos sobre Povos Tradicionais", com acesso aberto e gratuito via Creative Commons. Disponível em editorafi.org/povos.',
  },
  {
    date: "15/12/2018",
    title: "Publicação dos volumes 1 e 2 da coletânea",
    text: 'A RedeCT publicou o 1º e 2º volumes da coletânea "Povos Originários e Comunidades Tradicionais". Volume 1 prefaciado por Marta Juliá e Antônio Carlos Sant\'Ana Diegues; volume 2 por Geraldo da Silva Gomes e Nelson Russo de Moraes.',
  },
  {
    date: "15/12/2019",
    title: "Publicação do volume 3 da coletânea",
    text: "A RedeCT publicou o 3º volume da coletânea, com prefácio do Prof. Dr. Carlos Rodrigues Brandão.",
  },
  {
    date: "24 a 27/11/2020",
    title: "I Congresso Científico Internacional da RedeCT",
    text: "Primeiro congresso científico da RedeCT realizado remotamente a partir da FCE/UNESP Tupã.",
  },
  {
    date: "15/12/2020",
    title: "Publicação dos volumes 4, 5 e 6",
    text: "Publicação de três volumes da coletânea. Volume 4: prefácio de Fernando Guilherme Tenório; volume 5: Flávio Bezerra Barros; volume 6: Carine Felkl Prevedello.",
  },
  {
    date: "29/05/2021",
    title: "Institucionalização da RedeCT",
    text: "A RedeCT torna-se projeto da OSCIP SocialDHC, com nome fantasia INSTITUTO DE PESQUISAS AMAZÔNICAS E DE POVOS TRADICIONAIS.",
  },
  {
    date: "10 a 12/11/2021",
    title: "II Congresso Científico Internacional da RedeCT",
    text: "Realizado remotamente a partir de Palmas/TO, em parceria com a UFT, UFNT e GEDGS/UNESP Tupã.",
  },
  {
    date: "15/12/2021",
    title: "Publicação dos volumes 7 a 10",
    text: "Volume 7: Lorranne Gomes da Silva; volume 8: Marcelo Rodrigo da Silva; volume 9: Patrick Maurice Maury; volume 10: Adriano Batista Castorino.",
  },
  {
    date: "15 a 18/11/2022",
    title: "III Congresso Científico Internacional da RedeCT",
    text: "Evento híbrido com atividades em Barra do Bugres/MT e online via FCE/UNESP Tupã, em parceria com a FAINDI/UNEMAT.",
  },
  {
    date: "15/12/2022",
    title: "Publicação do volume 11 da coletânea",
    text: "Volume 11 publicado com prefácio do Dr. Alceu Zoia (UNEMAT).",
  },
  {
    date: "07 a 10/11/2023",
    title: "IV Congresso Científico Internacional da RedeCT",
    text: "Realizado em Belém/PA em parceria com a UNAMA e transmissões online via FAAC/UNESP Bauru/SP.",
  },
  {
    date: "15/12/2023",
    title: "Publicação do volume 12 da coletânea",
    text: "Volume 12 publicado com prefácio da Dra. Raquel Cabral (FAAC/UNESP).",
  },
  {
    date: "19/04/2024",
    title: "Lançamento do novo website e estrutura da RedeCT",
    text: "No Dia dos Povos Indígenas do Brasil, foi lançado o novo site (https://redect.org/novaredect), Regimento Interno, Anais anteriores anunciados, nova estrutura com coordenação geral, GTCs, ETPs e início do webinário transmitido via YouTube às 16h.",
  },
];

export async function getTimelineRedeCT() {
  return timelineData;
}
