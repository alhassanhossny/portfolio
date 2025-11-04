<?php
// Basic contact form handler.
// Requirements: PHP enabled on the server. If mail() is disabled, configure SMTP or use PHPMailer.

// Recipient email - change to the address where you want to receive messages
$recipient = 'alhassan.hossny@gmail.com';

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Method Not Allowed';
    exit;
}

// Helper: safe input
function get_post($key) {
    return isset($_POST[$key]) ? trim($_POST[$key]) : '';
}

// Collect & sanitize
$name = strip_tags(get_post('name'));
$email = filter_var(get_post('email'), FILTER_SANITIZE_EMAIL);
$subject = strip_tags(get_post('subject'));
$message = strip_tags(get_post('message'));
$honeypot = get_post('website'); // hidden field added to form

// Basic spam/honeypot check
if (!empty($honeypot)) {
    // pretend success to confuse bots
    send_response(true, 'Message sent.');
}

// Validate fields
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    send_response(false, 'Please fill in all required fields.');
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    send_response(false, 'Invalid email address.');
}

// Prevent header injection
if (preg_match("/[\r\n]/", $name) || preg_match("/[\r\n]/", $email) || preg_match("/[\r\n]/", $subject)) {
    send_response(false, 'Invalid input.');
}

// Build email
$site = $_SERVER['HTTP_HOST'] ?? 'website';
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';

$body = "You have received a new message from your contact form on {$site}\n\n";
$body .= "Name: {$name}\n";
$body .= "Email: {$email}\n";
$body .= "Subject: {$subject}\n\n";
$body .= "Message:\n{$message}\n\n";
$body .= "----\nIP: {$ip}\nUser-Agent: {$userAgent}\n";

// Headers
$headers = [];
$headers[] = "From: {$name} <{$email}>";
$headers[] = "Reply-To: {$email}";
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";

$ok = @mail($recipient, $subject, $body, implode("\r\n", $headers));

if ($ok) {
    send_response(true, 'Your message has been sent. Thank you!');
} else {
    send_response(false, 'Failed to send message. Please try again later.');
}

// Helper to send JSON for AJAX or plain text
function send_response($success, $msg) {
    $isAjax = (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') || (strpos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false);
    if ($isAjax) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['status' => $success ? 'ok' : 'error', 'message' => $msg]);
    } else {
        if ($success) {
            echo $msg;
        } else {
            http_response_code(400);
            echo $msg;
        }
    }
    exit;
}
?>
