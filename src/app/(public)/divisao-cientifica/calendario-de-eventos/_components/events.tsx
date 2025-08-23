import { getEvents } from '@mocks/events/events'
import { EventCard } from './event-card'

export async function Events() {
  const events = await getEvents()

  return (
    <div className="flex flex-col gap-4">
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </div>
  )
}
