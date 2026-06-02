<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://didax.tech');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Método no permitido.']);
    exit;
}

// Rate limiting: max 1 envio por IP cada 3 minutos
$rate_limit_minutes = 3;
$ip      = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rl_file = sys_get_temp_dir() . '/didax_rl_' . md5($ip) . '.txt';
$now     = time();

if (file_exists($rl_file)) {
    $last = (int) file_get_contents($rl_file);
    if ($now - $last < $rate_limit_minutes * 60) {
        $wait = $rate_limit_minutes * 60 - ($now - $last);
        http_response_code(429);
        echo json_encode(['ok' => false, 'message' => "Espera $wait segundos antes de enviar otro mensaje."]);
        exit;
    }
}
file_put_contents($rl_file, $now);

require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$nombres  = trim($_POST['nombres']  ?? '');
$apellidos = trim($_POST['apellidos'] ?? '');
$numero   = trim($_POST['numero']   ?? '');
$correo   = trim($_POST['correo']   ?? '');
$consulta = trim($_POST['consulta'] ?? '');

if (!$nombres || !$apellidos || !$numero || !$correo || !$consulta) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Todos los campos son obligatorios.']);
    exit;
}

if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Correo electrónico inválido.']);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'doarmfando@gmail.com';
    $mail->Password   = 'lfsptlfmzhasdfia';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom('doarmfando@gmail.com', 'DIDAX Web');
    $mail->addAddress('doarmfando@gmail.com', 'Brando Armas');
    $mail->addReplyTo($correo, "$nombres $apellidos");

    $mail->Subject = "Nueva consulta desde didax.tech — $nombres $apellidos";
    $mail->Body    = implode("\n", [
        "Hola DIDAX,",
        "",
        "Quiero solicitar información con estos datos:",
        "",
        "Nombres: $nombres",
        "Apellidos: $apellidos",
        "Número: $numero",
        "Correo electrónico: $correo",
        "",
        "Consulta:",
        $consulta,
        "",
        "Enviado desde el formulario de contacto de didax.tech.",
    ]);

    $mail->send();
    echo json_encode(['ok' => true, 'message' => 'Mensaje enviado correctamente.']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => $e->getMessage()]);
}
