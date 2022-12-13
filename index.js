const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of the teams manager?',
      name: 'username',
      validate: (username) => {
        if (username) {
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
      name: 'id',
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
      name: 'email',
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
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('Unsuccess!')
  );
