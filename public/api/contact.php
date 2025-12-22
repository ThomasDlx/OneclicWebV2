<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);

$name = isset($data['name']) ? htmlspecialchars($data['name']) : '';
$email = isset($data['email']) ? htmlspecialchars($data['email']) : '';
$phone = isset($data['phone']) ? htmlspecialchars($data['phone']) : '';
$service = isset($data['service']) ? htmlspecialchars($data['service']) : '';
$budget = isset($data['budget']) ? htmlspecialchars($data['budget']) : '';
$message = isset($data['message']) ? htmlspecialchars($data['message']) : '';

// Validation des champs obligatoires
if (empty($name) || empty($email) || empty($service) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Les champs nom, email, service et message sont requis']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email invalide']);
    exit();
}

// Validation du téléphone si fourni
if (!empty($phone)) {
    $cleanPhone = preg_replace('/\s+/', '', $phone);
    $cleanPhone = preg_replace('/^\+33/', '0', $cleanPhone);

    if (!preg_match('/^\d+$/', $cleanPhone)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Le numéro de téléphone ne doit contenir que des chiffres']);
        exit();
    }

    if (strlen($cleanPhone) === 10 && !preg_match('/^0[1-9]\d{8}$/', $cleanPhone)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Numéro de téléphone invalide']);
        exit();
    }

    $phone = $cleanPhone;
}

// Mapping des services
$serviceLabels = [
    'vitrine' => 'Site Vitrine',
    'ecommerce' => 'E-commerce',
    'application' => 'Application Web',
    'hebergement' => 'Hébergement',
    'materiel' => 'Matériel',
    'autre' => 'Autre'
];
$serviceLabel = isset($serviceLabels[$service]) ? $serviceLabels[$service] : $service;

// Mapping des budgets
$budgetLabels = [
    '500-3000' => '500€ - 3 000€',
    '3000-5000' => '3 000€ - 5 000€',
    '5000-10000' => '5 000€ - 10 000€',
    '10000+' => 'Plus de 10 000€'
];
$budgetLabel = !empty($budget) && isset($budgetLabels[$budget]) ? $budgetLabels[$budget] : 'Non spécifié';

// Préparation de l'email
$to = 'oneclick.web59@gmail.com';
$emailSubject = "Nouveau message de contact - OneClickWeb";
$from = "OneClickWeb Contact <noreply@oneclickweb.fr>";

// Corps de l'email HTML
$htmlBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0071e3; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 30px; background: #f9f9f9; }
        .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .detail-row { padding: 12px 0; border-bottom: 1px solid #eee; display: flex; }
        .detail-row:last-child { border-bottom: none; }
        .label { font-weight: bold; color: #666; width: 120px; flex-shrink: 0; }
        .value { color: #333; }
        .message-box { background: #f5f5f5; padding: 20px; border-left: 4px solid #0071e3; margin: 20px 0; border-radius: 0 8px 8px 0; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>OneClickWeb</h1>
            <p style='margin: 5px 0 0 0; opacity: 0.9;'>Nouveau message de contact</p>
        </div>
        <div class='content'>
            <p>Vous avez reçu un nouveau message depuis le formulaire de contact du site OneClickWeb.</p>

            <div class='details'>
                <div class='detail-row'>
                    <span class='label'>Nom :</span>
                    <span class='value'>$name</span>
                </div>
                <div class='detail-row'>
                    <span class='label'>Email :</span>
                    <span class='value'>$email</span>
                </div>
                <div class='detail-row'>
                    <span class='label'>Téléphone :</span>
                    <span class='value'>" . (!empty($phone) ? $phone : 'Non renseigné') . "</span>
                </div>
                <div class='detail-row'>
                    <span class='label'>Service :</span>
                    <span class='value'>$serviceLabel</span>
                </div>
                <div class='detail-row'>
                    <span class='label'>Budget :</span>
                    <span class='value'>$budgetLabel</span>
                </div>
            </div>

            <div class='message-box'>
                <strong>Message :</strong><br><br>
                " . nl2br($message) . "
            </div>
        </div>
        <div class='footer'>
            <p>OneClickWeb - Solutions web sur mesure</p>
        </div>
    </div>
</body>
</html>
";

// Corps de l'email texte
$textBody = "
Nouveau message de contact - OneClickWeb
=========================================

Nom : $name
Email : $email
Téléphone : " . (!empty($phone) ? $phone : 'Non renseigné') . "
Service : $serviceLabel
Budget : $budgetLabel

Message :
---------
$message

---
OneClickWeb - Solutions web sur mesure
";

// Headers
$headers = "From: $from\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Envoi de l'email
if (mail($to, $emailSubject, $htmlBody, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Message envoyé avec succès']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi du message']);
}
?>
