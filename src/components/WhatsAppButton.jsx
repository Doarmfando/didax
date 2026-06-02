import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../data/site.js";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp a DIDAX"
    >
      <MessageCircle size={26} />
    </a>
  );
}
