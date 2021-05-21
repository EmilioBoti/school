<?php
    $conn = include "../db.php";

    $json_js = file_get_contents("php://input");
    $json = json_decode($json_js);


    
    addUfStudent($json, $conn);

    function addUfStudent($json, $conn){

        $queryUf = "SELECT id FROM uf";

        $result = $conn->query($queryUf);

        while($row = $result->fetch_object()){
            $sqlQuery = "INSERT INTO matricula (codeStudent, id_uf, score) VALUES ('$json->codeSt','$row->id',0)";
            $conn->query($sqlQuery);
        }
        // echo json_encode(["messange"=>"good"]);
        echo($conn->error);
        $conn->close();
    }


    // addUfStudent($json, $conn);

    // function addUfStudent($json, $conn){

    //     $ufs = $json->id_uf;

    //     foreach( $ufs as $uf){
    //         $sqlQuery = "INSERT INTO matricula (codeStudent, id_uf, score) VALUES ('$json->id_st','$uf',0)";
    //         $conn->query($sqlQuery);
    //     }
    //     echo json_encode(["messange"=>"good"]);
    //     echo($conn->error);
    //     $conn->close();
    // }

?>