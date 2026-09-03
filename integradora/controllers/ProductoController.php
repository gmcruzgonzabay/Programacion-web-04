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


       public function guardar(): void
    {
        $nombre = trim($_POST['nombre'] ?? '');
        $categoria = trim($_POST['categoria'] ?? '');
        $precio = $_POST['precio'] ?? '';
        $stock = $_POST['stock'] ?? '';

        if ($nombre === '' || $categoria === '' || $precio === '' || $stock === '') {
            header('Location: index.php?error=datos_invalidos');
            return;
        }

        $productoModel = new Producto();
        $productoModel->guardar($nombre, $categoria, (float) $precio, (int) $stock);

        header('Location: index.php?mensaje=guardado');
    }









    }

?>
