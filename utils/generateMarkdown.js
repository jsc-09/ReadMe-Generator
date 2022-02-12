// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown({projectTitle, description, instructions , usage , contribution , test, license, github, email }) {
  return `
  <h2 align="center">TITLE OF THE PROJECT: ${projectTitle}</h2>
  <img src="https://img.shields.io/badge/License-${license}-blue.svg">
  <p align="center">${description}</p>
  
  <details>
    <summary>Table of Contents</summary>
    <ol>
      <li>
        <a href="#instructions">Installation Instructions</a>
      </li>
      <li><a href="#usage">Usage Information</a></li>
      <li><a href="#contributing">Contribution Guidelines</a></li>
      <li><a href="#test">Test Instructions</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#questions">Questions</a></li>
    </ol>
  </details>
  
  <h3 id="instructions">Instructions</h3>
  <hr>
  <p>${instructions}</p>
  
  <h3 id="usage">Usage Information</h3>
  <hr>
  <p>${usage}</p>
  
  <h3 id="contributing">Contribution Guidelines</h3>
  <hr>
  <p>${contribution}</p>
  
  <h3 id="test">Test Instructions</h3>
  <hr>
  <p>${test}</p>
  
  <h3 id="license">License</h3>
  <hr>
  <p>This project is covered under the ${license} license.</p>

  
  <h3 id="questions">Questions?</h3>
  <hr>
  <p>Project link: <a href="${github}">${github}</a> </p>
  <p>Contact: <a href="mailto:${email}">${email}</a></p>`;
}

module.exports = generateMarkdown;
