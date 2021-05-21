<?php
    require("./persona.php");

    class Student extends Persona{
        public $aulaId;

        function __construct(int $id, string $name,string $lastname,string $codeStudent, string $aula ){
            parent::__construct($id, $name,$lastname,$codeStudent );
            $this->aulaId = $aula;
        }
    }

?>