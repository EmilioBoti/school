<?php
    $conn = include "../db.php";

    $name = $_POST["name"];
    $firstlastname = $_POST["firstlastname"];
    $secondlastname = $_POST["secondlastname"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirmPass = $_POST["confirmPass"];

    $object = json_encode(array("name"=>$name, "firstlastname"=>$firstlastname,"secondlastname"=>$secondlastname, "email"=>$email, "password"=>$password));
    $obj = json_decode($object);
    echo json_encode($obj);

    if(($password == $confirmPass) && ($name != "" && $firstlastname != "" &&  $secondlastname != "" && $email != "" && $password != "")){
        
        $getUser = "SELECT * FROM teacher WHERE email = '$email' AND password = '$password'"; 
        $result =  $conn->query($getUser);
        $row = $result->fetch_object();

        if($row == null){
            echo insertTeacher($conn ,$obj);
            //echo json_encode($obj);
        }else{
            echo json_encode(null);
        }
    }else{
        echo json_encode(null);
    }

    //echo json_encode($row);
    function insertTeacher($conn,$obj){
        $querySql = "INSERT INTO teacher (name, firstLastname, secondLastname,email, password) VALUES ('$obj->name','$obj->firstlastname','$obj->secondlastname','$obj->email','$obj->password')";
        $conn->query($querySql);
        return json_encode($obj);
    }
    
?>