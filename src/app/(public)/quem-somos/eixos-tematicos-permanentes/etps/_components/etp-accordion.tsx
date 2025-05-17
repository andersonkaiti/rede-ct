import { getEtp } from "@actions/etp";
import * as Accordion from "@components/ui/accordion";
import { UserCard } from "@components/user-card";
import { CardButtonLattes } from "@components/user-card/card-button-lattes";

export async function EPTAccordion() {
  const etps = await getEtp();

  return (
    <Accordion.Root type="single" collapsible>
      {etps.map(({ name, description, members, text }, index: number) => (
        <Accordion.Item key={index} value={name}>
          <Accordion.Trigger>
            <h3 className="title-3">
              {name} / {description}
            </h3>
          </Accordion.Trigger>
          <Accordion.Content className="space-y-7">
            <p className="text-justify">{text}</p>
            <UserCard.Wrapper>
              {members.map((member, index: number) => (
                <UserCard.Root key={index}>
                  <UserCard.Image
                    src={member.image.src}
                    alt={member.image.alt}
                  />
                  <div className="flex flex-grow flex-col items-center justify-between gap-4">
                    <h1 className="text-center text-xl font-bold">
                      {member.name}
                    </h1>
                    <h2 className="text-center font-bold">{member.role}</h2>
                    <CardButtonLattes href={member.lattesUrl} />
                  </div>
                </UserCard.Root>
              ))}
            </UserCard.Wrapper>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
