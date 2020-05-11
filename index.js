var inquirer = require("inquirer");
var fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project:"
    },
    {
        type: "input",
        name: "table",
        message: "Write a Table of Contents:"
    },
    {
        type: "input",
        name: "install",
        message: "Write your installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Write your usage instructions:"
    },
    {
        type: "input",
        name: "licenses",
        message: "Include any licensing information:"
    },
    {
        type: "input",
        name: "contributors",
        message: "Include any contributor information:"
    },
    {
        type: "input",
        name: "tests",
        message: "Include any tests you've written for your application:"
    },
    {
        type: "input",
        name: "questions",
        message: "Include any links or resources for feedback or questions on your application:"
    },
  ]).then(function(data) {

    console.log(data.title)
    console.log(data.description)
    console.log(data.install)
    console.log(data.usage)
    console.log(data.licenses)
    console.log(data.contributors)
    console.log(data.tests)
    console.log(data.questions)    

const userInfo = new generateMarkdown()
    
    fs.writeToFile("ReadMe.md", userInfo); {
    console.log(userInfo)
    }
})

//    function init() {

//    }

//    init()
