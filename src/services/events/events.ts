export interface IEvent {
  id: number;
  title: string;
  subtitle: string;
  subscriptionPeriod: {
    start: string;
    end: string;
    time: string;
  };
  description: string;
  href: string;
  image: {
    url: string;
    alt: string;
  };
  status: "inscricoes-abertas" | "inscricoes-encerradas";
}

const events: IEvent[] = [
  {
    id: 1,
    title:
      "1º Colóquio Científico Internacional sobre Povos e Comunidades Tradicionais",
    subtitle: "COLÓQUIO INTERNACIONAL DA REDECT",
    subscriptionPeriod: {
      start: "26/11/2025",
      end: "28/11/2025",
      time: "08:00 - 22:00",
    },
    description:
      "Nonono nonono nonono on on nn nnonononon oonnono nonon ono no no onono nnon on ono n ono nononono nonononooo.",
    href: "Link de acesso ao Congresso",
    image: {
      url: "/images/placeholder.png",
      alt: "Logo do evento com figuras estilizadas em cores marrom, vermelho e verde",
    },
    status: "inscricoes-abertas",
  },
];

export async function getEvents() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return events;
}
