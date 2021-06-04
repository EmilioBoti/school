<?php
    $conn = include "db.php";

    $json = file_get_contents("php://input");
    $objec = json_decode($json);

    $uf = $objec->id_ufs;
    $val = $objec->values;
     
    for($i = 0; $i < count($uf); $i++){
        $sqlQuery = "UPDATE matricula SET score = '$val[$i]' WHERE id_student = '$objec->codeSt' AND id_uf = '$uf[$i]'";
        $conn->query($sqlQuery);
    }
    echo json_encode(["message"=>"Ha actualizado correctamente."]);
    $conn->close();
?>