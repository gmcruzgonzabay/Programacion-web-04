<?php

if (!isset($productos)) {
    header('Location: ../index.php');
    exit;
}

$mensaje = $mensaje ?? null;
$error = $error ?? null;
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
    <main class="container py-5">
        <h1 class="mb-4">Productos</h1>

        <?php if ($mensaje === 'guardado'): ?>
            <div class="alert alert-success">Producto guardado correctamente.</div>
        <?php endif; ?>

        <?php if ($error === 'datos_invalidos'): ?>
            <div class="alert alert-danger">Completa todos los campos.</div>
        <?php endif; ?>

        <?php if ($error === 'conexion'): ?>
            <div class="alert alert-danger">Error al conectar con la base de datos.</div>
        <?php endif; ?>

        <div class="row g-4">
            <section class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        Ingresar producto
                    </div>
                    <div class="card-body">
                        <form action="index.php" method="POST">
                            <input type="hidden" name="accion" value="guardar">

                            <div class="mb-3">
                                <label for="nombre" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="nombre" name="nombre" required>
                            </div>

                            <div class="mb-3">
                                <label for="categoria" class="form-label">Categoria</label>
                                <select class="form-select" id="categoria" name="categoria" required>
                                    <option value="">Seleccione una categoria</option>
                                    <option value="Computadoras">Computadoras</option>
                                    <option value="Accesorios">Accesorios</option>
                                    <option value="Perifericos">Perifericos</option>
                                    <option value="Componentes">Componentes</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label for="precio" class="form-label">Precio</label>
                                <input type="number" class="form-control" id="precio" name="precio" step="0.01" required>
                            </div>

                            <div class="mb-3">
                                <label for="stock" class="form-label">Stock</label>
                                <input type="number" class="form-control" id="stock" name="stock" required>
                            </div>

                            <button type="submit" class="btn btn-primary w-100">
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        Lista de productos
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Categoria</th>
                                    <th>Precio</th>
                                    <th>Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php foreach ($productos as $producto): ?>
                                    <tr>
                                        <td><?php echo htmlspecialchars($producto['id']); ?></td>
                                        <td><?php echo htmlspecialchars($producto['nombre']); ?></td>
                                        <td><?php echo htmlspecialchars($producto['categoria']); ?></td>
                                        <td>$<?php echo number_format($producto['precio'], 2); ?></td>
                                        <td><?php echo htmlspecialchars($producto['stock']); ?></td>
                                    </tr>
                                <?php endforeach; ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    </main>
</body>
</html>
