INSERT INTO departments (id, dep_name)
VALUES (001, "Home Furniture"),
       (002, "Garden Furniture"),
       (003, "Restaurant"),
       (004, "Clothing"),
       (005, "Toys"),
       (006, "Kitchen Appliances"),

INSERT INTO roles (id, title, salary, department_id)
VALUES (001, "Home associate", 50000, 001),
        (002, "Garden associate", 40000, 002),
        (003, "Restaurant associate", 35000, 003),
        (004, "Clothing associate", 25000, 004),
        (005, "Toy associate", 20000, 005),
        (006, "Kitchen associate", 40000, 006),

INSERT INTO department_supervisors (id, first_name, last_name)
VALUES  (8, "Bob", "Ross"),
        (9, "Rick", "Ross"),
        (10, "Susan", "Connor"),
        (11, "Ronald", "Bar"),
        (12, "Jeff", "Bezos"),
        (13, "Jackson", "Ford"),

INSERT INTO employees (id, first_name, last_name, role_id, is_supervisor, supervisor_id)
VALUES (001, "John1", "Smith1", 001, 0, 8),
        (002, "John2", "Smith2", 001, 0, 8),
        (003, "John3", "Smith3", 002, 0, 9),
        (004, "John4", "Smith4", 002, 0, 9),
        (005, "John5", "Smith5", 003, 0, 10),
        (006, "John6", "Smith6", 003, 0, 10),
        (007, "Bob", "Ross", 008, 1, NULL),
        (008, "Rick", "Ross", 009, 1, NULL),
        (009, "Susan", "Connor", 010, 1, NULL),
        (010, "Ronald", "Bar", 011, 1, NULL),
        (011, "Jeff", "Bezos", 012, 1, NULL),
        (012, "Jackson", "Ford", 013, 1, NULL),
        