import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Events from "./pages/Events.jsx";
import About from "./components/About.jsx";
import Rules from "./components/Rules.jsx";
import Organizers from "./pages/Organizers.jsx";
import Footer from "./components/Footer.jsx";
import EventDetail from "./pages/EventDetail.jsx";
import "./styles/app.css";

export default function App() {
  const eventMatch = window.location.pathname.match(/^\/events\/([^/]+)\/?$/);

  if (eventMatch) {
    return (
      <>
        <Navbar />
        <EventDetail eventId={eventMatch[1]} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Events />
        <About />
        <Rules />
        <Organizers />
      </main>
      <Footer />
    </>
  );
}
