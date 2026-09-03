<?php
    require_once __DIR__ . '/../models/Producto.php';

    class ProductoController{

    public function index(): void
    {
        $mensaje= $_GET['mensaje'] ?? null;
           $error=$_GET['error'] ?? null;
           
           try{
                $productoModel=new Producto();
                $productos= $productoModel-> obtenerTodo();

           }
           catch(PDOException $exception)

           {
                $productos=[];
                $error='conexion';

           }
           require __DIR__ . '/../vistas/productos.php';


    }


    }

?>
