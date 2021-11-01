
<?php

include('../../../db.php');

if (isset($_POST['submit_contact'])) {
  $name = $_POST['name'];
  $mail = $_POST['mail'];
  $subject= $_POST['subject'];
  $mensaje = $_POST['comment'];
  $query = "INSERT INTO customers (Nombre, Email,Tema,Mensaje	,) VALUES ('$name', '$mail', '$subject', '$mensaje')";
  $result = mysqli_query($conn, $query);
  if(!$result) {
    die("Query Failed.");
  }

  $_SESSION['message'] = 'Task Saved Successfully';
  $_SESSION['message_type'] = 'success';
  //header('Location:../../Views/Other_Pages/contact.html');

}

?>