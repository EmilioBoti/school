<?php
    $mysqli = new mysqli("localhost", "root", "", "school");

    if($mysqli->connect_errno){
        echo("Connect failed".$mysqli->connect_error);
        exit();
      }else return $mysqli;
?>