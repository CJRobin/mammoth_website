<?php
  if(strtoupper($_SERVER['REQUEST_METHOD']) === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];




    if(!empty($name) && !empty($email) && !empty($message)){
      $headers[] = 'MIME-Version: 1.0';
      $headers[] = 'Content-type: text/html; charset=iso-8859-1';

      // Additional headers
      $headers[] = 'To: michael@mammothcreative.co';
      $headers[] = 'From: '. $email;
      $headers[] = 'CC: corey@mammothcreative.co';

      $html_message = "
      <p>$message</p><br><br>
      <hr>
      <span style='font-weight:bold;'>Client's Email: </span> $email<br>
      <span style='font-weight:bold;'>Client's Name: </span> $name<br>
      ";
      mail("michael@mammothcreative.co", $name . " Sent a Message via MammothCreative.co", $html_message, implode("\r\n", $headers));
    }
  }
?>
