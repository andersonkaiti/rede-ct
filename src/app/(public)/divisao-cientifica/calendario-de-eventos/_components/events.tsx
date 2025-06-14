import { getEvents } from "@services/events/events";

import { EventCard } from "./event-card";

export async function Events() {
  const events = await getEvents();

  return (
    <div className="flex flex-col gap-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
