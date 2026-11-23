import { ArrowUpRight, Code2, Image, MessagesSquare, Megaphone, Users, Crown, Music2, MapPinned } from "lucide-react";
import { eventGroups } from "../data/eventsData.js";
import "../styles/events.css";

const icons = [Code2, Image, MessagesSquare, Megaphone, Users, Crown, Music2, MapPinned];

export default function Events() {
  let iconIndex = 0;

  return (
    <section className="content-section section-shell" id="events">
      <div className="section-heading">
        <div><p className="eyebrow">ENTER THE ARENA</p><h2>Choose your <span>realm.</span></h2></div>
        <p className="section-intro">Eight challenges. Two Domains. One chance to make your mark.</p>
      </div>
      {eventGroups.map((group) => (
        <div className="event-group" key={group.title}>
          <div className="event-group-heading"><div><p className="eyebrow">{group.title}</p><p>{group.subtitle}</p></div><span>{String(group.events.length).padStart(2, "0")} EVENTS</span></div>
          <div className="event-grid">
            {group.events.map((event) => {
              const Icon = icons[iconIndex++ % icons.length];
              return (
                <article className="event-card" key={event.id}>
                  <div className="event-art"><span className="event-number">{event.number}</span><Icon size={42} strokeWidth={1.25} /><span className="event-art-orbit" /></div>
                  <div className="event-card-body">
                    <div><span className="event-category">{event.category}</span><h3>{event.title}</h3><p>{event.description}</p></div>
                    <a href={`/events/${event.id}`} aria-label={`View ${event.title} details`} title={`View ${event.title} rules and registration`}><ArrowUpRight /></a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
