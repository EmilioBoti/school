<?php
    
    $conn = include "./db.php";

    // $code = $_GET['code'];
    $idU = file_get_contents("php://input");
    $code = json_decode($idU);

    $arr = stUf($code->code,$conn);
    echo json_encode($arr);

    function stUf($code,$conn){

        $sqlQuery = "SELECT * FROM uf INNER JOIN teacher
                        on uf.id_teacher = teacher.id
                        WHERE teacher.id = '$code'
        ";

        $result = $conn->query($sqlQuery);
        $uf = array();  

        while($row = $result->fetch_object()){
            // $u = json_encode($row);
            $uf[] = json_decode(json_encode($row));
        }
        $result->free();
        $conn->close();

        return $uf;
    } 

?>