<?php
    // $host = "sql210.epizy.com";
    // $user = "epiz_29175851";
    // $password = "hIv7naaFkJr";
    // $dbName = "epiz_29175851_school";
    
    $host = "localhost";
    $user = "root";
    $password = "";
    $dbName = "school3";

    $mysqli = new mysqli($host, $user, $password, $dbName);

    if($mysqli->connect_errno){
        echo("Connect failed".$mysqli->connect_error);
        exit();
      }else return $mysqli;
?>