import { getEvents } from '@mocks/events/events'
import { EventCard } from './event-card'

export async function Events() {
  const events = await getEvents()

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2">
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </div>
  )
}
