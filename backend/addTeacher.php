<?php 
    $conn = include "db.php";

    $name = $_POST['name'];
    $lastname1 = $_POST['lastname1'];
    $lastname2 = $_POST['lastname2'];

    if( $name != "" && $lastname1 != "" && $lastname2 != ""){
        addTeacher($name, $lastname1, $lastname2, $conn);
    }else echo(json_encode(["massange"=>"All field must be fill."])); 

    
    function addTeacher($name, $lastname1, $lastname2, $conn){
        
        $isExit = $conn->query("SELECT * FROM teacher where lastname1 = '$lastname1'");
        $result = $isExit->fetch_object();
        
        if($result == null){
            $sqlquery = "INSERT INTO teacher (name, lastname1, lastname2) value('$name', '$lastname1', '$lastname2')";
            $conn->query($sqlquery);
            echo (json_encode([ "name"=>"$name"]));
        }else{
            echo(json_encode(["messange"=>"User already exists."]));
        }
        echo($conn->error);
    }
?>    