import { getCertifications } from "@actions/certifications";
import { Certificado } from "./_components/certificado";

export async function Certificados() {
  const certifications = await getCertifications();

  return (
    <section className="grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
      {certifications.map((certification) => (
        <Certificado key={certification.name} {...certification} />
      ))}
    </section>
  );
}
