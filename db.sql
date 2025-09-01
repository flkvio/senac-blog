CREATE DATABASE blogsegundaquarta;

USE blogsegundaquarta;
CREATE TABLE
    post (
        id INT PRIMARY KEY AUTO_INCREMENT,
        titulo VARCHAR(20),
        textocurto VARCHAR(100),
        texto VARCHAR(200),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
