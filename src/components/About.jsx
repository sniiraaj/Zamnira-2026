import { Cpu, Users, Lightbulb } from "lucide-react";
import "../styles/about.css";

const highlights = [
  { icon: Cpu, title: "Technology", text: "Explore ideas, tools and emerging technologies." },
  { icon: Users, title: "Community", text: "Meet curious minds and collaborate with peers." },
  { icon: Lightbulb, title: "Creativity", text: "Turn original thinking into practical solutions." }
];

export default function About() {
  return (
    <section className="about-section section-shell" id="about">
      <div className="about-copy">
        <p className="eyebrow">BEYOND THE CLASSROOM</p>
        <h2>Built for the <span>curious.</span></h2>
        <p className="about-description">
          The Department of Computer Science at Loyola College brings students together
          for a celebration of problem-solving, creativity and technological exploration.
          Replace this paragraph with your official fest description.
        </p>
        <a className="text-link" href="#organizers">Meet the team <ArrowUpRightFallback /></a>
      </div>
      <div className="highlight-list">
        {highlights.map(({ icon: Icon, title, text }, index) => (
          <div className="highlight-item" key={title}>
            <span className="highlight-index">0{index + 1}</span>
            <span className="highlight-icon"><Icon size={22} /></span>
            <div><h3>{title}</h3><p>{text}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ArrowUpRightFallback() {
  return <span aria-hidden="true">↗</span>;
}