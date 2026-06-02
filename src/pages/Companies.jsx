import { ArrowRight, Factory, Gauge, ShieldCheck } from "lucide-react";
import ButtonLink from "../components/ButtonLink.jsx";
import CtaBand from "../components/CtaBand.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import YouTubeLite from "../components/YouTubeLite.jsx";
import { companyServices } from "../data/services.js";
import { images, whatsappUrl } from "../data/site.js";

const stats = [
  { label: "Procesos", value: "Orden" },
  { label: "Control", value: "Datos" },
  { label: "Impacto", value: "ROI" },
];

export default function Companies() {
  return (
    <>
      <Seo
        title="Empresas | Capacitaciones, asesorías y consultorías DIDAX"
        description="Servicios empresariales de DIDAX: capacitaciones, asesorías, consultorías, control de costos, logística, productividad, calidad y analítica."
      />

      <section className="hero hero--companies">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Servicios empresariales</p>
            <h1>Capacitaciones, Asesorías y Consultorías</h1>
            <p>
              Intervenimos problemas operativos, humanos, comerciales y
              financieros con soluciones prácticas, tableros de control y
              acompañamiento especializado.
            </p>
            <ButtonLink href={whatsappUrl("Hola, quiero información para empresas")} target="_blank" rel="noreferrer">
              Contáctanos aquí
              <ArrowRight size={18} />
            </ButtonLink>
          </div>
          <div className="hero-panel">
            <Factory size={38} />
            <h2>Soluciones a medida para equipos que no pueden detenerse</h2>
            <div className="stat-row">
              {stats.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container video-layout">
          <SectionHeader
            eyebrow="Presentación"
            title="Conoce cómo trabajamos con empresas"
            text="Este bloque está preparado para colocar el video comercial final de DIDAX."
          />
          <YouTubeLite
            url="https://www.youtube.com/watch?v=VIDEO_EMPRESAS_PENDIENTE"
            title="Servicios empresariales DIDAX"
            cover={images.companiesPlaceholder}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Áreas de intervención"
            title="Servicios diseñados desde el problema hasta el impacto"
            text="Cada servicio identifica la fricción operativa, plantea una solución y enfoca el retorno esperado."
          />
          <div className="service-grid">
            {companyServices.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-card__head">
                  <ShieldCheck size={24} />
                  <h2>{service.title}</h2>
                </div>
                <dl>
                  <div>
                    <dt>El problema</dt>
                    <dd>{service.problem}</dd>
                  </div>
                  <div>
                    <dt>Nuestra solución</dt>
                    <dd>{service.solution}</dd>
                  </div>
                  <div>
                    <dt>Impacto / ROI</dt>
                    <dd>{service.impact}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container insight-strip">
          <Gauge size={34} />
          <div>
            <h2>Diagnóstico, implementación y control</h2>
            <p>
              El objetivo no es entregar documentos: es instalar procesos,
              indicadores y herramientas que permitan gestionar mejor.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Recuerda, las empresas no paran, tus problemas tampoco."
        button="No pierdas tiempo, contáctanos"
        message="Hola, necesito una asesoría para mi empresa"
      />
    </>
  );
}
