<?php
    $connect = include "db.php";
    include "./student.php";

    $sqlQuery = "SELECT student.id as id, student.name as name, student.lastname1 as lastname1, student.lastname2 as lastname2, aulas.nombre as aulaNombre FROM student INNER JOIN aulas ON student.aulaId = aulas.id";
    $result = $connect->query($sqlQuery);
    $student = array();

    while($row = $result->fetch_object()){
       $student[] = new Student($row->id,$row->name,$row->lastname1, $row->lastname2, $row->aulaNombre);
        // echo  json_encode ($row);
    }
    echo($connect->connect_error);
    echo(json_encode($student));

    $result->free();
    $connect->close();
?>