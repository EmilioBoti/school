<?php 
    require("./student.php");
    $conn = include "db.php";    

    $data = file_get_contents("php://input");
    $student = json_decode($data);
    
    if( $student->name != "" && $student->firstlastname != "" && $student->secondlastname != "" && $student->email != ""){
        $flag =  addStudents($student->id, $student->name,$student->firstlastname, $student->secondlastname, $student->course, $student->email, $conn);
        echo json_encode($flag);
    }else echo(json_encode(["massange"=>"All field must be fill."])); 

    
    function addStudents($id, $name, $lastname1, $lastname2, $course,$email,$conn){
        $obj = null;

        $isExist = $conn->query("SELECT * FROM student where id = '$id'");
        $result = $isExist->fetch_object();

        if($result != null){
            $sqlquery = "UPDATE student SET name = '$name', firstLastname = '$lastname1', secondLastname = '$lastname2', email = '$email', course_id = $course
            WHERE id = $id";
            $conn->query($sqlquery);
            $obj = new Student(0,$name, $lastname1, $lastname2, $course, $email);
        }
        echo($conn->error);
        return $obj;
    }
?>