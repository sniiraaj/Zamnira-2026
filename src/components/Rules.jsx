import { ShieldCheck } from "lucide-react";
import { rules } from "../data/rulesData.js";
import "../styles/rules.css";

export default function Rules() {
  return (
    <section className="rules-section section-shell" id="rules">
      <div className="section-heading">
        <div>
          <p className="eyebrow">KNOW BEFORE YOU ENTER</p>
          <h2>Rules &amp; <span>regulations.</span></h2>
        </div>
        <p className="section-intro">Please read the guidelines carefully and follow them throughout the event.</p>
      </div>
      <ol className="rules-list">
        {rules.map((rule, index) => (
          <li className="rule-item" key={index}>
            <span className="rule-number">{String(index + 1).padStart(2, "0")}</span>
            <ShieldCheck size={19} aria-hidden="true" />
            <p>{rule}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
