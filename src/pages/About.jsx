import { Linkedin, Target, TrendingUp, Users } from "lucide-react";
import ButtonLink from "../components/ButtonLink.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Seo from "../components/Seo.jsx";
import { images, whatsappUrl } from "../data/site.js";

const pillars = [
  {
    title: "Mentores de industria",
    text: "Aprendes con especialistas que aplican lo que enseñan en escenarios reales.",
    icon: Users,
  },
  {
    title: "Resultados rápidos",
    text: "Cada sesión prioriza habilidades prácticas, decisiones claras y avance medible.",
    icon: TrendingUp,
  },
  {
    title: "Acompañamiento real",
    text: "La formación se sostiene con orientación y respuesta a dudas concretas.",
    icon: Target,
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="Quiénes somos | DIDAX"
        description="Conoce a DIDAX, su fundador, misión, visión y enfoque de capacitación práctica para profesionales y empresas."
      />

      <section className="hero hero--compact">
        <div className="container narrow">
          <p className="eyebrow">Quiénes somos</p>
          <h1>Conócenos más a fondo para saber nuestro plan contigo.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container profile-grid">
          <div className="profile-photo">
            <img src={images.julioPhoto} alt="Julio Percy Montenegro Flores" loading="lazy" />
          </div>
          <div className="profile-copy">
            <p className="eyebrow">Nuestro CEO</p>
            <h2>Julio Percy Montenegro Flores</h2>
            <p className="lead">Fundador principal mentor de DIDAX.</p>
            <p>
              Consultor experto en costos, presupuestos, proyección financiera,
              procesos e indicadores de gestión. Más de 15 años de experiencia
              en el sector privado y más de 5 años como docente.
            </p>
            <ButtonLink href="#" variant="secondary" aria-label="LinkedIn de Julio Montenegro">
              <Linkedin size={18} />
              LinkedIn
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container pillar-grid">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <article className="pillar-card" key={item.title}>
                <Icon size={26} />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="container mission-grid">
          <article>
            <p className="eyebrow">Misión</p>
            <h2>Democratizar el know-how de la alta gestión y la tecnología</h2>
            <p>
              Llevamos conocimiento a profesionales y empresas a través de
              formación práctica, consultoría especializada e implementación,
              guiados por expertos que están hoy en el campo.
            </p>
          </article>
          <article>
            <p className="eyebrow">Visión</p>
            <h2>Crear una comunidad transformada por conocimiento aplicado</h2>
            <p>
              Posicionar a DIDAX como sello de calidad y efectividad en
              capacitación tecnológica y de gestión en Latinoamérica.
            </p>
          </article>
        </div>
      </section>

      <CtaBand
        title="Hablemos de tu siguiente avance"
        text="Cuéntanos qué necesitas aprender, resolver o implementar."
        button="Ir a contacto"
        message="Hola, quiero conocer más sobre DIDAX"
      />
    </>
  );
}
