const inquirer = require('inquirer')
const fs = require('fs')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Project Title',
            name: 'projectTitle'
        },
        {
            type: 'input',
            message: 'Description of the Project',
            name: 'description', 
        },
        {
            type: 'input',
            message: 'Installation Instructions',
            name: 'instructions', 
        },
        {
            type: 'input',
            message: 'Usage Information',
            name: 'usage', 
        },
        {
            type: 'input',
            message: 'Contribution Guidelines',
            name: "contribution", 
        },
        {
            type: 'input',
            message: 'Test Instructions',
            name: 'test', 
        },
        {
            type: 'list',
            message: 'Type of license',
            name: 'license',
            choices: ['Apache','MIT', 'ISC','BSD-New', 'FreeBSD','GPL', 'LGPL','Mozilla', 'Eclipse','CDDL'] 
        },
        {
            type: 'input',
            message: 'Github URL',
            name: 'github', 
        },
        {
            type: 'input',
            message: 'Your Email',
            name: 'email', 
        },

    ])

.then((answers) => {
    console.log(answers);
});