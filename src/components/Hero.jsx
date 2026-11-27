import { MapPin, CalendarDays, ArrowUpRight } from "lucide-react";
import { homeData } from "../data/homeData.js";
import Countdown from "./Countdown.jsx";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-image" style={{ backgroundImage: `url("${homeData.heroImage}")` }} />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">{homeData.eyebrow}</p>
        <p className="hero-college">{homeData.college}</p>
        <p className="hero-department">{homeData.department}</p>
       <h1>{homeData.festName}</h1>
        <p className="hero-tagline">{homeData.tagline}</p>

        <div className="hero-meta">
          <span><CalendarDays size={18} />{homeData.dateLabel}</span>
          <span><MapPin size={18} />{homeData.venue}</span>
        </div>

        <a className="primary-button" href="#events">
          Discover the events <ArrowUpRight size={18} />
        </a>
      </div>

      <div className="hero-bottom">
        <div className="hero-note">
          <span className="hero-note-line" />
          <span>IDEAS INTO IMPACT</span>
        </div>
        <Countdown targetDate={homeData.eventDate} />
      </div>
    </section>
  );
}