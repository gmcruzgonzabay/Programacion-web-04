<?php

class Database{

    private string  $host= 'localhost';
    private string $database='integradora';
    private string $user= 'root';
    private string $password='';

    public function conectar():PDO{

        $dns= " mysql:host={$this->host};dbname={$this->database}; charset=utf8mb4" ;

        return new PDO(
            $dns,$this->user, $this->password,[
                PDO::ATTR_ERRMODE => PDO:: ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE=> PDO:: FETCH_ASSOC,

            ]

        );

    }
}

?>