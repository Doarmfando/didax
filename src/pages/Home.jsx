import { ArrowRight, CheckCircle2, BriefcaseBusiness } from "lucide-react";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import PowerBiIcon from "../components/PowerBiIcon.jsx";
import ButtonLink from "../components/ButtonLink.jsx";
import CtaBand from "../components/CtaBand.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import { benefits, valueProps } from "../data/services.js";
import { brand, whatsappUrl } from "../data/site.js";

import imgExcel from "../../img/Principal-Excel1.jpg";
import imgPowerBi from "../../img/Principal-PowerBI1.jpg";
import imgAsesoria from "../../img/Principal-Asesoria1.jpg";

const featured = [
  {
    title: "Excel a Nivel Elite",
    label: "Detalle del curso",
    href: "/excel",
    accent: "green",
    image: imgExcel,
    text: "Domina Excel desde cero hasta nivel avanzado con una ruta práctica para automatizar procesos, gestionar datos y crear reportes de alto impacto.",
  },
  {
    title: "Power BI a Nivel Elite",
    label: "Detalle del curso",
    href: "/powerbi",
    accent: "yellow",
    image: imgPowerBi,
    text: "Conecta fuentes, automatiza tableros interactivos y diseña dashboards gerenciales para convertir datos complejos en decisiones estratégicas.",
  },
  {
    title: "Servicios a medida",
    label: "Para Empresas",
    href: "/empresas",
    accent: "orange",
    image: imgAsesoria,
    text: "Diseñamos soluciones personalizadas para automatizar procesos, corregir ineficiencias y transformar datos en herramientas de control.",
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="DIDAX | Cursos, consultoría e implementación tecnológica"
        description="Cursos, consultoría e implementación tecnológica para profesionales y empresas. Excel, Power BI y soluciones empresariales a medida."
      />

      <section className="hero hero--home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Cursos, consultoría e implementación tecnológica</p>
            <h1>La brecha entre tu conocimiento actual y lo que el mercado exige</h1>
            <p>
              DIDAX impulsa profesionales y empresas con formación práctica,
              consultoría especializada e implementación de soluciones tecnológicas.
            </p>
            <div className="button-row">
              <ButtonLink href={whatsappUrl()} target="_blank" rel="noreferrer">
                Comunícate ahora
                <ArrowRight size={18} />
              </ButtonLink>
              <ButtonLink to="/excel" variant="secondary">
                Ver cursos
              </ButtonLink>
            </div>
          </div>

          <div className="hero-visual" aria-label="DIDAX capacitación tecnológica">
            <img src={brand.logo} alt="Logo DIDAX" />
            <div className="metric-strip">
              <span>DIDAX</span>
              <div className="hero-tools" aria-label="Excel, Power BI y Consultoría">
                <span aria-label="Excel" title="Excel">
                  <PiMicrosoftExcelLogoFill size={27} />
                </span>
                <span aria-label="Power BI" title="Power BI">
                  <PowerBiIcon size={27} />
                </span>
                <span aria-label="Consultoría" title="Consultoría">
                  <BriefcaseBusiness size={25} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Lo último"
            title="Rutas diseñadas para avanzar con criterio"
            text="Cursos y servicios enfocados en habilidades técnicas, productividad y resultados empresariales."
          />
          <div className="feature-grid">
            {featured.map((item) => {
              return (
                <article className={`feature-card feature-card--${item.accent}`} key={item.title}>
                  <div className="feature-image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link to={item.href} className="text-link">
                    {item.label}
                    <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container split-section">
          <div>
            <p className="eyebrow">La empresa</p>
            <h2>DIDAX desarrolla capital humano y soluciones tecnológicas aplicadas</h2>
          </div>
          <p>
            DIDAX es una organización especializada en desarrollo de capital humano
            e implementación de soluciones tecnológicas para la competitividad
            empresarial.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Propuesta de valor"
            title="Aprendizaje y consultoría conectados con problemas reales"
          />
          <div className="value-grid">
            {valueProps.map((item) => (
              <article className="value-item" key={item.title}>
                <span />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container benefit-layout">
          <SectionHeader
            eyebrow="Beneficios"
            title="Lo que debe quedar después de una capacitación"
            text="Habilidades aplicables, procesos más claros y mejores decisiones."
          />
          <div className="benefit-list">
            {benefits.map((item) => (
              <div className="benefit-item" key={item}>
                <CheckCircle2 size={22} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Adquiere conocimiento competitivo y mejora tu trabajo"
        text="Contáctanos, tus dudas de hoy serán tus problemas de mañana."
      />
    </>
  );
}
