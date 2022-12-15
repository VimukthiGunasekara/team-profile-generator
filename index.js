const inquirer = require('inquirer');
const fs = require('fs');

function run() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: "Please choose your employee's role!",
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern', 'No More Members'],
      },
    ]).then(function (inputs) {
      if (inputs.role === 'Manager') {
        managerQuestion();
      }
      else if (inputs.role === 'Engineer') {
        engineerQuestion();
      }
      else if (inputs.role === 'Intern') {
        internQuestion();
      }
      else if (inputs.role === 'No More Members') {
        createTeam();
      }
    })
}

function managerQuestion() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the name of the teams manager?',
      name: 'managerName',
      validate: (managerName) => {
        if (managerName) {
          return true;
        }
        else {
          console.log('Please enter name of the teams manager!');
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "Please enter the manager's ID!",
      name: 'managerID',
      validate: (id) => {
        if (id) {
          return true;
        }
        else {
          console.log("Please enter the manager's ID!");
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "Please enter the manager's email!",
      name: 'managerEmail',
      validate: (email) => {
        if (email) {
          return true;
        }
        else {
          console.log("Please enter the manager's email!");
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "Please enter the manager's office number!",
      name: 'officeNumber',
      validate: (officeNumber) => {
        if (officeNumber) {
          return true;
        }
        else {
          console.log("Please enter the manager's office number");
          return false;
        }
      }
    },
  ]).then((answers) => {
    run();
  });
}

function engineerQuestion() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Please enter the name of the Engineer!',
      name: 'eName',
      validate: (eName) => {
        if (eName) {
          return true;
        }
        else {
          console.log('Please enter the name of the Engineer!');
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "Please enter the Engineer's ID!",
      name: 'eID',
      validate: (eID) => {
        if (eID) {
          return true;
        }
        else {
          console.log("Please enter the Engineer's ID");
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "Please enter the Engineer's email!",
      name: 'eEmail',
      validate: (eEmail) => {
        if (eEmail) {
          return true;
        }
        else {
          console.log("Please enter the Engineer's email");
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "Please enter the Engineer's github username!",
      name: 'github',
      validate: (github) => {
        if (github) {
          return true;
        }
        else {
          console.log("Please enter the Engineer's github username");
          return false;
        }
      }
    },
  ]).then((answers) => {
    run();
  });
}

function internQuestion() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Please enter the name of the Intern!',
      name: 'iName',
      validate: (iName) => {
        if (iName) {
          return true;
        }
        else {
          console.log('Please enter the name of the Intern!');
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "Please enter the Intern's ID!",
      name: 'iID',
      validate: (iID) => {
        if (iID) {
          return true;
        }
        else {
          console.log("Please enter the Intern's ID");
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "Please enter the Intern's email!",
      name: 'iEmail',
      validate: (iEmail) => {
        if (iEmail) {
          return true;
        }
        else {
          console.log("Please enter the Intern's email");
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "Please enter the Intern's school username!",
      name: 'school',
      validate: (school) => {
        if (school) {
          return true;
        }
        else {
          console.log("Please enter the Intern's school username");
          return false;
        }
      }
    },
  ]).then((answers) => {
    run();
  });
}

function createTeam() {
  console.log("Team created!")
}

run();



