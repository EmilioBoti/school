<?php 
    $conn = include "db.php";
    
    require("./student.php");

    $name = $_POST['name'];
    $lastname1 = $_POST['lastname1'];
    $lastname2 = $_POST['lastname2'];
    $course = $_POST['course'];
    $email = $_POST['email'];
    // $img = $_FILES['image']['name'];

    if( $name != "" && $lastname1 != "" && $lastname2 != "" && $email != ""){
        $flag =  addStudents($name, $lastname1, $lastname2, $course, $email, $conn);
        echo json_encode($flag);
    }else echo(json_encode(["massange"=>"All field must be fill."])); 

    
    function addStudents($name, $lastname1, $lastname2, $course,$email,$conn){
        $flag = false;
        $obj = null;

        $isExist = $conn->query("SELECT * FROM student where email = '$email'");
        $result = $isExist->fetch_object();
        //echo json_encode($result);

        if($result == null){
            $sqlquery = "INSERT INTO student (name, firstLastname, secondLastname, course_id, email) value('$name', '$lastname1', '$lastname2', $course, '$email')";
            $conn->query($sqlquery);
            $flag = true;
        }

        if($flag){
            $obj = new Student(0,$name, $lastname1, $lastname2, $course, $email);
            // $obj = json_encode(["name"=>$name, "lastname1"=>$lastname1, "lastname2"=>$lastname2, "aula"=>$aula,"email"=>$email]);
            // $obj = json_decode($obj);
        }

        echo($conn->error);
        return $obj;
    }
?>