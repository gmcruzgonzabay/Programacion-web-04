<?php

    require_once __DIR__ . '/../config/database.php';
class Producto{

    private PDO $conexion;
    
    public function __construct()
    {
       $database= new Database();
       $this->conexion= $database->conectar();

    } // Fin del constructor


    //CONSULTO TODOS LOS PRODUCTOS
    public function obtenerTodo():array
    {
        $consulta= $this-> conexion->query('SLECT id,nombre,categoria,precio,stock FROM productos ORDERBY id DESC');
        return $consulta->fetchAll();

    }

    //GUARDA UN PRODUCTO
    public function guardar(string $nombre, string $categoria, float $precio,int $stock ): void
    {

        $consulta= $this->conexion-> prepare('INSERT INTO productos (nombre,categoria, precio,stock) VALUES (:nombre,:categoria,:precio,:stock)');
        
        $consulta-> execute(
            [
                'nombre'=> $nombre,
                'categoria'=> $categoria,
                'precio'=> $precio,
                'stock'=> $stock

            ]

        );
    }




}

?>