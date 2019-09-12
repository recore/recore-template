const { basename } = require('path');

module.exports = function options(result) {
  return [
    {
      type: 'input',
      name: 'projectName',
      message: 'Project Name',
      default() {
        return basename(result.ctxPath);
      },
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description',
      default(inputs) {
        return `A Recore application ${inputs.projectName}.`;
      }
    }
  ]
}