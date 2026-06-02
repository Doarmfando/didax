import { ArrowRight } from "lucide-react";
import ButtonLink from "./ButtonLink.jsx";
import { whatsappUrl } from "../data/site.js";

export default function CtaBand({ title, text, button = "Comunícate ahora", message }) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <h2>{title}</h2>
          {text ? <p>{text}</p> : null}
        </div>
        <ButtonLink href={whatsappUrl(message)} target="_blank" rel="noreferrer">
          {button}
          <ArrowRight size={18} />
        </ButtonLink>
      </div>
    </section>
  );
}
