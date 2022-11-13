// function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license == 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license == 'GPL v2') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  } else {
    return ''
  }
}

// function that returns the license link
function renderLicenseLink(license) {
  if (license == 'MIT') {
    var url = 'https://opensource.org/licenses/MIT'
  } else if (license == 'Apache') {
    var url = 'https://opensource.org/licenses/Apache-2.0'
  } else {
    var url = 'https://opensource.org/licenses/GPL-2.0'
  }
  return url
}

// function that returns the license section of README
// If there is no license, returns 'N/A'
function renderLicenseSection(license) {
  if (license != 'None') {
    return `${license} - ${renderLicenseLink(license)}`
  } else {
    return 'N/A'
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}
  
  ## License
  ${renderLicenseSection(data.license)}

  ## Questions
  Reach out to me:
  - GitHub: https://github.com/${data.github}
  - Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
