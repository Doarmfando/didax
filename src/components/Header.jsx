import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, MessageCircle, X } from "lucide-react";
import { brand, navigation, whatsappUrl } from "../data/site.js";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <div className="container header-shell">
        <Link className="brand-link" to="/" aria-label="Ir al inicio">
          <img src={brand.logo} alt="Logo DIDAX" />
          <span>DIDAX</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Navegación principal">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "nav-link is-active" : "nav-link")}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="button button--small button--primary"
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
