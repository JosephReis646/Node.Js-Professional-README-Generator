// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('README file generated successfully!')
    );
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      let readmeContent = `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  ${answers.license}`;

  switch (answers.license) {
    case 'MIT':
      readmeContent = `${readmeContent}
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'GPLv3':
      readmeContent = `${readmeContent}
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'Apache':
      readmeContent = `${readmeContent}
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'BSD 3-Clause':
      readmeContent = `${readmeContent}
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    default:
      break;
  }

  readmeContent = `${readmeContent}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  For any questions or comments, please reach out to me at ${answers.email}. You can also visit my [GitHub profile](https://github.com/${answers.github}) for additional information.
  `;
  writeToFile('README.md', readmeContent);
});
}

// Function call to initialize app
init();
