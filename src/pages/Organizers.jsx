import { organizers } from "../data/organizersData.js";
import "../styles/organizers.css";

export default function Organizers() {
  return (
    <section className="organizers-section section-shell" id="organizers">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE PEOPLE BEHIND THE FEST</p>
          <h2>Meet the <span>team.</span></h2>
        </div>
        <p className="section-intro">The faculty and student team bringing this experience to life.</p>
      </div>
      <div className="organizer-grid">
        {organizers.map((person) => (
          <article className="organizer-card" key={person.role}>
            <div className="organizer-avatar">{person.name.charAt(0).toUpperCase()}</div>
            <p>{person.role}</p>
            <h3>{person.name}</h3>
            <span>{person.detail}</span>
          </article>
        ))}
      </div>
    </section>
  );
}