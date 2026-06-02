import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

import ButtonLink from "../components/ButtonLink.jsx";
import CtaBand from "../components/CtaBand.jsx";
import PowerBiIcon from "../components/PowerBiIcon.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import { courses } from "../data/courses.js";

const courseList = [
  {
    ...courses.excel,
    href: "/excel",
    accent: "excel",
    icon: <PiMicrosoftExcelLogoFill size={38} />,
  },
  {
    ...courses.powerbi,
    href: "/powerbi",
    accent: "powerbi",
    icon: <PowerBiIcon size={38} />,
  },
];

export default function Courses() {
  return (
    <>
      <Seo
        title="Cursos | DIDAX"
        description="Cursos de Excel y Power BI en DIDAX. Formación práctica, clases en vivo, casos reales y certificación."
      />

      <section className="hero hero--compact">
        <div className="container narrow">
          <p className="eyebrow">Cursos DIDAX</p>
          <h1>Aprende Excel y Power BI desde un solo lugar.</h1>
          <p>
            Dos rutas prácticas para dominar reportes, análisis de datos,
            dashboards y herramientas que hoy exige el mercado laboral.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Rutas disponibles"
            title="Elige el curso que quieres dominar"
            text="Puedes iniciar con Excel, avanzar con Power BI o llevar ambos para fortalecer tu perfil profesional."
          />

          <div className="course-hub-grid">
            {courseList.map((course) => (
              <article
                className={`course-hub-card course-hub-card--${course.accent}`}
                key={course.slug}
              >
                <div className="course-hub-card__top">
                  <div className="course-hub-card__icon">{course.icon}</div>
                  <span>{course.eyebrow}</span>
                </div>

                <h2>{course.title}</h2>
                <p>{course.summary}</p>

                <div className="course-hub-list">
                  <div>
                    <CheckCircle2 size={19} />
                    <span>Clases en vivo online</span>
                  </div>
                  <div>
                    <CheckCircle2 size={19} />
                    <span>Casos prácticos reales</span>
                  </div>
                  <div>
                    <CheckCircle2 size={19} />
                    <span>Certificado DIDAX</span>
                  </div>
                </div>

                <ButtonLink to={course.href}>
                  Ver detalle del curso
                  <ArrowRight size={18} />
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="¿No sabes cuál curso elegir?"
        text="Escríbenos por WhatsApp y te orientamos según tu nivel, objetivo laboral o necesidad empresarial."
        button="Consultar por WhatsApp"
        message="Hola, quiero información sobre los cursos de Excel y Power BI"
      />
    </>
  );
}