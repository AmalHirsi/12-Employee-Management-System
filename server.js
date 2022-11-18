const express = require('express');
const mysql = require('mysql2');

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
  
    case "Quit"
    connection.quit()
      break;
 });
}

 function viewEmployees() {
  db.query('SELECT * FROM employee', (err,res) => {
    console.log(results);
  });
  manageTeam();
 }

function viewDepartments() {
  db.query('SELECT * FROM departments', (err,res) => {
    console.log(results);
  });
  manageTeam();
 }


function viewRoles() {
  db.query('SELECT * FROM roles', (err,res) => {
    console.log(results);
  });
  manageTeam();
 }

 function addDepartment() {

  inquirer.prompt({
    type: 'input',
    message: 'Enter the name of the Department you would like to add',
    name: 'newDepartment'
  })
  .then(function ({ prompt }) {
    db.query('INSERT INTO department (name) VALUES (?)',
    [res.newDepartment],
    (err,res) => {
      console.table(res)
    });
    manageTeam();
   });
}

function addRole() {

  inquirer.prompt({
    type: 'input',
    message: 'Enter the name of the Department you would like to add',
    name: 'newDepartment'
  })
  .then(function ({ prompt }) {
    db.query('INSERT INTO department (name) VALUES (?)',
    [res.newDepartment],
    (err,res) => {
      console.table(res)
    });
    manageTeam();
   });
}









  