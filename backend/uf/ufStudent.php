<?php
    
    $conn = include "../db.php";

    $idU = file_get_contents("php://input");
    $code = json_decode($idU);


    $arr = stUf($code->code, $conn);
    
    if( $arr == null){
        echo json_encode(null);
    }else
        echo json_encode($arr);



        
    function stUf($code,$conn){

        $sqlQuery = "SELECT student.name as stname,student.id as idSt ,student.lastname1 as lname,
        uf.title as title, matricula.score, uf.id as id_uf FROM student
        INNER JOIN matricula
            on student.id = matricula.id_student
            	INNER JOIN uf
               		on uf.id = matricula.id_UF
                		WHERE student.id =  '$code'
        ";

        $result = $conn->query($sqlQuery);
        $uf = array();  
        
        while($row = $result->fetch_object()){  $uf[] = json_decode(json_encode($row)); }
        
        $result->free();
        $conn->close();

        return $uf;
    } 

?>