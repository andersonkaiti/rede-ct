import { newsSchema } from "@actions/news/register";
import { z } from "zod";

export interface IErrors {
  errors: {
    [K in keyof z.infer<typeof newsSchema>]?: string[];
  };
}

export interface ISuccess {
  success: string;
}

export type State = IErrors | ISuccess | null;
