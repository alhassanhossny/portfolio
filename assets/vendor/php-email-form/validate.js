<?php

header('Content-Type: application/json');

// Set your receiving email address
$receiving_email_address = 'alhassan.hossny@gmail.com';

// Function to sanitize input
function sanitize_input($data) {
    return htmlspecialchars(stripslashes(trim($data)), ENT_QUOTES, 'UTF-8');
}

// Check if form is submitted via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Validate required fields
        $required = ['name', 'email', 'message'];
        foreach ($required as $field) {
            if (empty($_POST[$field])) {
                throw new Exception("Please fill all required fields.");
            }
        }

        // Sanitize inputs
        $name = sanitize_input($_POST['name']);
        $email = filter_var(sanitize_input($_POST['email']), FILTER_VALIDATE_EMAIL);
        $subject = isset($_POST['subject']) ? sanitize_input($_POST['subject']) : 'No Subject';
        $message = sanitize_input($_POST['message']);

        if (!$email) {
            throw new Exception("Please enter a valid email address.");
        }

        // Prepare email content
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Subject: $subject\n\n";
        $email_content .= "Message:\n$message\n";

        // Prepare headers
        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Send email
        $mail_sent = mail($receiving_email_address, $subject, $email_content, $headers);

        if ($mail_sent) {
            echo json_encode(['success' => true, 'message' => 'Your message has been sent. Thank you!']);
        } else {
            throw new Exception("Failed to send email. Please try again later.");
        }
    } catch (Exception $e) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
exit;
?>