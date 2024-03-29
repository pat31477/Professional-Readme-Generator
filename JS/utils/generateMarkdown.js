// Function that returns a license badge based on which license is selected
// Return empty string if no license is selected
function generateLicenseBadge(license) {
  if (license === "apache-2.0") {
    return `[![apache-2.0](https://img.shields.io/badge/license-apache--2.0-green?style=plastic)]`
  }
  else if (license === 'BSD 3-Clause "New" or "Revised"'){
    return `[![BSD 3-Clause "New" or "Revised"](https://img.shields.io/badge/license-BSD%203--Clause%20%22New%22%20or%20%22Revised%22-green?style=plastic)]`
  }
  else if (license === 'GNU General Public License v3.0'){
    return `[![GNU General Public License v3.0](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-green?style=plastic)]`
  }
  else if (license === 'MIT'){
    return `[![MIT](https://img.shields.io/badge/license-MIT-green?style=plastic)]`
  }
  else {
    return ""
  }
};

// Function that returns the license link
// Return empty string if no license is selected
function generateLicenseLink(license) {
  if (license === "apache-2.0") {
    return `(https://www.apache.org/licenses/LICENSE-2.0)`
  }
  else if (license === 'BSD 3-Clause "New" or "Revised"'){
    return `(https://choosealicense.com/licenses/bsd-3-clause/)`
  }
  else if (license === 'GNU General Public License v3.0'){
    return `(https://www.gnu.org/licenses/gpl-3.0.en.html)`
  }
  else if (license === 'MIT'){
    return `(https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)`
  }
  else {
    return ""
  }
};

// Function that returns the license section of README
// Return empty string if no license is selected
function generateLicenseSection(license) {
  if (license) {
    return `## License`
  }
  else {
    return ""
  }
};

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${generateLicenseBadge(data.license)}${generateLicenseLink(data.license)}

## Description

  ${data.description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Links](#links)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
## Installation

  ${data.installation}

## Usage

  ${data.usage}

 ## Links
 
  * Application URL: (https://${data.username}.github.io/${data.repository}/)
  * Github Repository URL: (https://github.com/${data.username}/${data.repository})

${generateLicenseSection(data.license)}

  ${generateLicenseBadge(data.license)}${generateLicenseLink(data.license)}

## Contributions

  ${data.contributing}

## Tests

  ${data.tests}

## Questions

  Please email me with any question regarding this project @ ${data.email} and connect with me on Github and LinkedIn. 

  [![GitHub](https://img.shields.io/badge/My%20GitHub-Click%20Me!-blueviolet?style=plastic&logo=GitHub)](https://github.com/${data.username}) 
  [![LinkedIn](https://img.shields.io/badge/My%20LinkedIn-Click%20Me!-grey?style=plastic&logo=LinkedIn&labelColor=blue)](https://www.linkedin.com/in/patrick-walker-926a35189/)

  
  `;
}

module.exports = generateMarkdown;
