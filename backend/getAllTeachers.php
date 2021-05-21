<?php
    $connect = include "db.php";
    include "./teacher.php";

    $sqlQuery = "SELECT * FROM teacher";
    $result = $connect->query($sqlQuery);

    $teachers = array();

    while($row = $result->fetch_object()){
        $teachers[] = new Teacher( $row->id,$row->name,$row->lastname1, $row->lastname2);
    }

    echo($connect->connect_error);
    echo(json_encode($teachers));

    $result->free();
    $connect->close();
?>