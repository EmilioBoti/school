<?php
    $connect = include "db.php";
    include "./student.php";

    $sqlQuery = "SELECT * FROM student";
    $result = $connect->query($sqlQuery);
    $student = array();
    
    while($row = $result->fetch_object()){
        //echo json_encode($row);
        $student[] = new Student($row->id,$row->name,$row->firstLastname, $row->secondLastname,$row->email, $row->course_id);
    }
    echo($connect->connect_error);
    echo(json_encode($student));

    $result->free();
    $connect->close();
?>