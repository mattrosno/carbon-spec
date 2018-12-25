const buttonSelectors = require('./button-selectors');
const { prefixSelectors } = require('../../tools/generate');

const generate = options => {
  let opts = {
    attributes: {},
    content: 'Button Text',
    disabled: false,
    small: false,
    tabIndex: 0,
    type: 'button',
    variant: 'primary',
    ...options,
  };
  const selectors = prefixSelectors(buttonSelectors, opts.prefix);

  opts.classes = selectors.default;
  opts.classes.root += ` ${selectors.variants[opts.variant].root}`;

  if (opts.small) {
    opts.classes.root += ` ${selectors.modifiers.sizes.small.root}`;
  }

  if (opts.href) {
    opts.attributes.role = 'button';
  }

  if (opts.icon) {
    // TODO
  }

  return opts;
};

module.exports = generate;
