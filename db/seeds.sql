INSERT INTO department (id, name)
VALUES (1, 'Sales'),
       (2, 'Engineering'),
       (3, 'Finance'),
       (4, 'Legal');

INSERT INTO role (id, title, salary, department_id)
VALUES  (1, 'Legal advisor', 70000, 4),
        (2, 'Head Engineer', 90000, 2),
        (3, 'Accountant', 55000, 3),
        (4, 'Sale Assistant', 27000, 1),
        (5, 'Sales Director', 45000, 1);



INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (101, 'Adam', 'Ahmed'1, 4, NULL), 
        (102, 'Chris', 'Swift', 2, NULL), 
        (103, 'Maya', 'Wood', 1, NULL), 
        (104, 'Jason', 'Ward', 1, 103), 
        (105, 'Olivia', 'Brown', 3, NULL);