import { getEtp } from "@actions/etp";
import { MembroCard } from "@components/membro-card";
import * as Accordion from "@components/ui/accordion";

export async function EPTAccordion() {
  const etps = await getEtp();

  return (
    <Accordion.Root type="single" collapsible>
      {etps.map(({ name, description, members, text }, index: number) => (
        <Accordion.Item key={index} value="item-1">
          <Accordion.Trigger>
            <h3 className="title-3">
              {name} / {description}
            </h3>
          </Accordion.Trigger>
          <Accordion.Content className="space-y-7">
            <p>{description}</p>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {members.map((member, index: number) => (
                <MembroCard.Root key={index}>
                  <MembroCard.Image
                    src={member.image.src}
                    alt={member.image.alt}
                  />
                  <div className="flex flex-grow flex-col items-center justify-between gap-4">
                    <h1 className="text-center text-xl font-bold">
                      {member.name}
                    </h1>
                    <h2 className="text-center font-bold">{member.role}</h2>
                  </div>
                </MembroCard.Root>
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
