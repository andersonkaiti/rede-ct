import { getWebinars } from '@mocks/webinars/webinars'
import { WebinarCard } from './webinar-card'

export async function Webinars() {
  const webinars = await getWebinars()

  return (
    <div className="space-y-8">
      {webinars.map((webinar) => (
        <WebinarCard
          date={webinar.date}
          description={webinar.description}
          imageUrl={webinar.imageUrl}
          key={webinar.id}
          link={webinar.link}
          speakerImageUrl={webinar.speakerImageUrl}
          speakers={webinar.speakers}
          time={webinar.time}
          title={webinar.title}
        />
      ))}
    </div>
  )
}
