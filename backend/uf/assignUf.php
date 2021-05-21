<?php
    $conn = include "../db.php";

    $json = file_get_contents("php://input");
    $j = json_decode($json);


    foreach($j->ufs_id as $value){  
        $sqlQuery  = "UPDATE uf SET id_teacher = '$j->teacherId' WHERE id = '$value'";
        $conn->query($sqlQuery);
    }
    echo json_encode(["message"=>"Everything was ok"]);
    echo( $conn->error);
    $conn->close();
?>