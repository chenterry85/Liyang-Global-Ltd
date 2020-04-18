<?php

  if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "20terryc@students.tas.tw";
    $subject = "Mail from Liyang Global website";
    $headers = "From: ".$mailFrom;
    $txt = "You have a received an email from ".$name.".\n\n".$message;

    mail($mailTo,$subject,$txt,$headers);
    header("Location: index.php?mailsend");
  }

 ?>
