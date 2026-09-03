CREATE DATABASE IF NOT EXISTS integradora
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE integradora;

CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO productos (nombre, categoria, precio, stock)
SELECT 'Laptop', 'Computadoras', 850.00, 8
WHERE NOT EXISTS (SELECT 1 FROM productos WHERE nombre = 'Laptop');

INSERT INTO productos (nombre, categoria, precio, stock)
SELECT 'Mouse', 'Accesorios', 15.50, 42
WHERE NOT EXISTS (SELECT 1 FROM productos WHERE nombre = 'Mouse');

INSERT INTO productos (nombre, categoria, precio, stock)
SELECT 'Teclado', 'Accesorios', 25.00, 17
WHERE NOT EXISTS (SELECT 1 FROM productos WHERE nombre = 'Teclado');
