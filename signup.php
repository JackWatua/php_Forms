<?php
    foreach ($_POST as $key => $val){
        echo "$key : $val</br>";
    }

    function keep_track(){
        static $var = 0;
        $var++;
        echo (string) $var." minutes</br>";
    }

    keep_track ();
    keep_track ();
    keep_track ();
?>
