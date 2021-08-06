<?php
    $conn = include("db.php");

    $json = file_get_contents("php://input");
    $data = json_decode($json);

    // echo json_encode($data);
    if($data->id != "" ){
        $querySql = "DELETE FROM student WHERE id = '$data->id'";
        $conn->query($querySql);
        echo json_encode(["message"=>"success."]);
    }

?>