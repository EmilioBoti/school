<?php
    $conn =  include "../db.php";

    class uf{
        public $id;
        public $title;
        public $idTeacher;

        function __construct($id, $title, $idTeacher){
            $this->id = $id;
            $this->title = $title;
            $this->idTeacher = $idTeacher;
        }
    }

    $sqlQuery  = "SELECT * FROM uf WHERE id_teacher IS NULL";
    $result = $conn->query($sqlQuery);

    $ufs = array();

    while($row = $result->fetch_object()){
        $ufs[] = new uf($row->id, $row->title, $row->id_teacher);
    }
    echo json_encode($ufs);
    
    $result->free();
    $conn->close();
?>