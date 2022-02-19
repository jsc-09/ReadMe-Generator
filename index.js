const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// const generateReadMe = ({ projectTitle, description, instructions, usage, contribution, test, license, github, email }) =>
//     `
// #TITLE OF THE PROJECT: ${projectTitle}  

// ## DESCRIPTION: <br>
// ${description}<br>

// ${instructions}<br>
// ${usage}<br>
// ${contribution}<br>
// ${test}<br>
// ${license}<br>
// ${github}<br>
// ${email}<br>
// `

//ask project questions: 
async function init() {
    const answers = await inquirer
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
                choices: ['Apache', 'MIT', 'ISC','Mozilla',]
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

    //.then((answers) => {
    //console.log(answers);
    const readMeContent = generateMarkdown(answers);
    fs.writeFile('readme-new.md', readMeContent, (err) => err ? console.group(err) : console.log('success')
    );
    //});
};
init();