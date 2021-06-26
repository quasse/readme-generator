// Packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// An array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project",
  },
  {
    type: "input",
    name: "install",
    message: "How is this project installed?",
  },
  {
    type: "input",
    name: "usage",
    message: "How is this project used?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What are the contribution guidelines?",
  },
  {
    type: "input",
    name: "test",
    message: "How should users test your project?",
  },
  {
    type: "list",
    name: "license",
    message: "Which licesense would you like to select for your project?",
    choices: ["Apache License 2.0", "GNU GPLv3", "MIT", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// A function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}

// A function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then((answers) => {
    return generateMarkdown(answers);
  })
  .then((data) => {
    return writeToFile("README.md", data);
  })
  .catch((err) => {
    console.log(err);
  });
