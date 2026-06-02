import { ArrowRight, CalendarDays, CheckCircle2, Clock, MessageCircle } from "lucide-react";
import AnimatedAccordion from "../components/AnimatedAccordion.jsx";
import ButtonLink from "../components/ButtonLink.jsx";
import CtaBand from "../components/CtaBand.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import YouTubeLite from "../components/YouTubeLite.jsx";
import { whatsappUrl } from "../data/site.js";

export default function CourseLanding({ course }) {
  return (
    <>
      <Seo
        title={`${course.title} | DIDAX`}
        description={`${course.summary} ${course.description}`}
      />

      <section className="hero hero--course">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{course.eyebrow}</p>
            <h1>{course.title}</h1>
            <p>{course.summary}</p>
            <p>{course.description}</p>
            <ButtonLink
              href={whatsappUrl(course.whatsappMessage)}
              target="_blank"
              rel="noreferrer"
            >
              Inscríbete ahora mismo
              <ArrowRight size={18} />
            </ButtonLink>
          </div>
          <YouTubeLite url={course.videoUrl} title={course.title} cover={course.cover} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Temario"
            title="Lo que aprenderás"
            text="Módulos ordenados para avanzar desde fundamentos hasta aplicación profesional."
          />
          <AnimatedAccordion
            firstOpen
            numbered
            items={course.modules.map((module) => ({
              title: module.title,
              content: module.detail,
            }))}
          />
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeader eyebrow="Mentores" title="Tus profesores" />
          <div className="teacher-grid">
            {course.teachers.map((teacher) => (
              <article className="teacher-card" key={teacher.name}>
                <img src={teacher.photo} alt={teacher.name} loading="lazy" />
                <div>
                  <h2>{teacher.name}</h2>
                  <p className="teacher-role">{teacher.role}</p>
                  <p>{teacher.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container benefit-layout">
          <SectionHeader
            eyebrow="Incluye"
            title="Esto es lo que obtendrás por tu inversión"
          />
          <div className="benefit-list benefit-list--light">
            {course.benefits.map((item) => (
              <div className="benefit-item" key={item}>
                <CheckCircle2 size={22} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeader eyebrow="Inversión" title="Elige la ruta que mejor encaja contigo" />
          <div className="pricing-grid">
            {course.pricing.map((plan) => (
              <article className="price-card" key={plan.name}>
                <h2>{plan.name}</h2>
                <p className="muted-line">{plan.listPrice}</p>
                <p className="price-main">{plan.promoPrice}</p>
                <p>{plan.usd}</p>
                <p>{plan.includes}</p>
                <ButtonLink
                  href={whatsappUrl(`${course.whatsappMessage} - ${plan.name}`)}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                >
                  <MessageCircle size={18} />
                  Consultar
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container schedule-grid">
          <div>
            <p className="eyebrow">Inicio y horarios</p>
            <h2>Organiza tu agenda antes de inscribirte</h2>
          </div>
          <div className="schedule-card">
            <div>
              <CalendarDays size={22} />
              <span>Inicio</span>
              <strong>{course.schedule.start}</strong>
            </div>
            <div>
              <Clock size={22} />
              <span>Días</span>
              <strong>{course.schedule.days}</strong>
            </div>
            <div>
              <Clock size={22} />
              <span>Horario</span>
              <strong>{course.schedule.hours}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container faq-layout">
          <SectionHeader eyebrow="FAQ" title="Preguntas frecuentes" />
          <AnimatedAccordion
            className="faq-accordion"
            items={course.faqs.map((faq) => ({
              title: faq.question,
              content: faq.answer,
            }))}
          />
        </div>
      </section>

      <CtaBand
        title="Inscríbete ahora"
        text="Escríbenos por WhatsApp para confirmar disponibilidad, modalidad y pago."
        button="Inscríbete ahora"
        message={course.whatsappMessage}
      />
    </>
  );
}
