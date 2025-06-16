import { BackArrow } from "@components/back-arrow";
import { Badge } from "@components/ui/badge";
import { ListNumber } from "@components/ui/list-number";
import { Building2, FileText, Mail, Users } from "lucide-react";

export default function Filiacao() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <BackArrow />
      <section className="space-y-14">
        <div className="flex items-center justify-center gap-4">
          <Badge className="bg-primary/10 text-primary p-1">
            <FileText className="text-primary !size-10" />
          </Badge>
          <h1 className="title-1 text-center">Como se filiar à RedeCT?</h1>
        </div>
      </section>

      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <Badge className="bg-primary/10 text-primary p-1">
            <Building2 className="text-primary !size-7" />
          </Badge>
          <h2 className="title-2">A RedeCT atual</h2>
        </div>
        <div className="space-y-7">
          <p className="text-justify">
            A RedeCT é uma Rede de Pesquisadores mantida pela OSCIP SocialDHC
            (Instituto de Pesquisas Amazônicas e de Povos Tradicionais) e que
            possui sede administrativa e jurídica no município de Porto Nacional
            – Estado do Tocantins – Brasil.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-4">
              <Users className="text-primary h-5 w-5" />
              <p>Presidente voluntária da OSCIP: Joicileia Juliate Fonseca</p>
            </div>
            <div className="flex items-center gap-4">
              <Users className="text-primary h-5 w-5" />
              <p>
                Coordenador voluntário da RedeCT: Prof. Dr. Nelson Russo de
                Moraes
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-primary h-5 w-5" />
              <p>
                E-mails de contato: redect.pesquisa@gmail.com e
                contato@redect.org
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <Badge className="bg-primary/10 text-primary p-1">
            <FileText className="text-primary !size-7" />
          </Badge>
          <h2 className="title-2">Processo de Filiação</h2>
        </div>
        <div className="space-y-7">
          <ol className="space-y-4">
            <li className="flex items-start">
              <ListNumber>1</ListNumber>
              Conheça a RedeCT, sua missão, seus objetivos e o seu Regimento
              Interno;
            </li>
            <li className="flex items-start">
              <ListNumber>2</ListNumber>
              Preencha o formulário de solicitação de filiação pelo link
              https://forms.gle/7pQWnnnHpC4zKeij7
            </li>
            <li className="flex items-start">
              <ListNumber>3</ListNumber>
              Realize o pagamento de sua 1a anuidade (referente ao ano de 2024 -
              de acordo com sua classificação de Pesquisador Filiado). Pela
              chave pix da231105-2947-4343-9214-064b15e45313 (Alexandre de
              Castro Campos).
            </li>
            <li className="flex items-start">
              <ListNumber>4</ListNumber>
              Atenção: se você fizer 1º o pagamento de sua inscrição para o V
              CCI da RedeCT (acesso pelo link
              https://www.even3.com.br/v-congresso-cientifico-internacional-da-redect-447704/
              ), você pode realizar o pagamento da anuidade com a dedução de
              R$50,00 (se fizer o inverso, a RedeCT não realizará devolução do
              valor da inscrição).
            </li>
            <li className="flex items-start">
              <ListNumber>5</ListNumber>
              Envie os comprovantes de pagamentos para o e-mail
              filiados@redect.org
            </li>
            <li className="flex items-start">
              <ListNumber>6</ListNumber>
              Caso você realize o pagamento da anuidade de uma conta-corrente
              que não é sua, informe isso no e-mail para a correta concialiação
              bancária na RedeCT.
            </li>
          </ol>
        </div>
      </section>

      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <Badge className="bg-primary/10 text-primary p-1">
            <Users className="text-primary !size-7" />
          </Badge>
          <h2 className="title-2">Classificação dos Pesquisadores</h2>
        </div>
        <div className="space-y-7">
          <p className="text-justify">
            Os Pesquisadores Filiados são classificados como:
          </p>
          <ol className="space-y-4">
            <li className="flex items-start">
              <ListNumber>1</ListNumber>
              Pesquisador Senior (Doutor ou Livre-docente)
            </li>
            <li className="flex items-start">
              <ListNumber>2</ListNumber>
              Pesquisador (Mestre ou profissional com graduação concluída)
            </li>
            <li className="flex items-start">
              <ListNumber>3</ListNumber>
              Pesquisador Júnior (estudante de graduação ou mesmo de ensino
              médio, que tenham mais de 18 anos de idade)
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
