import { Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import ButtonLink from "../components/ButtonLink.jsx";
import Seo from "../components/Seo.jsx";
import SocialIcon from "../components/SocialIcon.jsx";
import { brand, whatsappUrl } from "../data/site.js";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error | ratelimit
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);

    try {
      const res = await fetch("/api/contact.php", { method: "POST", body: formData });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
        event.target.reset();
      } else {
        setErrorMsg(data.message || "No se pudo enviar el mensaje.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("No se pudo enviar el mensaje.");
      setStatus("error");
    }
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
                <a key={item.id} href={item.url} aria-label={`Abrir ${item.label}`} title={item.label} target="_blank" rel="noreferrer">
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
            {status === "success" && (
              <p className="form-feedback form-feedback--ok">
                ¡Mensaje enviado! Nos pondremos en contacto contigo pronto.
              </p>
            )}
            {status === "error" && (
              <p className="form-feedback form-feedback--error">
                {errorMsg} Intenta por{" "}
                <a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a>.
              </p>
            )}
            <button
              className="button button--primary"
              type="submit"
              disabled={status === "sending" || status === "success"}
            >
              {status === "sending" ? "Enviando…" : "Enviar"}
              {status !== "sending" && <Send size={18} />}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
