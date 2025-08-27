import { Card, CardContent, CardHeader } from '@components/ui/card'
import { ListNumber } from '@components/ui/list-number'
import { Check } from 'lucide-react'

export function Duties() {
  return (
    <Card className="space-y-7">
      <section className="space-y-14">
        <CardHeader className="space-y-7">
          <h2 className="title-3 flex items-center gap-2">
            <div className="mr-2 rounded-full bg-primary/20 p-2">
              <Check className="text-primary" />
            </div>
            POSSIBILIDADES E DEVERES DO GTC
          </h2>

          <h3 className="title-3">DEVERES DO GTC JUNTO À REDECT:</h3>
        </CardHeader>
        <CardContent>
          <ol className="space-y-4">
            <li className="flex items-start">
              <ListNumber>1</ListNumber>
              Respeitar o Regimento Interno da RedeCT todas as suas cláusulas;
            </li>
            <li className="flex items-start">
              <ListNumber>2</ListNumber>
              Alinhar-se e defender os valores centrais e operacionais da
              RedeCT;
            </li>
            <li className="flex items-start">
              <ListNumber>3</ListNumber>
              Atender às demandas administrativas e editoriais da RedeCT (de
              modo especial a apreciação, avaliação e emissão de parecer para os
              seus diversos projetos);
            </li>
            <li className="flex items-start">
              <ListNumber>4</ListNumber>
              Manter os seus integrantes devidamente regulares junto à RedeCT;
            </li>
            <li className="flex items-start">
              <ListNumber>5</ListNumber>
              Zelar pelo controle de endogenia editorial, mantendo (no mínimo)
              70% dos trabalhos de autores externos ao grupo de integrantes do
              GT;
            </li>
            <li className="flex items-start">
              <ListNumber>6</ListNumber>
              Manter o limite máximo de 20% de trabalhos que versem sobre a
              temática do GT, mas não dialoguem diretamente com o tema
              &quot;Povos Tradicionais&quot; (nas seções dos congressos da
              RedeCT, no conjunto de capítulos de livros organizados e ainda em
              dossiês produzidos para revistas científicas);
            </li>
            <li className="flex items-start">
              <ListNumber>7</ListNumber>
              Orientar os diferentes públicos e vetar trabalhos que não atendam
              às legislações de ética em pesquisas com pessoas, de propriedade
              intelectual (plágio) e ainda quanto à Lei Geral de Proteção de
              Dados das Pessoas (LGPD);
            </li>
            <li className="flex items-start">
              <ListNumber>8</ListNumber>
              Orientar os diferentes públicos e revisar os trabalhos finais que
              seguirão para a publicação em Anais de Congressos ou em Livros
              Organizados (especialmente quanto à língua portuguesa e normas da
              ABNT);
            </li>
            <li className="flex items-start">
              <ListNumber>9</ListNumber>
              Ao final dos congressos da RedeCT (dos quais o ETP participar), em
              especial o Congresso Científico Internacional da RedeCT, o
              Secretário Geral deverá – em no máximo dez dias – enviar à
              Vice-coordenadoria de Eventos Científicos a sua parte do documento
              Anais para publicação, seguindo as normas e padrões editoriais
              orientados por esta vice-coordenadoria;
            </li>
            <li className="flex items-start">
              <ListNumber>10</ListNumber>
              Manter atualizadas as informações das suas áreas no website da
              RedeCT;
            </li>
            <li className="flex items-start">
              <ListNumber>11</ListNumber>
              Manter atualizado o documento ATA onde constem as decisões
              administrativas, encaminhamentos e resumos de reuniões constando a
              presença dos membros. A Ata deve estar disponível em sua área no
              website da RedeCT. Orienta-se suprimir menções de nomes e trechos
              que necessitem de reserva quanto à publicação.
            </li>
          </ol>
        </CardContent>
      </section>

      <section className="space-y-14">
        <CardHeader>
          <h3 className="title-3">POSSIBILIDADES DO GT:</h3>
        </CardHeader>
        <CardContent>
          <ol className="space-y-4">
            <li className="flex items-start">
              <ListNumber>1</ListNumber>
              Utilizar a marca RedeCT no sentido de que o referido pesquisador
              integra a Rede e nesta faz parte do seu Comitê Científico;
            </li>
            <li className="flex items-start">
              <ListNumber>2</ListNumber>
              Organizar e reorganizar, sempre que necessário o fluxo de trabalho
              do GTC, inclusive ajustes amistosos quanto à sua composição e
              mesmo liderança;
            </li>
            <li className="flex items-start">
              <ListNumber>3</ListNumber>
              Planejar, organizar, conduzir, avaliar e controlar o ETP ao qual
              está relacionado o GTC;
            </li>
            <li className="flex items-start">
              <ListNumber>4</ListNumber>
              Definir (dentre seus integrantes/doutores e mesmo convidados
              externos) quem comporá comissões de trabalho em congressos
              internos e externos à RedeCT;
            </li>
            <li className="flex items-start">
              <ListNumber>5</ListNumber>
              Dentro dos congressos da RedeCT, articular, propor e conduzir
              mesas-redondas e conferências;
            </li>
            <li className="flex items-start">
              <ListNumber>6</ListNumber>
              Organizar livros articulando saberes e produções (inclusive
              oriundas das seções dos congressos da RedeCT;
            </li>
            <li className="flex items-start">
              <ListNumber>7</ListNumber>
              Articular a publicação dos melhores artigos (no âmbito do seu ETP
              dentro do Congresso Científico Internacional da RedeCT) em
              revistas científicas;
            </li>
            <li className="flex items-start">
              <ListNumber>8</ListNumber>
              Publicar, com maior facilidade, suas obras pelo ecossistema RedeCT
              e suas conexões acadêmicas;
            </li>
            <li className="flex items-start">
              <ListNumber>9</ListNumber>
              Conduzir, sob chancela e cooperação com a RedeCT, congresso
              regional ou temático do ETP sob responsabilidade do GTC.
            </li>
          </ol>
        </CardContent>
      </section>
    </Card>
  )
}
