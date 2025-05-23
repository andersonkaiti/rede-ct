"use client";

import { Button } from "@components/ui/button";
import { Download } from "lucide-react";

export function CertificadoButton({ url }: { url: string }) {
  return (
    <Button
      className="cursor-pointer"
      onClick={() => window.open(url, "_blank")}
    >
      <Download className="h-4 w-4" />
      Baixar Certificado
    </Button>
  );
}
