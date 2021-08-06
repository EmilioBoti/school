<?php
    $conn = include "../db.php";

    $data = file_get_contents("php://input");
    $json = json_decode($data);

    $email = $json->email;
    $password = $json->password;

    // if($password != ""){
        $querySql = "SELECT * FROM teacher Where password = '$password' AND email = '$email'";
        $result = $conn->query($querySql);
        $r = $result->fetch_object();
        echo json_encode($r);   
    // }

    $result->free();
    $conn->close();

?>