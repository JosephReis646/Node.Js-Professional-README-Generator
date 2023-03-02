// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What are the usage instructions for your project?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use?',
      choices: ['MIT', 'GPLv3', 'Apache', 'BSD 3-Clause', 'None']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines for your project?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the test instructions for your project?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    }
  ];
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
