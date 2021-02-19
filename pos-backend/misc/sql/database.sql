CREATE DATABASE IF NOT EXISTS `pos_database_punto_venta`;
USE `pos_database_punto_venta`;

DROP TABLE IF EXISTS `pos_categorias`;
CREATE TABLE IF NOT EXISTS `pos_categorias` (
  `id` BIGINT(11) NOT NULL AUTO_INCREMENT,
  `nombre`  VARCHAR(20) NOT NULL,
  `descripcion`  VARCHAR(50) NOT NULL,
  `creacion` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `pos_ventas`;
CREATE TABLE IF NOT EXISTS `pos_ventas` (
  `id` BIGINT(11) NOT NULL AUTO_INCREMENT,
  `clave`  VARCHAR(36) NOT NULL,
  `id_productos` BIGINT(11) NOT NULL,
  `cantidad` INT(10) NOT NULL,
  `tipo` ENUM('EFECTIVO', 'CREDITO', 'DEBITO', 'PRESTAMO') NOT NULL,
  `registro` DATE NOT NULL,
  `creacion` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `pos_productos`;
CREATE TABLE IF NOT EXISTS `pos_productos` (
  `id` BIGINT(11) NOT NULL AUTO_INCREMENT,
  `nombre`  VARCHAR(20) NOT NULL,
  `clave`  VARCHAR(30) NOT NULL,
  `codigo_qr`  VARCHAR(30),
  `nombre_imagen`  VARCHAR(10),
  `descripcion`  VARCHAR(50) NOT NULL,
  `stock`  INT(10) NOT NULL,
  `precio`  DECIMAL(20) NOT NULL,
  `id_categoria`  BIGINT(11) NOT NULL,
  `estatus` ENUM('ACTIVO', 'DESACTIVADO', 'AGOTADO') NOT NULL,
  `creacion` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;