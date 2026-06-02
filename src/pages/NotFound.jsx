import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Página no encontrada | DIDAX"
        description="La página solicitada no existe o fue movida."
      />
      <section className="hero hero--compact">
        <div className="container narrow">
          <p className="eyebrow">404</p>
          <h1>Página no encontrada</h1>
          <p>La ruta solicitada no existe o fue movida.</p>
          <Link className="button button--primary" to="/">
            Volver al inicio
          </Link>
        </div>
      </section>
    </>
  );
}
