const breadcrumbSelectors = require('./breadcrumb-selectors');
const { prefixSelectors } = require('../../utils/prefixSelectors');

const generate = options => {
  let opts = {
    attributes: {
      'aria-label': 'breadcrumb',
    },
    noTrailingSlash: true,
    ...options,
  };
  const selectors = prefixSelectors(breadcrumbSelectors, opts.prefix);

  opts.classes = selectors.default;

  if (opts.noTrailingSlash) {
    opts.classes.root += ` ${selectors.modifiers.noTrailingSlash.root}`;
  }

  return opts;
};

const generateBreadcrumbItem = options => {
  let opts = {
    ...options,
  };
  const selectors = prefixSelectors(breadcrumbSelectors, opts.prefix);

  opts.classes = selectors.default;

  return opts;
};

module.exports = generate;
module.exports.generateBreadcrumbItem = generateBreadcrumbItem;
