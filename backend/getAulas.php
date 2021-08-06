<?php
    $conn = include "db.php";

    $sqlQuery = "SELECT * FROM course";
    $result =  $conn->query($sqlQuery) ;

    $course =  Array();

    while($row = $result->fetch_object()){
        $course[] = json_decode(json_encode($row));
    }
    echo json_encode($course);
    
    echo $conn->error;
    $result->free();
    $conn->close();  

?>