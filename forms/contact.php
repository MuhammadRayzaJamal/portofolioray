<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

class PHP_Email_Form {
  public $to;
  public $from_name;
  public $from_email;
  public $subject;
  public $smtp;
  public $ajax = false;
  private $messages = [];

  public function add_message($content, $label, $length = 0) {
    $this->messages[] = "$label: $content\n";
  }

  public function send() {
    $mail = new PHPMailer(true);
    try {
      if(!empty($this->smtp)) {
        $mail->isSMTP();
        $mail->Host       = $this->smtp['host'];
        $mail->SMTPAuth   = true;
        $mail->Username   = $this->smtp['rayzasix@gmail.com'];
        $mail->Password   = $this->smtp['rayzaone12345];
        $mail->SMTPSecure = 'tls';
        $mail->Port       = $this->smtp['port'];
      }

      $mail->setFrom($this->from_email, $this->from_name);
      $mail->addAddress($this->to);
      $mail->Subject = $this->subject;
      $mail->Body    = implode("\n", $this->messages);

      return $mail->send() ? 'OK' : 'ERROR';
    } catch (Exception $e) {
      return "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
  }
}
