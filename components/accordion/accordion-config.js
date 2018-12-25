/**
 * Component configuration for the Accordion component
 * @module accordion
 */
const { prefixSelectors } = require('../../tools/generate');
const accordionSelectors = require('./accordion-selectors');
const { generate, generateItem } = require('./accordion-generate');

/**
 * Variant: Default
 * @returns {object} fractal demo object
 */
const defaultAccordion = function() {
  return {
    name: 'default',
    label: 'Default Accordion',
    notes: 'Accordions allow users to expand and collapse sections of content.',
    context: generate.apply(this, [
      {
        sections: [
          generateItem.apply(this, [
            {
              active: true,
              title: {
                content: 'Section 1',
              },
              paneId: 'pane1',
              content: {
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              },
            },
          ]),
          generateItem.apply(this, [
            {
              title: {
                content: 'Section 2',
              },
              paneId: 'pane2',
              content: {
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              },
            },
          ]),
          generateItem.apply(this, [
            {
              title: {
                content: 'Section 3',
              },
              paneId: 'pane3',
              content: {
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              },
            },
          ]),
          generateItem.apply(this, [
            {
              title: {
                content: 'Section 4',
              },
              paneId: 'pane4',
              content: {
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              },
            },
          ]),
        ],
      },
    ]),
  };
};

/**
 * Variant: Legacy
 * @returns {object} fractal demo object
 */
const legacyAccordion = function() {
  return {
    name: 'legacy',
    label: 'Legacy Accordion',
    context: generate.apply(this, [
      {
        sections: [
          generateItem.apply(this, [
            {
              active: true,
              title: {
                content: 'Section 1',
              },
              content: {
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              },
            },
          ]),
          generateItem.apply(this, [
            {
              title: {
                content: 'Section 2',
              },
              content: {
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              },
            },
          ]),
          generateItem.apply(this, [
            {
              title: {
                content: 'Section 3',
              },
              content: {
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              },
            },
          ]),
          generateItem.apply(this, [
            {
              title: {
                content: 'Section 4',
              },
              content: {
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              },
            },
          ]),
        ],
      },
    ]),
  };
};

/**
 * Accordion demos
 * @returns {object} fractal variants
 */
const demo = function() {
  return {
    variants: {
      default: defaultAccordion.apply(this),
      legacy: legacyAccordion.apply(this),
    },
  };
};

/**
 * Accordion config
 * @param {string} prefix - selector prefix
 * @returns {object} component configuration object
 */
module.exports = prefix => {
  const config = {
    selectors: prefixSelectors(accordionSelectors, prefix),
  };

  return {
    label: 'Accordion',
    demo: demo.apply(config),
    generate: generate.bind(config),
    generateItem: generateItem.bind(config),
    selectors: config.selectors,
  };
};
