"use server";

import "server-only";

export interface ICertification {
  name: string;
  description: string;
  date: string;
  url: string;
}

const certifications: ICertification[] = [
  {
    name: "Certificado 1",
    description: "Descrição do certificado 1",
    date: "2021-01-01",
    url: "https://www.google.com",
  },
  {
    name: "Certificado 2",
    description: "Descrição do certificado 2",
    date: "2021-01-01",
    url: "https://www.google.com",
  },
  {
    name: "Certificado 3",
    description: "Descrição do certificado 3",
    date: "2021-01-01",
    url: "https://www.google.com",
  },
  {
    name: "Certificado 4",
    description: "Descrição do certificado 4",
    date: "2021-01-01",
    url: "https://www.google.com",
  },
  {
    name: "Certificado 5",
    description: "Descrição do certificado 5",
    date: "2021-01-01",
    url: "https://www.google.com",
  },
  {
    name: "Certificado 6",
    description: "Descrição do certificado 6",
    date: "2021-01-01",
    url: "https://www.google.com",
  },
];

export async function getCertifications() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return certifications;
}
