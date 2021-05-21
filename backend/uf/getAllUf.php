<?php

    class Uf{
        public $id;
        public $title;

        function __construct($id, $title){
            $this->id = $id;
            $this->title = $title;
        }
    }


    $conn = include "../db.php";

    $sqlQuery = "SELECT * FROM uf";
    $result = $conn->query($sqlQuery);

    $uf = array();

    while($row = $result->fetch_object()){
        // $st = json_encode($row);
        $uf[] = new Uf($row->id, $row->title);
    }

    echo(json_encode($uf));

    echo($conn->connect_error);

    $result->free();
    $conn->close();
?>