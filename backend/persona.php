<?php
    class Persona{
        public $id;
        public $name;
        public $lastname1;
        public $lastname2;

        function __construct(int $id,string $name,string $lastname1,string $lastname2){
            $this->id = $id;
            $this->name = $name;
            $this->lastname1 = $lastname1;
            $this->lastname2 = $lastname2;
        }
    }

?>