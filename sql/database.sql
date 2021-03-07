CREATE DATABASE node_mysql_ts;

CREATE TABLE profesores(
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    edad INT(11) NOT NULL,
    materia VARCHAR(75) PRIMARY KEY
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);  

DESCRIBE posts;