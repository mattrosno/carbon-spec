const cloneDeep = require('lodash/cloneDeep');

/**
 * Applies a prefix to every class name in an object.
 * @param {selectorsObject} selectors - object with class name values
 * @param {string} prefix - prepend with `--` to every class name
 * @returns {selectorsObject} - modified selectors object
 */
const prefixSelectors = (selectors, prefix) => {
  selectors = cloneDeep(selectors || {});

  if (prefix) {
    selectors = JSON.parse(
      JSON.stringify(selectors).replace(/:"/g, `:"${prefix}--`)
    );
  }

  return selectors;
};

module.exports = {
  prefixSelectors,
};
