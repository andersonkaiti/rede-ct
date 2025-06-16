import { UserCard, UserCardImage } from "@components/ui/user-card";
import { IInMemorian } from "@services/in-memorian-researchers";
import { Dot } from "lucide-react";

export function InMemoriamCard({ member }: { member: IInMemorian }) {
  return (
    <UserCard>
      <UserCardImage src={member.image.src} alt={member.image.alt} />
      <div className="flex flex-grow flex-col items-center justify-between gap-2">
        <h1 className="text-center text-xl font-bold">{member.name}</h1>
        <h2 className="text-muted-foreground flex items-center justify-center text-center font-semibold">
          {member.birthday} <Dot /> {member.death}
        </h2>
        <h2 className="text-muted-foreground text-center">{member.role}</h2>
        <div className="mt-4 border-t border-slate-100 pt-4">
          <div className="text-xs text-slate-400 italic">
            &quot;In memoriam - Sempre em nossos corações&quot;
          </div>
        </div>
      </div>
    </UserCard>
  );
}
