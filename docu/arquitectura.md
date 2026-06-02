# Arquitectura del proyecto DIDAX

## Resumen

Este proyecto es un sitio web comercial para DIDAX construido con React, Vite y React Router. El objetivo es tener una version rapida, mantenible y lista para desplegar en Hostinger, sin WordPress.

El sitio contiene paginas informativas, landings de cursos, servicios para empresas, contacto, politica de privacidad y componentes globales reutilizables.

## Stack principal

- React 18
- Vite
- React Router DOM
- CSS propio con variables globales
- Lucide React para iconos generales
- React Icons para iconos de marca cuando aplica

## Estructura de carpetas

```txt
didax/
  docu/
    arquitectura.md
  img/
    logo-Grifo-solo.png
    Foto-perfil-2.jpg
    julio-montenegro-optimized.jpg
    arturo avila.jpeg
  public/
    .htaccess
  src/
    components/
    data/
    pages/
    styles/
    App.jsx
    main.jsx
  dist/
  index.html
  package.json
  vite.config.js
```

## Carpetas principales

### `src/pages`

Contiene las vistas principales del sitio:

- `Home.jsx`: pagina de inicio.
- `About.jsx`: pagina Quienes somos.
- `Companies.jsx`: pagina Empresas.
- `CourseLanding.jsx`: plantilla reutilizable para Excel y Power BI.
- `Contact.jsx`: pagina de contacto.
- `Privacy.jsx`: politica de privacidad.
- `NotFound.jsx`: pagina 404.

### `src/components`

Contiene componentes compartidos:

- `Header.jsx`: cabecera, navegacion y menu movil.
- `Footer.jsx`: pie global.
- `WhatsAppButton.jsx`: boton flotante de WhatsApp.
- `ButtonLink.jsx`: boton/enlace reutilizable.
- `SectionHeader.jsx`: titulo de seccion.
- `Seo.jsx`: actualiza title y meta description por pagina.
- `YouTubeLite.jsx`: carga ligera de videos de YouTube.
- `Carousel.jsx`: carrusel usado en cursos/servicios destacados.
- `AnimatedAccordion.jsx`: acordeon animado para temarios y FAQ.
- `SocialIcon.jsx`: iconos de redes sociales.
- `PowerBiIcon.jsx`: icono local para Power BI.

### `src/data`

Centraliza contenido editable:

- `site.js`: marca, contacto, logo, redes, navegacion y WhatsApp.
- `courses.js`: contenido de Excel y Power BI.
- `services.js`: propuesta de valor, beneficios y servicios empresariales.

Esta carpeta debe ser el primer lugar para cambiar textos, precios, fechas, horarios, videos o datos comerciales.

### `src/styles`

Contiene CSS global:

- `base.css`: variables, reset basico, tipografia y contenedor.
- `layout.css`: header, footer, botones, secciones y WhatsApp flotante.
- `pages.css`: estilos especificos de paginas, cards, hero, acordeones, carruseles, formularios y responsive.

## Rutas del sitio

Las rutas se definen en `src/App.jsx`:

- `/`
- `/quienes-somos`
- `/empresas`
- `/excel`
- `/powerbi`
- `/contacto`
- `/politica-privacidad`

React Router maneja la navegacion interna.

## Contenido editable

Para editar informacion de marca:

```txt
src/data/site.js
```

Para editar cursos:

```txt
src/data/courses.js
```

Para editar servicios empresariales:

```txt
src/data/services.js
```

## Contacto

La pagina de contacto usa un formulario controlado en `src/pages/Contact.jsx`.

Cuando el usuario envia el formulario:

1. React hace un `fetch POST` a `/api/contact.php` con los datos del formulario.
2. PHP valida los campos y envia el correo via SMTP con PHPMailer.
3. El correo llega directamente a `jmontenegro@didax.tech`.
4. React muestra mensaje de exito o error segun la respuesta.

### Backend PHP

