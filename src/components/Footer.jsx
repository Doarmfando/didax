import { Link } from "react-router-dom";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import SocialIcon from "./SocialIcon.jsx";
import { brand, navigation, whatsappUrl } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={brand.logo} alt="Logo DIDAX" />
          <p>
            Cursos, consultoría e implementación tecnológica para profesionales y
            empresas.
          </p>
        </div>

        <div>
          <h2>Empresa</h2>
          <ul className="footer-list">
            <li>{brand.company}</li>
            <li>RUC: {brand.ruc}</li>
            <li>{brand.domain}</li>
          </ul>
        </div>

        <div>
          <h2>Contacto</h2>
          <ul className="footer-list">
            <li>
              <MessageCircle size={17} />
              <a href={whatsappUrl()} target="_blank" rel="noreferrer">
                {brand.phone}
              </a>
            </li>
            <li>
              <Mail size={17} />
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </li>
            <li>
              <MapPin size={17} />
              Perú
            </li>
          </ul>
        </div>

        <div>
          <h2>Enlaces</h2>
          <ul className="footer-links">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/politica-privacidad">Política de privacidad</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 DIDAX</p>
        <div className="social-row" aria-label="Redes sociales">
          {brand.social.map((item) => (
            <a key={item.id} href={item.url} aria-label={`Abrir ${item.label}`} title={item.label} target="_blank" rel="noreferrer">
              <SocialIcon id={item.id} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
