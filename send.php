<?php

if(isset($_POST["submit"])){

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $from = 'Light Tech Contact Form';
    $to ='prospererhunmwunse9@gmail.com';
    $subject =$_POST['subject'];



    $body = "From: $name\n E-mail:$email\n Subject: $subject\n Message:\n $message";

    mail($to, $subject, $body,) or die("Error!");
    header(location: message.html);

}



?>