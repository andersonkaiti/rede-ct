import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
import Image from 'next/image'

export function MissaoValoresTabs() {
  return (
    <Tabs defaultValue="Missão">
      <TabsList className="w-full">
        <TabsTrigger value="Missão">Missão</TabsTrigger>
        <TabsTrigger value="Valores">Valores</TabsTrigger>
        <TabsTrigger value="Objetivos">Objetivos</TabsTrigger>
        <TabsTrigger value="Grandes desafios da RedeCT">
          Grandes desafios da RedeCT
        </TabsTrigger>
      </TabsList>
      <TabsContent className="flex flex-col gap-10 lg:flex-row" value="Missão">
        <div className="flex-1 space-y-4">
          <div className="relative h-100 w-full">
            <Image
              alt="Missão"
              className="absolute rounded-xl object-cover"
              fill
              src="/images/missao-valores-objetivos/missao.png"
            />
          </div>
          <div className="flex items-center gap-2">
            <p className="font-bold">Foto</p>
            <p className="font-bold">/</p>
            <p className="text-gray-500">
              Guardião de sementes crioulas, na Comunidade Tradicional de
              Geraizeiros da Matinha, Guaraí/TO/Brasil. (crédito: Alexandre
              Campos)
            </p>
          </div>
        </div>
        <div className="flex-1 space-y-4 text-[18px] text-gray-500">
          <p className="font-bold">
            Contribuir para a melhoria contínua das produções científicas e das
            relações entre a academia(*) e os povos tradicionais,
            internacionalizando o debate e fortalecendo as atividades de ensino,
            pesquisa e extensão.
          </p>

          <p>
            (*) A RedeCT não é uma rede multicêntrica de instituições, mas sim
            uma REDE de PESQUISADORES (filiados ou honorários) que podem ser
            professores, pesquisadores, extensionistas, gestores de políticas
            públicas, estudantes (de doutorado, mestrado, graduação ou ensino
            médio) ou outros interessados, sendo pertencentes aos povos
            tradicionais ou não.
          </p>

          <p>
            Os interessados em se filiar devem entrar em contato pelo e-mail
            contato@redect.org.
          </p>
        </div>
      </TabsContent>
      <TabsContent className="flex flex-col gap-10 lg:flex-row" value="Valores">
        <div className="flex-1 space-y-4">
          <div className="relative h-100 w-full">
            <Image
              alt="Valores"
              className="absolute rounded-xl object-cover"
              fill
              src="/images/missao-valores-objetivos/valores.png"
            />
          </div>
          <div className="flex items-center gap-2">
            <p className="font-bold">Foto</p>
            <p className="font-bold">/</p>
            <p className="text-gray-500">
              Ribeirinho Amazônico, na Comunidade Tradicional de Ribeirinhos do
              Povoado Senhor do Bonfim, Araguacema/TO/Brasil (crédito: Nelson
              Moraes)
            </p>
          </div>
        </div>
        <div className="flex-1 space-y-4 text-[18px] text-gray-500">
          <p className="font-bold">Valores centrais:</p>
          <ul className="ml-5 list-disc">
            <li>Vida e meio ambiente;</li>
            <li>Bem-viver dos Povos Tradicionais;</li>
            <li>Ética em pesquisa;</li>
            <li>Direitos Humanos.</li>
          </ul>

          <p className="font-bold">Valores operacionais:</p>
          <ul className="ml-5 list-disc">
            <li>
              Cooperação para o ensino, a pesquisa e a extensão universitária;
            </li>
            <li>
              Promoção do etnodesenvolvimento e do desenvolvimento sustentável;
            </li>
            <li>
              Respeito à opinião e à decisão dos Povos Tradicionais quanto aos
              trabalhos acadêmico-científicos propostos;
            </li>
            <li>
              Transparência, legalidade e legitimidade dos processos de gestão.
            </li>
          </ul>
        </div>
      </TabsContent>
      <TabsContent
        className="flex flex-col gap-10 lg:flex-row"
        value="Objetivos"
      >
        <div className="flex-1 space-y-4">
          <div className="relative h-100 w-full">
            <Image
              alt="Objetivos"
              className="absolute rounded-xl object-cover"
              fill
              src="/images/missao-valores-objetivos/objetivos.png"
            />
          </div>
          <div className="flex items-center gap-2">
            <p className="font-bold">Foto</p>
            <p className="font-bold">/</p>
            <p className="text-gray-500">
              Reunião de orientação quanto ao associativismo, pela equipe
              UNESP/RedeCT junto à Comunidade Tradicional de Ribeirinhos do
              Povoado Senhor do Bonfim, Araguacema/TO/Brasil (crédito: Valdemir
              Neto).
            </p>
          </div>
        </div>
        <div className="flex-1 space-y-4 text-[18px] text-gray-500">
          <p className="font-bold">Objetivos da RedeCT:</p>
          <ul className="ml-5 list-disc">
            <li>
              Promover a aproximação, o diálogo e a articulação
              acadêmico-científica dentre os pesquisadores filiados;
            </li>
            <li>
              Contribuir para a produção de parcerias em projetos de pesquisa,
              ensino ou extensão universitária;
            </li>
            <li>
              Potencializar a visibilidade dos trabalhos acadêmico-científicos
              produzidos pelos pesquisadores filiados;
            </li>
            <li>
              Facilitar o controle social, da sociedade de modo geral e das
              comunidades em específico, sobre as produções científicas acerca
              dos Povos Tradicionais;
            </li>
            <li>
              Promover a cooperação internacional sobre as temáticas da RedeCT.
            </li>
          </ul>
        </div>
      </TabsContent>
      <TabsContent
        className="flex flex-col gap-10 lg:flex-row"
        value="Grandes desafios da RedeCT"
      >
        <div className="flex-1 space-y-4">
          <div className="relative h-100 w-full">
            <Image
              alt="Grandes desafios da RedeCT"
              className="absolute rounded-xl object-cover"
              fill
              src="/images/missao-valores-objetivos/grandes-desafios.png"
            />
          </div>
          <div className="flex items-center gap-2">
            <p className="font-bold">Foto</p>
            <p className="font-bold">/</p>
            <p className="text-gray-500">
              Laurenita, Anciã Guilhermina e Celenita, quilombolas da Comunidade
              Lajeado, Dianópolis/TO/Brasil (crédito: Nelson Russo).
            </p>
          </div>
        </div>
        <div className="flex-1 space-y-4 text-[18px] text-gray-500">
          <p className="font-bold">Grandes desafios da RedeCT:</p>

          <p>
            Motivar que as dissertações e teses que tratem de um Povo
            Tradicional específico contenham um robusto capítulo sobre a
            história desta comunidade destacando elementos culturais, modus
            vivendi e demarcadores temporais de ocupação do território. Para que
            estes documentos acadêmicos sirvam, complementarmente, aos processos
            de defesa de direitos destes Povos Tradicionais.
          </p>

          <p>
            Fortalecer o movimento e defender que estudantes de pós-graduação,
            de origem indígena que dominem sua língua mãe e a língua portuguesa
            sejam dispensados da proficiência em língua inglesa.
          </p>

          <p>
            Produzir estruturas, intrumentalidades e tecnologias sociais para a
            competitiva geração de renda de Povos Tradicionais.
          </p>

          <p>
            Contribuir para o resgate histórico-antropológico-arqueológico, bem
            como para a organização e guarda de dados, informações e memória do
            maior número possível de Povos Tradicionais.
          </p>

          <p>
            Produzir uma universidade cada vez mais inclusiva e preocupada com o
            acesso e a permanência de minorias, especialmente oriundas de Povos
            Tradicionais.
          </p>

          <p>
            Produzir um texto anual, que posicione a RedeCT frente aos grandes
            enfrentamentos e desafios impostos aos Povos Tradicionais,
            denominada Carta da RedeCT.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}
