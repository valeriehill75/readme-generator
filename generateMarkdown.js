function generateMarkdown(data) {
  return `
# ${data.title}
# ${data.description}
# ${data.install}
# ${data.usage}
# ${data.licenses}
# ${data.contributors}
# ${data.tests}
# ${data.questions}

`;
}

module.exports = generateMarkdown;
