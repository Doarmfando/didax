<?php

function build_email_html(string $nombres, string $apellidos, string $numero, string $correo, string $consulta): string
{
    $s_body    = 'margin:0;padding:0;background:#f5f7f8;font-family:Inter,ui-sans-serif,system-ui,sans-serif;';
    $s_wrap    = 'background:#f5f7f8;padding:40px 16px;';
    $s_card    = 'max-width:560px;width:100%;';
    $s_header  = 'background:#111315;border-radius:8px 8px 0 0;padding:28px 32px;text-align:center;';
    $s_content = 'background:#ffffff;padding:32px;border-left:1px solid #dfe4e8;border-right:1px solid #dfe4e8;';
    $s_footer  = 'background:#111315;border-radius:0 0 8px 8px;padding:18px 32px;text-align:center;';
    $s_field   = 'padding:14px 16px;background:#f5f7f8;border-radius:6px;border-left:3px solid #d8932d;';
    $s_label   = 'margin:0 0 4px;font-size:11px;font-weight:600;color:#616a73;text-transform:uppercase;letter-spacing:0.6px;';
    $s_value   = 'margin:0;font-size:15px;color:#111315;font-weight:500;';

    return <<<HTML
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
    <body style="$s_body">
    <table width="100%" cellpadding="0" cellspacing="0" style="$s_wrap">
    <tr><td align="center">
    <table style="$s_card" cellpadding="0" cellspacing="0">

      <!-- Header -->
      <tr><td style="$s_header">
        <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">DIDAX</p>
        <p style="margin:6px 0 0;font-size:13px;color:#d8932d;letter-spacing:0.5px;text-transform:uppercase;">Nueva consulta desde el sitio web</p>
      </td></tr>

      <!-- Contenido -->
      <tr><td style="$s_content">
        <p style="margin:0 0 24px;font-size:15px;color:#616a73;">
          Nuevo mensaje desde el formulario de <strong style="color:#111315;">didax.tech</strong>.
        </p>

        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
          <tr><td style="$s_field">
            <p style="$s_label">Nombres y Apellidos</p>
            <p style="$s_value">$nombres $apellidos</p>
          </td></tr>
        </table>

        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
          <tr><td style="$s_field">
            <p style="$s_label">Número</p>
            <p style="$s_value">$numero</p>
          </td></tr>
        </table>

        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
          <tr><td style="$s_field">
            <p style="$s_label">Correo Electrónico</p>
            <p style="$s_value"><a href="mailto:$correo" style="color:#276c95;text-decoration:none;">$correo</a></p>
          </td></tr>
        </table>

        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td style="$s_field">
            <p style="$s_label">Consulta</p>
            <p style="margin:0;font-size:15px;color:#111315;line-height:1.6;white-space:pre-wrap;">$consulta</p>
          </td></tr>
        </table>
      </td></tr>

      <!-- Footer -->
      <tr><td style="$s_footer">
        <p style="margin:0;font-size:12px;color:#616a73;">
          Enviado desde <a href="https://didax.tech" style="color:#d8932d;text-decoration:none;">didax.tech</a>
        </p>
      </td></tr>

    </table>
    </td></tr>
    </table>
    </body>
    </html>
    HTML;
}
