<?php
$from_email = "contact@yourdomain.com";
$to_email = "whatthefluff2024@gmail.com";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = trim($_POST["phone"]);
    $petName = trim($_POST["pet-name"]);
    $service = trim($_POST["service"]);
    $message = trim($_POST["message"]);

    $subject = "New Contact from $name";
    
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Pet: $petName\n";
    $email_content .= "Service: $service\n\n";
    $email_content .= "Message:\n$message\n";

    // IMPORTANT: Hostinger requires valid headers to avoid Spam folder
    $headers = "From: $from_email\r\n";
    $headers .= "Reply-To: $email\r\n"; // This lets you hit "Reply" and email the customer, not yourself
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to_email, $subject, $email_content, $headers)) {
        header("Location: contact.html?success=1");
    } else {
        header("Location: contact.html?success=0");
    }
}
?>