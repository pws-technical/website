<?php
$name       = $_POST['name']; 
$from       = 'help@paryavaran.ws'; 
$fromPerson = POST['email'];
$subject    = $_POST['subject']; 
$message    = $_POST['message']; 
$to   		= 'paryavaran.ws@gmail.com';//replace with your email

$autoMessage = 'Reply to this email at '.$fromPerson.'\n\n';
$messageToSend = $autoMessage.$message;

$headers = "MIME-Version: 1.0";
$headers .= "Content-type: text/plain; charset=iso-8859-1";
$headers .= "From: {$name} <{$from}>";
$headers .= "Reply-To: <{$fromPerson}>";
$headers .= "Subject: {$subject}";
$headers .= "X-Mailer: PHP/".phpversion();

mail($to, $subject, $messageToSend, $headers);

die;