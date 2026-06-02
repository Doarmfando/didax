import { Mail, MessageCircle, Send } from "lucide-react";
import ButtonLink from "../components/ButtonLink.jsx";
import Seo from "../components/Seo.jsx";
import SocialIcon from "../components/SocialIcon.jsx";
import { brand, whatsappUrl } from "../data/site.js";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    const subject = "Nueva consulta desde didax.tech";
    const body = [
      "Hola DIDAX,",
      "",
      "Quiero solicitar informacion con estos datos:",
      "",
      `Nombres: ${values.nombres}`,
      `Apellidos: ${values.apellidos}`,
      `Numero: ${values.numero}`,
      `Correo electronico: ${values.correo}`,
      "",
      "Consulta:",
      values.consulta,
      "",
      "Enviado desde el formulario de contacto de didax.tech.",
    ].join("\n");

    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Seo
        title="Contacto | DIDAX"
        description="Contacta a DIDAX por WhatsApp, correo o formulario para cursos, asesorias, consultorias y soluciones empresariales."
      />

      <section className="hero hero--compact">
        <div className="container narrow">
          <p className="eyebrow">Contacto</p>
          <h1>Estamos aquí para ayudarte a transformar tu futuro y tu empresa.</h1>
          <p>
            Contáctanos en este momento, sin presiones, sin costo ni compromiso
            alguno.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <aside className="contact-panel">
            <h2>Datos directos</h2>
            <a href={whatsappUrl()} target="_blank" rel="noreferrer">
              <MessageCircle size={22} />
              <span>{brand.phone}</span>
            </a>
            <a href={`mailto:${brand.email}`}>
              <Mail size={22} />
              <span>{brand.email}</span>
            </a>
            <div className="social-row social-row--wrap">
              {brand.social.map((item) => (
                <a key={item.id} href={item.url} aria-label={`Abrir ${item.label}`} title={item.label}>
                  <SocialIcon id={item.id} />
                </a>
              ))}
            </div>
            <ButtonLink href={whatsappUrl()} target="_blank" rel="noreferrer">
              WhatsApp inmediato
            </ButtonLink>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Nombres
                <input name="nombres" type="text" autoComplete="given-name" required />
              </label>
              <label>
                Apellidos
                <input name="apellidos" type="text" autoComplete="family-name" required />
              </label>
            </div>
            <div className="form-row">
              <label>
                Número
                <input name="numero" type="tel" autoComplete="tel" required />
              </label>
              <label>
                Correo electrónico
                <input name="correo" type="email" autoComplete="email" required />
              </label>
            </div>
            <label>
              Consulta
              <textarea name="consulta" rows="6" required />
            </label>
            <button className="button button--primary" type="submit">
              Enviar
              <Send size={18} />
            </button>
            <p className="form-note">
              Al enviar se abrira tu cliente de correo con un mensaje formateado
              para DIDAX.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
