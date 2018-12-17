const generate = require('./breadcrumb-generate');
const selectors = require('./breadcrumb-selectors');

const component = {
  key: 'breadcrumb',
  label: 'Breadcrumb',
  generate,
};

module.exports = component;
