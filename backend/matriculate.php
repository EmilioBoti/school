<?php
    $conn = include "../backend/db.php";

    $sqlQuery = "SELECT COUNT(*) AS uf_registers  FROM uf";
    $result = $conn->query($sqlQuery);
    $onSt = $result->fetch_object();
    $count = $onSt->uf_registers; 

    $sqlQuery = "SELECT * FROM uf WHERE id >= '$count '";
    $result = $conn->query($sqlQuery);
    $ufID = $result->fetch_object();
   
     insertData($conn, $ufID->id);

    function insertData($conn, $id_uf){

        $sqlQuery = "SELECT * FROM student";
        $res = $conn->query($sqlQuery);
        
        while($st = $res->fetch_object()){
            $insertData = "INSERT INTO matricula (id_student, id_uf, score) Values('$st->id', '$id_uf', 0)";
            $conn->query($insertData);
        }
    }
    echo json_encode($ufID);
    $conn->close();
?>