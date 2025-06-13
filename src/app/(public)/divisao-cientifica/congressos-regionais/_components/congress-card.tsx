import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface CongressCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export function CongressCard({
  title,
  description,
  imageUrl,
  link,
}: CongressCardProps) {
  return (
    <div className="mb-8 overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-48 w-full md:h-48 md:w-1/3">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-xl font-bold text-gray-800">{title}</h3>
          <p className="mb-4 flex-1 text-gray-600">{description}</p>
          <div className="mt-auto">
            <Link href={link}>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Link do congresso
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
