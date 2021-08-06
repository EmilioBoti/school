<?php
    class Persona{
        public $id;
        public $name;
        public $firstlastname;
        public $secondlastname;
        public $email;

        function __construct(int $id,string $name,string $firstlastname,string $secondlastname, string $email){
            $this->id = $id;
            $this->name = $name;
            $this->firstlastname = $firstlastname;
            $this->secondlastname = $secondlastname;
            $this->email = $email;
        }
    }

?>