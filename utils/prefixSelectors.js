const cloneDeep = require('lodash/cloneDeep');

export function prefixSelectors(selectors, prefix) {
  selectors = cloneDeep(selectors || {});

  if (prefix) {
    selectors = JSON.parse(
      JSON.stringify(selectors).replace(/:"/g, `:"${prefix}--`)
    );
  }

  return selectors;
}
