const express = require('express');
const mysql = require('mysql2');
const inquirer = require ("inquirer");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Amalhirsi',
      database: 'Employee_manager_db'
    },
    console.log(`Connected to the courses_db database.`)
);

function manageTeam() {
inquirer.prompt({
  
    type: 'choices',
    message: 'What would you like to do?',
    name: 'prompt',
    choices: [
      "View Employees",
      "View all Departments",
      "View all Roles",
       "Add Role",
       "Add Department",
       "Add Employee",
       "Update Employee Role",
       "Quit"

    ]
  })
 .then(function ({ prompt }) {
  switch (prompt) {
    case "View Employees":
      viewEmployees()
      break;

    case "View all Departments":
        viewDepartments()
        break;

     case "View all Roles":
        viewRoles()
        break;
  
    case "Add department":
      addDepartment()
       break;

    case "Add Role":
        addRole()
          break;
    
     case "Add Employee":
          addEmployee()
            break;

    case "Update Employee Role":
      updateRole()
        break;
  
    case "Quit":
      quit()
  }
 });
}

 function viewEmployees() {
  db.query('SELECT * FROM employee', (err,res) => {
    console.table(res);
    manageTeam();
  });
 }

function viewDepartments() {
  db.query('SELECT * FROM department', (err,res) => {
    console.table(res);
    manageTeam();
  });
 }


function viewRoles() {
  db.query('SELECT * FROM role', (err,res) => {
    console.table(res);
    manageTeam();
  });
 }

 function addDepartment() {

  inquirer.prompt({
    type: 'input',
    message: 'Enter the name of the Department you would like to add',
    name: 'newDepartment'
  })
  .then(function(answer) {
    db.query('INSERT INTO department (name) VALUES (?)',
    [answer.newDepartment],
    (err,res) => {
      console.log(res)
      manageTeam();
    });
   });
}

function addRole() {

  inquirer.prompt([
    {
    type: 'input',
    message: 'Enter the the role you would like to add',
    name: 'roleName'
  },
  {
  type: 'input',
  message: 'Enter the salary for this role',
  name: 'roleSalary'
},
  {
    type: 'input',
    message: 'Enter department id number for this role',
    name: 'departmentId'
  }
  ])
  .then(function(answer) {
    db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [answer.roleName, answer.roleSalary, answer.departmentId],
    (err,res) => {
      console.log(err);
      console.table(res)
      manageTeam();
    });
   });
}

function addEmployee() {

  inquirer.prompt([
    {
    type: 'input',
    message: 'Enter the Employee Id',
    name: 'employeeId'
  },
  {
  type: 'input',
  message: 'Enter the first name',
  name: 'firstName'
},
  {
    type: 'input',
    message: 'Enter the last name',
    name: 'lastName'
},
{
  type: 'input',
  message: 'Enter the role of the employee',
  name: 'employeeRole'
},
{
  type: 'input',
  message: 'Enter the employee manager id',
  name: 'employeeManager'
},
])
  .then(function(answer) {
    db.query('INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?, ?)', [answer.employeeId, answer.firstName, answer.lastName, answer.employeeRole, answer.employeeManager],
    (err,res) => {
      console.table(res)
      manageTeam();
    });
   });
}


function quit() {
  console.log("Exiting The Employee Manager System");
  process.exit();
}

manageTeam();







  









  