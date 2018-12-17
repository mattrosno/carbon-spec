const generate = require('./button-generate');
const selectors = require('./button-selectors');

const variants = [];
Object.keys(selectors.variants).forEach(variant => {
  variants.push(variant);
});

const component = {
  key: 'button',
  label: 'Button',
  generate,
  variants,
};

module.exports = component;
