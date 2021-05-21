<?php
               $conn = include "db.php";

               $sqlQuery = "SELECT * FROM aulas";
               $result =  $conn->query($sqlQuery) ;

               $arrAulas =  Array();

               while($row = $result->fetch_object()){
                              $arrAulas[] = json_decode(json_encode($row));
               }
               echo json_encode($arrAulas);
               
               echo $conn->error;
               $result->free();
               $conn->close();

?>