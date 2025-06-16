import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import {
  UserCard,
  UserCardButtonLattes,
  UserCardImage,
} from "@components/ui/user-card";

import { getEtps } from "@/services/etps";

export async function EPTAccordion() {
  const etps = await getEtps();

  return (
    <Accordion type="single" collapsible>
      {etps.map(({ name, description, members, text }, index: number) => (
        <AccordionItem key={index} value={name}>
          <AccordionTrigger>
            <h3 className="title-3">
              {name} / {description}
            </h3>
          </AccordionTrigger>
          <AccordionContent className="space-y-7">
            <p className="text-justify">{text}</p>
            <UserCard>
              {members.map((member, index: number) => (
                <UserCard key={index}>
                  <UserCardImage
                    src={member.image.src}
                    alt={member.image.alt}
                  />
                  <div className="flex flex-grow flex-col items-center justify-between gap-4">
                    <h1 className="text-center text-xl font-bold">
                      {member.name}
                    </h1>
                    <h2 className="text-center font-bold">{member.role}</h2>
                    <UserCardButtonLattes href={member.lattesUrl} />
                  </div>
                </UserCard>
              ))}
            </UserCard>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
