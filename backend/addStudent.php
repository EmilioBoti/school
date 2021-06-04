<?php 
    $conn = include "db.php";

    $name = $_POST['name'];
    $lastname1 = $_POST['lastname1'];
    $lastname2 = $_POST['lastname2'];
    $aula = $_POST['aula'];

    if( $name != "" && $lastname1 != "" && $lastname2 != ""){
        $flag =  addStudents($name, $lastname1, $lastname2,$aula, $conn);

        if($flag){
            $isExist = $conn->query("SELECT * FROM student WHERE lastname1 = '$lastname1'");
            $resu = $isExist->fetch_object();
            echo json_encode($resu);
        }
    }else echo(json_encode(["massange"=>"All field must be fill."])); 

    
    function addStudents($name, $lastname1, $lastname2, $aula, $conn){
        $flag = false;

        $isExist = $conn->query("SELECT * FROM student where lastname1 = '$lastname1'");
        $result = $isExist->fetch_object();
        
        if($result == null){
            $sqlquery = "INSERT INTO student (name, lastname1, lastname2, aulaId) value('$name', '$lastname1', '$lastname2', $aula)";
            $conn->query($sqlquery);
            $flag = true;
        }else{
            echo(json_encode(null));
        }
        echo($conn->error);
        return $flag;
    }

?>