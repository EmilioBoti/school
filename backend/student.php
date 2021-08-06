<?php
    require("./persona.php");

    class Student extends Persona{
        public $courseId;

        function __construct(int $id, string $name,string $firstlastname,string $secondlastname, string $email, string $course){
            parent::__construct($id, $name,$firstlastname ,$secondlastname, $email);
            $this->courseId = $course;
        }
    }

?>