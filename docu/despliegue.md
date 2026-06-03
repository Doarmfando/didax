# Despliegue en Hostinger — DIDAX

## Antes de desplegar (checklist)

### 1. Configurar credenciales del correo

En `public/api/contact.php` reemplazar los valores de prueba por los del cliente:

```php
$mail->Username = 'jmontenegro@didax.tech';
$mail->Password = 'APP_PASSWORD_DE_JULIO';
$mail->setFrom('jmontenegro@didax.tech', 'DIDAX Web');
$mail->addAddress('jmontenegro@didax.tech', 'Julio Montenegro');
```

Para obtener el App Password, Julio debe:
1. Entrar a myaccount.google.com con jmontenegro@didax.tech
2. Seguridad → Verificacion en 2 pasos (activar si no esta)
3. Contraseñas de aplicaciones → Crear → copiar clave de 16 caracteres

### 2. Quitar lineas de debug

Eliminar del inicio de `public/api/contact.php`:

```php
ini_set('display_errors', 1);
error_reporting(E_ALL);
```

### 3. Instalar dependencias PHP

Dentro de `public/api/` correr:

```bash
cd public/api
composer install --no-dev --optimize-autoloader
```

El flag `--no-dev` excluye paquetes de desarrollo y `--optimize-autoloader` mejora la velocidad en produccion.

### 4. Generar el build

En la raiz del proyecto:

```bash
npm.cmd run build
```

Esto genera la carpeta `dist/` con todo el sitio listo.

---

## Subir a Hostinger

### Opcion A — File Manager (sin SSH)

1. Entrar al hPanel de Hostinger con hostingdidax@gmail.com
2. Ir a **Archivos → Administrador de archivos**
3. Navegar a `public_html/`
4. Subir todo el contenido de `dist/` (no la carpeta dist en si, sino lo que hay dentro)
5. Subir tambien `public/api/vendor/` manualmente a `public_html/api/vendor/`

### Opcion B — FTP

Conectar con un cliente FTP (FileZilla) usando las credenciales FTP del hPanel y subir el contenido de `dist/` a `public_html/`.

---

## Estructura esperada en Hostinger

```txt
public_html/
  index.html
  assets/
  .htaccess          <- maneja las rutas de React Router
  api/
    contact.php
    email_template.php
    composer.json
    composer.lock
    vendor/
```

---

## Verificar despues de subir

- [ ] El sitio carga en didax.tech
- [ ] Las rutas funcionan al recargar (ej: didax.tech/contacto)
- [ ] El formulario de contacto envia y llega a jmontenegro@didax.tech
- [ ] El correo llega con el diseño HTML de DIDAX
- [ ] Los botones de WhatsApp abren correctamente
- [ ] Las redes sociales abren en pestaña nueva

---

## Notas importantes

- El correo `jmontenegro@didax.tech` esta en **Google Workspace**, no en Hostinger
- El SMTP usa `smtp.gmail.com` puerto 587 con App Password
- El `vendor/` de PHP no se sube al repositorio git — se genera localmente y se sube directo a Hostinger
- El `.htaccess` en `public/` se copia automaticamente al `dist/` en el build y permite que React Router funcione en Apache