```txt
public/
  api/
    contact.php       <- endpoint de envio
    composer.json     <- dependencia PHPMailer
    vendor/           <- generado con: composer install (no subir a git)
```

Instalar dependencias (una vez, dentro de public/api/):

```bash
cd public/api
composer install
```

Configuracion SMTP en `contact.php`:
- Host: smtp.gmail.com
- Puerto: 587 (STARTTLS)
- Usuario: jmontenegro@didax.tech
- Contrasena: App Password de Google (ver pendientes abajo)

Nota: el correo jmontenegro@didax.tech esta en Google Workspace (confirmado por MX records).
No esta en Hostinger. El hosting solo aloja el sitio web.

### Pendientes para produccion

1. Julio genera su App Password:
   - Entrar a myaccount.google.com con jmontenegro@didax.tech
   - Seguridad → Verificacion en 2 pasos (activar si no esta)
   - Contraseñas de aplicaciones → Crear → copiar clave de 16 caracteres

2. En `public/api/contact.php` reemplazar:
   - `$mail->Username` → jmontenegro@didax.tech
   - `$mail->Password` → App Password de Julio
   - `$mail->setFrom` → jmontenegro@didax.tech
   - `$mail->addAddress` → jmontenegro@didax.tech

3. Quitar las lineas de debug del PHP:
   ```php
   ini_set('display_errors', 1);
   error_reporting(E_ALL);
   ```

4. Correr build y subir dist/ a Hostinger:
   ```bash
   npm.cmd run build
   ```

Formato del correo enviado:

```txt
Hola DIDAX,

Quiero solicitar informacion con estos datos:

Nombres: ...
Apellidos: ...
Numero: ...
Correo electronico: ...

Consulta:
...

Enviado desde el formulario de contacto de didax.tech.
```

## WhatsApp

El enlace de WhatsApp se genera en:

```txt
src/data/site.js
```

Funcion:

```js
whatsappUrl(message)
```

Numero actual:

```txt
+51 912 900 453
```

## Videos

Los videos se muestran con `YouTubeLite.jsx`.

Este componente no carga el iframe pesado de YouTube de inmediato. Primero muestra miniatura o placeholder y carga el iframe solo cuando el usuario interactua.

Los enlaces se editan en:

```txt
src/data/courses.js
src/pages/Companies.jsx
```

## Acordeones

Temario y FAQ usan:

```txt
src/components/AnimatedAccordion.jsx
```

Tiene animacion suave de apertura/cierre con CSS, sin jQuery.

## Carrusel

El carrusel de cursos/servicios destacados usa:

```txt
src/components/Carousel.jsx
```

El comportamiento se basa en `scroll-snap`, scroll suave, flechas y puntos.

## Imagenes

Las imagenes fuente estan en:

```txt
img/
```

La foto optimizada de Julio es:

```txt
img/julio-montenegro-optimized.jpg
```

Se usa para reducir peso en produccion.

## SEO basico

Cada pagina usa `Seo.jsx` para actualizar:

- `document.title`
- `meta description`

El HTML base esta en:

```txt
index.html
```

## Despliegue en Hostinger

Para generar produccion:

```bash
npm.cmd run build
```

Luego subir el contenido de:

```txt
dist/
```

El archivo `public/.htaccess` se copia al build y permite que rutas como `/excel` o `/contacto` funcionen al recargar la pagina en hosting Apache.

## Comandos utiles

Instalar dependencias:

```bash
npm.cmd install
```

Desarrollo local:

```bash
npm.cmd run dev
```

Build:

```bash
npm.cmd run build
```

Preview:

```bash
npm.cmd run preview
```

## Temas principales del proyecto

- Conversion por WhatsApp y contacto.
- Cursos de Excel y Power BI.
- Servicios empresariales a medida.
- Contenido centralizado en archivos de datos.
- Componentes reutilizables.
- Carga ligera de video.
- Responsive para movil, tablet y escritorio.
- Preparado para Hostinger.
- Facil de ampliar con nuevas landings o cursos.
