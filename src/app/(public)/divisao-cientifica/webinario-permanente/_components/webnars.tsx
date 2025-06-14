import { getWebinars } from "@services/webinars/webinars";

import { WebinarCard } from "./webinar-card";

export async function Webinars() {
  const webinars = await getWebinars();

  return (
    <div className="space-y-8">
      {webinars.map((webinar) => (
        <WebinarCard
          key={webinar.id}
          title={webinar.title}
          description={webinar.description}
          imageUrl={webinar.imageUrl}
          speakerImageUrl={webinar.speakerImageUrl}
          link={webinar.link}
          date={webinar.date}
          time={webinar.time}
          speakers={webinar.speakers}
        />
      ))}
    </div>
  );
}
