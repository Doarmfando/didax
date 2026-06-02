import logo from "../../img/logo-Grifo-solo.png";
import julioPhoto from "../../img/julio-montenegro-optimized.jpg";
import arturoPhoto from "../../img/arturo avila.jpeg";

export const brand = {
  name: "DIDAX",
  domain: "didax.tech",
  company: "DIDAX EIRL",
  ruc: "20615366022",
  email: "jmontenegro@didax.tech",
  phone: "+51 912 900 453",
  whatsappNumber: "51912900453",
  whatsappMessage: "Hola, necesito más información",
  logo,
  social: [
    { id: "facebook", label: "facebook", url: "https://www.facebook.com/profile.php?id=61586054381486" },
    { id: "instagram", label: "instagram", url: "https://www.instagram.com/didax_peru/" },
    { id: "youtube", label: "youtube", url: "https://www.youtube.com/@Didax-c8q" },
    { id: "linkedin", label: "linkedin", url: "https://www.linkedin.com/in/julio-percy-montenegro-flores-30a23413a/" },
    { id: "tiktok", label: "tiktok", url: "https://www.tiktok.com/@didax_peru" },
  ],
};

export const images = {
  julioPhoto,
  arturoPhoto,
  heroPlaceholder: "/img/hero-didax-placeholder.jpg",
  companiesPlaceholder: "/img/empresas-video-cover.jpg",
  excelCoverPlaceholder: "/img/excel-cover.jpg",
  powerbiCoverPlaceholder: "/img/powerbi-cover.jpg",
};

export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Empresas", href: "/empresas" },
  { label: "Cursos", href: "/cursos" },
  { label: "Contacto", href: "/contacto" },
];

export function whatsappUrl(message = brand.whatsappMessage) {
  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
