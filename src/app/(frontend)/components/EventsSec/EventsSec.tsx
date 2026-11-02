import { RichText } from "@payloadcms/richtext-lexical/react";
import type { EventBlockType } from "@/payload-types";
import EventCard from "../EventCard/EventCard";

export default function EventsSec({ section }: { section: EventBlockType }) {
  return (
    <section className="m-b-xl stack stack-large">
      <div className="container grid two-plus-one-columns">
        <article className="stack">
          <h2 className="section-heading">{section.title}</h2>
          <img src={section.image} alt="" width="1920" height="1440" />
          <RichText data={section.description} />
          <a href="#" className="button">{section.ctaLabel}</a>
        </article>
        <aside className="stack">
          <h2 className="section-subheading">{section.eventsTitle}</h2>
          <ul className="future-events-list">
            {section.events.map((event) => (
              typeof event !== "number" && (
                <li key={event.id}>
                  <EventCard event={event} />
                </li>
              )
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
