export interface IMagazine {
  id: number
  name: string
  description: string
  url: string
  image: string
}

export const magazines: IMagazine[] = [
  {
    id: 1,
    name: 'Revista Observatório',
    description:
      'Criada em 2015, com política editorial bilíngue e avaliação Capes/Qualis A2. Parceria entre OPAJE/UFT e GEDGS/UNESP.',
    url: 'https://sistemas.uft.edu.br/periodicos/index.php/observatorio/index',
    image: 'https://redect.org/novaredect/images/2024/03/27/observatorio.png',
  },
  {
    id: 2,
    name: 'Revista de Educação da UNEMAT',
    description:
      'Publicação da Universidade do Estado de Mato Grosso, voltada para temas educacionais.',
    url: 'https://periodicos.unemat.br/index.php/ppgedu/index',
    image:
      'https://redect.org/novaredect/images/2024/03/27/revista-faed_ppgedu_unemat.png',
  },
  {
    id: 3,
    name: 'Revista Territorial - UEG',
    description:
      'Criada em 2012, promove debates sobre espacialização de objetos e fenômenos em diversas escalas, com apoio do PPGEO/UEG.',
    url: 'https://www.revista.ueg.br/index.php/territorial',
    image:
      'https://redect.org/novaredect/images/2024/03/27/revista-territorial.png',
  },
]

export async function getMagazines(): Promise<IMagazine[]> {
  return await new Promise((resolve) => resolve(magazines))
}
