var inquirer = require("inquirer");
var fs = require('fs');
var markdown = require('./generateMarkdown.js');

inquirer.prompt([
    {
        type: "input",
        name: "Project Title",
        message: "What is your project title?"
    },
    {
        type: "checkbox",
        message: "Check which badges you will include:",
        name: "Badges",
        choices: [
          "HTML", 
          "CSS", 
          "JavaScript", 
          "MySQL"
        ]
    },
    {
        type: "input",
        name: "Description",
        message: "Write a description of your project:"
    },
    {
        type: "input",
        name: "Table of Contents",
        message: "Write a Table of Contents:"
    },
    {
        type: "input",
        name: "Installation Instructions",
        message: "Write your installation instructions:"
    },
    {
        type: "input",
        name: "Usage Intructions",
        message: "Write your usage instructions:"
    },
    {
        type: "input",
        name: "Licenses",
        message: "Include any licensing information:"
    },
    {
        type: "input",
        name: "Contributors",
        message: "Include any contributor information:"
    },
    {
        type: "input",
        name: "Tests",
        message: "Include any tests you've written for your application:"
    },
    {
        type: "input",
        name: "Questions and Feedback",
        message: "Include any links or resources for feedback or questions on your application:"
    },
  ])
    
function writeToFile(fileName, data) {
    const fileName = "ReadMe.md"
    if (err) {
        return console.log(err);
        }

        console.log("Success!");
    
    }

    function init(markdown) {

    }

    init()
