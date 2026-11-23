
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "../styles/navbar.css";

const links = [
  ["Home", "/#home"],
  ["Events", "/#events"],
  ["About", "/#about"],
  ["Rules", "/#rules"],
  ["Organizers", "/#organizers"]
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);

    const targetId = href.split("#")[1];
    if (window.location.pathname !== "/") {
      window.location.href = href;
      return;
    }

    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <header className="navbar">

      {/* College and Department Branding */}
      <a
        className="brand"
        href="/#home"
        aria-label="Loyola College home"
        onClick={(event) => handleNavigation(event, "/#home")}
      >
        <img
          src="/images/logo-lc.png"
          alt="Loyola College"
          className="college-logo"
        />

        <img
          src="/images/logo-dept.png"
          alt="Department of Computer Science"
          className="department-logo"
        />

        <span className="brand-copy">
          <strong>LOYOLA COLLEGE</strong>
          <small>DEPARTMENT OF COMPUTER SCIENCE AND APPLICATIONS</small>
        </span>
      </a>

      {/* Mobile Menu Toggle */}
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      {/* Navigation Links */}
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>

        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            onClick={(event) => handleNavigation(event, href)}
          >
            {label}
          </a>
        ))}

        <a
          className="nav-cta"
          href="/#events"
          onClick={(event) => handleNavigation(event, "/#events")}
        >
          Explore fest <ArrowUpRight size={16} />
        </a>

      </nav>
    </header>
  );
}
