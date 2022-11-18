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

inquirer.prompt({
  
    type: 'choices',
    message: 'What would you like to do?'
    name: 'prompt'
    choices: [
      "View Employees",
       "Update Employee Role",
       "Add Role",
       "View all Departments"
       "Add Department"
       "Quit"

    ]
  })
 .then(function ({ prompt }) {
  switch (prompt) {
    case "View Employees":
      viewEmployees()
      break;

    case "Update Employee Role":
      updateRole()
        break;
    
    case "Add Role":
      addRole()
        break;

    case "View all Departments":
      viewDepartments()
      break;

    case "Add department":
     addDepartment()
      break;
  
    case "Quit"
    connection.quit()
      break;
  }
 });

 function viewEmployees() {
  const query = 'SELECT * FROM employee';
  db.query(query.(err, results) => {
    if (err) throw err;
    console.log(results);
  });
 }

function updateRole() {

  
}





app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  