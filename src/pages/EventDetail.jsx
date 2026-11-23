import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Image as ImageIcon,
  MessagesSquare,
  Presentation,
  Music2,
  Crown,
  AudioWaveform,
  MapPinned,
  ShieldCheck
} from "lucide-react";
import { eventDetailsById } from "../data/events/index.js";
import { rules as generalRules } from "../data/rulesData.js";
import "../styles/event-detail.css";

const eventIcons = {
  code: Code2,
  image: ImageIcon,
  messages: MessagesSquare,
  presentation: Presentation,
  music: Music2,
  crown: Crown,
  "music-waveform": AudioWaveform,
  map: MapPinned
};

export default function EventDetail({ eventId }) {
  const event = eventDetailsById[eventId];

  if (!event) {
    return (
      <main className="event-detail-page section-shell event-not-found">
        <p className="eyebrow">ZAMNIRA 2026</p>
        <h1>Event not found.</h1>
        <a className="event-back-link" href="/#events"><ArrowLeft size={17} /> Back to all events</a>
      </main>
    );
  }

  const Icon = eventIcons[event.icon] || Code2;
  const hasRegistrationLink = Boolean(event.registrationUrl?.trim());

  return (
    <main className="event-detail-page section-shell">
      <a className="event-back-link" href="/#events">
        <ArrowLeft size={17} /> Back to all events
      </a>

      <section className="event-detail-hero">
        <div className="event-detail-orbit event-detail-orbit-one" />
        <div className="event-detail-orbit event-detail-orbit-two" />
        <div className="event-detail-icon"><Icon size={54} strokeWidth={1.25} /></div>
        <p className="eyebrow">ZAMNIRA · DEPARTMENT FESTIVAL 2026</p>
        <p className="event-detail-category">{event.category}</p>
        <h1>{event.title}</h1>
        <p className="event-detail-description">{event.description}</p>
        <p className="event-detail-department">DEPARTMENT OF COMPUTER SCIENCE AND APPLICATIONS</p>
      </section>

      <section className="event-detail-rules" aria-labelledby="general-rules-heading">
        <div className="event-detail-section-heading">
          <div>
            <p className="eyebrow">PLEASE READ BEFORE REGISTERING</p>
            <h2 id="general-rules-heading">General <span>rules.</span></h2>
          </div>
          <p>These guidelines apply to participants across ZAMNIRA.</p>
        </div>

        <ol className="event-detail-rule-list">
          {generalRules.map((rule, index) => (
            <li key={`general-rule-${index}`}>
              <span className="event-detail-rule-number">{String(index + 1).padStart(2, "0")}</span>
              <ShieldCheck size={19} aria-hidden="true" />
              <p>{rule}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="event-detail-rules event-specific-rules" aria-labelledby="event-rules-heading">
        <div className="event-detail-section-heading">
          <div>
            <p className="eyebrow">KNOW YOUR CHALLENGE</p>
            <h2 id="event-rules-heading">Event <span>rules.</span></h2>
          </div>
          <p>Read the event-specific instructions carefully before registering.</p>
        </div>

        <ol className="event-detail-rule-list">
          {event.rules.map((rule, index) => (
            <li key={`${event.id}-rule-${index}`}>
              <span className="event-detail-rule-number">{String(index + 1).padStart(2, "0")}</span>
              <ShieldCheck size={19} aria-hidden="true" />
              <p>{rule}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="event-register-panel">
        <div>
          <p className="eyebrow">READY TO TAKE THE CHALLENGE?</p>
          <h2>Make your <span>move.</span></h2>
          <p>Complete your registration for {event.title}.</p>
        </div>
        {hasRegistrationLink ? (
          <a className="event-register-button" href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
            Register now <ArrowUpRight size={18} />
          </a>
        ) : (
          <span className="event-register-pending">Registration link will be added soon</span>
        )}
      </section>
    </main>
  );
}
