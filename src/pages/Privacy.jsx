import Seo from "../components/Seo.jsx";
import { brand } from "../data/site.js";

export default function Privacy() {
  return (
    <>
      <Seo
        title="Política de privacidad | DIDAX"
        description="Politica de privacidad de DIDAX para el tratamiento de datos de contacto y solicitudes comerciales."
      />

      <section className="hero hero--compact">
        <div className="container narrow">
          <p className="eyebrow">Legal</p>
          <h1>Política de privacidad</h1>
          <p>
            Texto base editable para publicar una política clara de tratamiento de
            datos.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Responsable</h2>
          <p>
            {brand.company}, identificada con RUC {brand.ruc}, es responsable del
            tratamiento de los datos personales enviados mediante sus formularios,
            WhatsApp, correo electrónico o canales digitales.
          </p>

          <h2>Datos recopilados</h2>
          <p>
            Podemos recopilar nombres, apellidos, teléfono, correo electrónico,
            empresa, cargo y contenido de la consulta enviada por el usuario.
          </p>

          <h2>Finalidad</h2>
          <p>
            Los datos se usan para responder solicitudes, brindar información sobre
            cursos y servicios, gestionar inscripciones, coordinar asesorías y
            mejorar la atención comercial.
          </p>

          <h2>Conservación</h2>
          <p>
            La información se conserva durante el tiempo necesario para atender la
            solicitud y cumplir obligaciones comerciales o legales aplicables.
          </p>

          <h2>Derechos del usuario</h2>
          <p>
            El usuario puede solicitar acceso, rectificación, actualización o
            eliminación de sus datos escribiendo a {brand.email}.
          </p>

          <h2>Actualización</h2>
          <p>
            Esta política puede actualizarse cuando se incorporen nuevos canales,
            servicios o requisitos legales. Última actualización: junio de 2026.
          </p>
        </div>
      </section>
    </>
  );
}
