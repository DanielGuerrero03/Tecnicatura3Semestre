
-- Comenzamos CRUD: create(insertar), read (leer), update(actualizar), delete(eliminar)
-- Listar los estudiantes (read) 
SELECT * FROM estudiantes.estudiantes2022;
-- Insertar estudiantes
INSERT INTO estudiantes.estudiantes2022 (nombre, apellido, telefono, email) VALUES ("Juan", "Perez" , "2604112233", "juan@mail.com");
-- Update (modificar)
UPDATE estudiantes.estudiantes2022 SET nombre= "Juan Carlos" , apellido= "Garcia" WHERE idestudiantes2022 = 1;
-- Delete(eliminar)
DELETE FROM estudiantes.estudiantes2022 WHERE idestudiantes2022= 3;
-- Para modificar el id idestudiantes2022 y comience en 1
ALTER TABLE estudiantes.estudiantes2022 AUTO_INCREMENT = 1;