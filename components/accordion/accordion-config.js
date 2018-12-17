const generate = require('./accordion-generate');
const selectors = require('./accordion-selectors');

const component = {
  key: 'accordion',
  label: 'Accordion',
  generate,
};

module.exports = component;
