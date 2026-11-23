import { homeData } from "../data/homeData.js";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer section-shell">
      <div>
        <p className="footer-brand">{homeData.college}<span>.</span></p>
        <p>{homeData.department}</p>
      </div>
      <div className="footer-right">
  <p>Designed & Developed by NIIRAAJ SUPARNA S</p>
  <p>© Zamnira 2026. All rights reserved.</p>
</div>
    </footer>
  );
}