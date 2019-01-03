/**
 * Template configuration generate functions for Button component
 * @module button/generate
 */
const cloneDeep = require('lodash/cloneDeep');
const merge = require('lodash/merge');

/**
 * Generate Button template context object
 * @param {object} options - user-defined options
 * @return {object} combines user-defined options default configurations
 */
const generate = function(options) {
  let opts = merge(
    {
      element: 'button',
      attributes: {},
      content: 'Button',
      disabled: false,
      type: 'button',
      tabIndex: 0,
      variant: 'primary',
    },
    options
  );

  const selectors = cloneDeep(this.selectors);

  if (selectors) {
    opts.classes = selectors.default;
    opts.classes.root += ` ${selectors.variants[opts.variant].root}`;

    if (opts.size) {
      opts.classes.root += ` ${selectors.modifiers.sizes[opts.size].root}`;
    }
  }

  if (opts.variant === 'danger' || opts.variant === 'dangerPrimary') {
    opts.attributes['aria-label'] = 'danger';
  }

  if (opts.element === 'button') {
    opts.attributes.type = opts.type;

    if (opts.disabled) {
      opts.attributes.disabled = 'true';
    }
  } else if (opts.element === 'a') {
    opts.attributes.href = opts.href || '#';
    opts.attributes.role = 'button';
  }

  if (opts.icon) {
    // TODO
  }

  return opts;
};

module.exports = { generate };
