import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
import Image from 'next/image'

type TabData = {
  value: string
  label: string
  image: {
    src: string
    alt: string
    credit: string
  }
  content: {
    title?: string
    paragraphs: string[]
    lists?: Array<{
      title: string
      items: string[]
    }>
  }
}

const tabsData: TabData[] = [
  {
    value: 'Missão',
    label: 'Missão',
    image: {
      src: '/images/missao-valores-objetivos/missao.png',
      alt: 'Missão',
      credit:
        'Guardião de sementes crioulas, na Comunidade Tradicional de Geraizeiros da Matinha, Guaraí/TO/Brasil. (crédito: Alexandre Campos)',
    },
    content: {
      paragraphs: [
        'Contribuir para a melhoria contínua das produções científicas e das relações entre a academia(*) e os povos tradicionais, internacionalizando o debate e fortalecendo as atividades de ensino, pesquisa e extensão.',
        '(*) A RedeCT não é uma rede multicêntrica de instituições, mas sim uma REDE de PESQUISADORES (filiados ou honorários) que podem ser professores, pesquisadores, extensionistas, gestores de políticas públicas, estudantes (de doutorado, mestrado, graduação ou ensino médio) ou outros interessados, sendo pertencentes aos povos tradicionais ou não.',
        'Os interessados em se filiar devem entrar em contato pelo e-mail contato@redect.org.',
      ],
    },
  },
  {
    value: 'Valores',
    label: 'Valores',
    image: {
      src: '/images/missao-valores-objetivos/valores.png',
      alt: 'Valores',
      credit:
        'Ribeirinho Amazônico, na Comunidade Tradicional de Ribeirinhos do Povoado Senhor do Bonfim, Araguacema/TO/Brasil (crédito: Nelson Moraes)',
    },
    content: {
      paragraphs: [],
      lists: [
        {
          title: 'Valores centrais:',
          items: [
            'Vida e meio ambiente;',
            'Bem-viver dos Povos Tradicionais;',
            'Ética em pesquisa;',
            'Direitos Humanos.',
          ],
        },
        {
          title: 'Valores operacionais:',
          items: [
            'Cooperação para o ensino, a pesquisa e a extensão universitária;',
            'Promoção do etnodesenvolvimento e do desenvolvimento sustentável;',
            'Respeito à opinião e à decisão dos Povos Tradicionais quanto aos trabalhos acadêmico-científicos propostos;',
            'Transparência, legalidade e legitimidade dos processos de gestão.',
          ],
        },
      ],
    },
  },
  {
    value: 'Objetivos',
    label: 'Objetivos',
    image: {
      src: '/images/missao-valores-objetivos/objetivos.png',
      alt: 'Objetivos',
      credit:
        'Reunião de orientação quanto ao associativismo, pela equipe UNESP/RedeCT junto à Comunidade Tradicional de Ribeirinhos do Povoado Senhor do Bonfim, Araguacema/TO/Brasil (crédito: Valdemir Neto).',
    },
    content: {
      paragraphs: [],
      lists: [
        {
          title: 'Objetivos da RedeCT:',
          items: [
            'Promover a aproximação, o diálogo e a articulação acadêmico-científica dentre os pesquisadores filiados;',
            'Contribuir para a produção de parcerias em projetos de pesquisa, ensino ou extensão universitária;',
            'Potencializar a visibilidade dos trabalhos acadêmico-científicos produzidos pelos pesquisadores filiados;',
            'Facilitar o controle social, da sociedade de modo geral e das comunidades em específico, sobre as produções científicas acerca dos Povos Tradicionais;',
            'Promover a cooperação internacional sobre as temáticas da RedeCT.',
          ],
        },
      ],
    },
  },
  {
    value: 'Grandes desafios da RedeCT',
    label: 'Grandes desafios da RedeCT',
    image: {
      src: '/images/missao-valores-objetivos/grandes-desafios.png',
      alt: 'Grandes desafios da RedeCT',
      credit:
        'Laurenita, Anciã Guilhermina e Celenita, quilombolas da Comunidade Lajeado, Dianópolis/TO/Brasil (crédito: Nelson Russo).',
    },
    content: {
      title: 'Grandes desafios da RedeCT:',
      paragraphs: [
        'Motivar que as dissertações e teses que tratem de um Povo Tradicional específico contenham um robusto capítulo sobre a história desta comunidade destacando elementos culturais, modus vivendi e demarcadores temporais de ocupação do território. Para que estes documentos acadêmicos sirvam, complementarmente, aos processos de defesa de direitos destes Povos Tradicionais.',
        'Fortalecer o movimento e defender que estudantes de pós-graduação, de origem indígena que dominem sua língua mãe e a língua portuguesa sejam dispensados da proficiência em língua inglesa.',
        'Produzir estruturas, intrumentalidades e tecnologias sociais para a competitiva geração de renda de Povos Tradicionais.',
        'Contribuir para o resgate histórico-antropológico-arqueológico, bem como para a organização e guarda de dados, informações e memória do maior número possível de Povos Tradicionais.',
        'Produzir uma universidade cada vez mais inclusiva e preocupada com o acesso e a permanência de minorias, especialmente oriundas de Povos Tradicionais.',
        'Produzir um texto anual, que posicione a RedeCT frente aos grandes enfrentamentos e desafios impostos aos Povos Tradicionais, denominada Carta da RedeCT.',
      ],
    },
  },
]

export function MissaoValoresTabs() {
  return (
    <Tabs className="items-center" defaultValue={tabsData[0].value}>
      <TabsList className="flex w-full flex-col gap-1 bg-transparent sm:flex-row">
        {tabsData.map((tab) => (
          <TabsTrigger
            className="w-full rounded-full border border-background data-[state=active]:border-border data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-none"
            key={tab.value}
            value={tab.value}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabsData.map((tab) => (
        <TabsContent className="space-y-4" key={tab.value} value={tab.value}>
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="flex-1 space-y-4">
              <div className="relative h-100 w-full">
                <Image
                  alt={tab.image.alt}
                  className="absolute rounded-xl object-cover"
                  fill
                  src={tab.image.src}
                />
              </div>
              <div className="flex items-center gap-2">
                <p className="font-bold">Foto</p>
                <p className="font-bold">/</p>
                <span className="text-background-foreground text-sm">
                  {tab.image.credit}
                </span>
              </div>
            </div>

            <div className="flex-1 space-y-4 text-[18px] text-background-foreground">
              <p className="font-bold">{tab.content.title}</p>

              {tab.content.paragraphs?.map((paragraph, index) => (
                <p className="text-justify" key={index}>
                  {paragraph}
                </p>
              ))}

              {tab.content.lists?.map((list, listIndex) => (
                <div className="space-y-2" key={listIndex}>
                  <p className="font-bold">{list.title}</p>
                  <ul className="ml-5 list-disc">
                    {list.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
