DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE departments (
  id INT NOT NULL PRIMARY KEY,
  dep_name VARCHAR(30) NOT NULL, 
);

CREATE TABLE roles (
  id INT NOT NULL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id)
  REFERENCES departments(id),
 
);

CREATE TABLE department_supervisors (
  id INT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,  
);

CREATE TABLE employees (
  id INT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  is_supervisor BOOLEAN,
  supervisor_id INT,
  FOREIGN KEY (supervisor_id) REFERENCES department_supervisors(id),
  FOREIGN KEY (role_id) REFERENCES roles(id),  
);