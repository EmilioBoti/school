<?php
    require("./persona.php");

    class Teacher extends Persona{

        function __construct(int $id, string $name,string $lastname,string $codeTeacher ){
            parent::__construct($id,$name, $lastname, $codeTeacher);
        }
    }

?>