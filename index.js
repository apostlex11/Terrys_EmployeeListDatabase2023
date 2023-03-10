const generateResponse = require('./generateResponse');
const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config()

// const PORT = process.env.PORT || 3001;
// const app = express();

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );

// Connect to database
// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         // MySQL username,
//         user: 'root',
//         // MySQL password
//         password: 'root',
//         database: 'tracker_db'
//     },
//     console.log(`Connected to the tracker_db database.`)
// );



(async function init() {
    await loadPrompts();
})();
async function loadPrompts() {
    const { choice } = await inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES",
                },
                {
                    name: "View All Employees By Department",
                    value: "VIEW_EMPLOYEES_BY_DEPARTMENT",
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE",
                },
                {
                    name: "Remove Employee",
                    value: "REMOVE_EMPLOYEE",
                },
                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE",
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES",
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE",
                },
                {
                    name: "Remove Role",
                    value: "REMOVE_ROLE",
                },
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS",
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT",
                },
                {
                    name: "Remove Department",
                    value: "REMOVE_DEPARTMENT",
                },
                {
                    name: "Quit",
                    value: "QUIT",
                },
            ],
        },
    ]);
    switch (choice) {
        case "VIEW_EMPLOYEES":
            return viewEmployees();
        case "VIEW_EMPLOYEES_BY_DEPARTMENT":
            return viewEmployees();
        case "ADD_EMPLOYEE":
            return viewEmployees();
        case "REMOVE_EMPLOYEE":
            return viewEmployees();
        case "UPDATE_EMPLOYEE_ROLE":
            return viewEmployees();
        case "VIEW_ROLES":
            return viewEmployees();
        case "ADD_ROLE":
            return viewEmployees();
        case "REMOVE_ROLE":
            return viewEmployees();
        case "VIEW_DEPARTMENTS":
            return viewEmployees();
        case "ADD_DEPARTMENT":
            return viewEmployees();
        case "REMOVE_DEPARTMENT":
            return viewEmployees();
        default:
            return quit();
    }
}
async function viewEmployees() {
    const employees = await db.findAllEmployees();
    console.table(employees);
    loadPrompts();
}