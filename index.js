// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What would you like the title of the README to be?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log("filename is " + fileName);
  console.log("Data is " + data.title);
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init().then((data) => {
  return writeToFile("README.md", data);
});
