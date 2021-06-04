<?php
    $conn = include "db.php";
    $id_stu = file_get_contents("php://input");
    $json = json_decode($id_stu);

    echo json_encode($json);

    $sqlQuery = "SELECT * FROM uf"; 
    $result = $conn->query($sqlQuery);

    while($row = $result->fetch_object()){
       $insertData = "INSERT INTO matricula  (id_student, id_UF, score) VALUES ( '$json->id'  ,'$row->id' ,0)";
       $conn->query($insertData);
    }
    //echo json_encode(["message"=>"good"]);
?>