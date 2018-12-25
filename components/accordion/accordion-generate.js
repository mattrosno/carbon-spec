/**
 * Template configuration generate functions for Accordion component
 * @module accordion/generate
 */
const cloneDeep = require('lodash/cloneDeep');
const merge = require('lodash/merge');

/**
 * Generate Accordion template context object
 * @param {object} options - user-defined options
 * @return {object} combines user-defined options default configurations
 */
const generate = function(options) {
  let opts = merge(
    {
      element: 'ul',
    },
    options
  );

  if (this.selectors) {
    opts.classes = cloneDeep(this.selectors.default);
  }

  return opts;
};

/**
 * Generate Accordion Item template context object
 * @param {object} options - user-defined options
 * @return {object} combines user-defined options default configurations
 */
const generateItem = function(options) {
  let opts = merge(
    {
      element: 'li',
    },
    options
  );

  if (this.selectors) {
    opts.classes = cloneDeep(this.selectors.default);

    if (opts.active) {
      opts.classes.item += ` ${this.selectors.modifiers.active.item}`;
    }
  }

  opts.heading = opts.heading || {};
  merge(opts.heading, {
    attributes: {
      'aria-expanded': `${!!opts.active}`,
    },
  });

  if (opts.paneId) {
    opts.heading.attributes['aria-controls'] = opts.paneId;

    opts.content = opts.content || {};
    merge(opts.content, {
      attributes: {
        id: opts.paneId,
      },
    });
  }

  return opts;
};

module.exports = {
  generate,
  generateItem,
};
