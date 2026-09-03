<?php

require_once __DIR__ . '/controllers/ProductoController.php';

$controller = new ProductoController();

$requestMethod = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($requestMethod === 'POST' && ($_POST['accion'] ?? '') === 'guardar') {
    $controller->guardar();
    exit;
}

$controller->index();
