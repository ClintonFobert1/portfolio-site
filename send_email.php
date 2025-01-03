<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $captcha = $_POST['g-recaptcha-response'];

    // Verify CAPTCHA
    $secretKey = "6LcKyZkqAAAAADCyB5qU0f34LLRoyD9O77LeJN87"; // Replace with your reCAPTCHA secret key
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$captcha");
    $responseKeys = json_decode($response, true);

    if (intval($responseKeys["success"]) !== 1) {
        echo "CAPTCHA verification failed. Please try again.";
    } else {
        // Send email
        $to = "your-email@example.com"; // Replace with your email address
        $subject = "New Contact Form Submission";
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

        if (mail($to, $subject, $body)) {
            echo "Message sent successfully!";
        } else {
            echo "Message failed to send.";
        }
    }
} else {
    echo "Invalid request.";
}
?>
