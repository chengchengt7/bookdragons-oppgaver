import type { Event } from "@/payload-types";

type EventCardProps = {
  event: Event;
};

export default function EventCard({ event }: EventCardProps) {
  const date = new Date(event.date);
  const month = date.toLocaleDateString("nb-NO", { month: "short", timeZone: "Europe/Oslo" }).replace(".", "");
  const day = date.toLocaleDateString("nb-NO", { day: "2-digit", timeZone: "Europe/Oslo" });
  const label = date.toLocaleDateString("nb-NO", { day: "numeric", month: "long", timeZone: "Europe/Oslo" });

  return (
    <>
      <div className="calendar-icon" aria-label={label}>
        <span className="calendar-icon-month">{month}</span>
        <span className="calendar-icon-day">{day}</span>
      </div>
      <div className="stack stack-small">
        <h3 className="eyebrow-heading">{event.title}</h3>
        <p>{event.detail}</p>
        <p className="future-events-list-info">{event.period}. Inngang: {event.price},-</p>
      </div>
    </>
  );
}
