const accordionSelectors = require('./accordion-selectors');
const { prefixSelectors } = require('../../utils/prefixSelectors');

const generate = options => {
  let opts = {
    attributes: {
      role: 'tablist',
      'aria-multiselectable': true,
    },
    ...options,
  };
  const selectors = prefixSelectors(accordionSelectors, opts.prefix);

  opts.classes = selectors.default;

  return opts;
};

const generateAccordionItem = options => {
  let opts = {
    attributes: {
      role: 'presentation',
    },
    ...options,
  };
  const selectors = prefixSelectors(accordionSelectors, opts.prefix);

  opts.classes = selectors.default;

  if (opts.active) {
    opts.classes.item += ` ${selectors.modifiers.active.item}`;
  }

  return opts;
};

const generateAccordionHeading = options => {
  let opts = {
    attributes: {
      role: 'tab',
      type: 'button',
    },
    ...options,
  };

  return opts;
};

module.exports = generate;
module.exports.generateAccordionItem = generateAccordionItem;
module.exports.generateAccordionHeading = generateAccordionHeading;
