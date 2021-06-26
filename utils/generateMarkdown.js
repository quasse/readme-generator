// A function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return `![apache license](https://img.shields.io/badge/license-Apache-blue)`;
  } else if (license === "GNU GPLv3") {
    return `![GNU License](https://img.shields.io/badge/license-GPL-blue)`;
  } else if (license === "MIT") {
    return `![MIT License](https://img.shields.io/badge/license-MIT-green)`;
  }
}

// A function that returns the license link
function renderLicenseLink(license) {
  if (license === "Apache License 2.0") {
    return `https://choosealicense.com/licenses/apache-2.0/`;
  } else if (license === "GNU GPLv3") {
    return `https://choosealicense.com/licenses/gpl-3.0/`;
  } else {
    return `https://choosealicense.com/licenses/mit/`;
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  if (license === "None") return ``;

  return `${licenseBadge}
  
  This application is covered under the ${license} license

  More information on this license can be found [here](${licenseLink}).
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseSection(data.license);
  return `# ${data.title}

  ## Description
  
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

  Please visit my [Github](https://github.com/${data.github}) for more information.

  I can be reached at [${data.email}](${data.email}).

  ## License

  ${license}

`;
}

module.exports = generateMarkdown;
