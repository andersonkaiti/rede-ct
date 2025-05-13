import { IMembroEquipe } from "./membro";

export interface IETP {
  name: string;
  description: string;
  members: Omit<IMembroEquipe, "lattesUrl">[];
  text?: string;
}
