CREATE TABLE pos_categorias (
    id          INTEGER      PRIMARY KEY AUTOINCREMENT,
    nombre      VARCHAR (20) NOT NULL,
    descripcion VARCHAR (50) NOT NULL,
    creacion    DATETIME     NOT NULL
);

CREATE TABLE pos_productos (
    id            INTEGER      PRIMARY KEY AUTOINCREMENT,
    nombre        VARCHAR (20) NOT NULL,
    clave         VARCHAR (30) NOT NULL UNIQUE,
    codigo_qr     VARCHAR (30) UNIQUE,
    nombre_imagen VARCHAR (10) UNIQUE,
    descripcion   VARCHAR (50) NOT NULL,
    stock         INT (10)     NOT NULL,
    precio        DOUBLE  NOT NULL,
    id_categoria  INTEGER       REFERENCES pos_categorias (id) NOT NULL,
    estatus       VARCHAR (20) NOT NULL,
    creacion      DATETIME     NOT NULL
);

CREATE TABLE pos_ventas (
    id           INTEGER      PRIMARY KEY AUTOINCREMENT NOT NULL,
    clave        VARCHAR (36) NOT NULL,
    id_productos INTEGER      REFERENCES pos_productos (id) NOT NULL,
    cantidad     INT (10)     NOT NULL,
    creacion     DATETIME     NOT NULL
);

CREATE TABLE pos_venta_total (
    id        INTEGER      PRIMARY KEY AUTOINCREMENT,
    clave     VARCHAR (36) NOT NULL UNIQUE,
    sub_total DOUBLE       NOT NULL,
    iva       DOUBLE,
    total     DOUBLE       NOT NULL,
	paga_con  DOUBLE,
    tipo      VARCHAR (10) NOT NULL,
    registro  DATE         NOT NULL,
    creacion  DATETIME     NOT NULL
);

CREATE TABLE pos_venta_adicional (
    id       INTEGER      PRIMARY KEY AUTOINCREMENT,
    clave    VARCHAR (36) NOT NULL,
    nombre   VARCHAR (20) NOT NULL,
    precio   DOUBLE       NOT NULL,
    cantidad INT (10)     NOT NULL,
    creacion DATETIME     NOT NULL
);


