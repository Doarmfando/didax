import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Companies from "./pages/Companies.jsx";
import Courses from "./pages/Courses.jsx";
import CourseLanding from "./pages/CourseLanding.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import NotFound from "./pages/NotFound.jsx";

import { courses } from "./data/courses.js";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="contenido">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/empresas" element={<Companies />} />

          <Route path="/cursos" element={<Courses />} />
          <Route path="/excel" element={<CourseLanding course={courses.excel} />} />
          <Route path="/powerbi" element={<CourseLanding course={courses.powerbi} />} />

          <Route path="/contacto" element={<Contact />} />
          <Route path="/politica-privacidad" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}