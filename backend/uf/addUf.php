<?php
    $conn = include "../db.php";

     $title = $_POST['title'];

    if($title == "") echo json_encode(["messange"=>"the fields must be fill."]);
    else addUf($conn, $title);


    function addUf($conn, $title){

        $sqlQuery = "SELECT * FROM uf WHERE title = '$title'";
        $result = $conn->query($sqlQuery);
        $row = $result->fetch_object();

        if($row == null){
            $conn->query("INSERT INTO uf (title) VALUES('$title')");
            echo json_encode(["UF_title"=>$title]);
        }else echo json_encode(["messange"=>"the UF is already added."]);
        
        echo($conn->connect_error);
    
        $result->free();
        $conn->close();
    }

?>