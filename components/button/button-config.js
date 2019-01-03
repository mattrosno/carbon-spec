/**
 * Component configuration for the Button component
 * @module button
 */
const startCase = require('lodash/startCase');
const { prefixSelectors } = require('../../tools/generate');
const buttonSelectors = require('./button-selectors');
const { generate } = require('./button-generate');

/**
 * Creates a button template configuration for a variant
 * @returns {object} fractal demo object
 */
const variantButtons = function() {
  const variants = {};

  Object.keys(this.selectors.variants).forEach(variant => {
    variants[variant] = {
      name: variant,
      label: startCase(variant),
      context: generate.apply(this, [
        {
          variant,
        },
      ]),
    };
  });

  return variants;
};

/**
 * Modifier: Anchor
 * @returns {object} fractal demo object
 */
const anchorButton = function() {
  return {
    name: 'anchor',
    label: 'Anchor',
    context: generate.apply(this, [
      {
        element: 'a',
        href: '',
      },
    ]),
  };
};

/**
 * Modifier: Small
 * @returns {object} fractal demo object
 */
const smallButton = function() {
  return {
    name: 'small',
    label: 'Small',
    context: generate.apply(this, [
      {
        size: 'small',
      },
    ]),
  };
};

/**
 * State: Disabled
 * @returns {object} fractal demo object
 */
const disabledButton = function() {
  return {
    name: 'disabled',
    label: 'Disabled',
    context: generate.apply(this, [
      {
        disabled: true,
      },
    ]),
  };
};

/**
 * Button demos
 * @returns {object} fractal variants
 */
const demo = function() {
  return {
    variants: variantButtons.apply(this),
    modifiers: {
      types: {
        anchor: anchorButton.apply(this),
      },
      sizes: {
        small: smallButton.apply(this),
      },
    },
    states: {
      disabled: disabledButton.apply(this),
    },
  };
};

/**
 * Button config
 * @param {string} prefix - selector prefix
 * @returns {object} component configuration object
 */
module.exports = prefix => {
  const config = {
    selectors: prefixSelectors(buttonSelectors, prefix),
  };

  return {
    label: 'Button',
    demo: demo.apply(config),
    generate: generate.bind(config),
    selectors: config.selectors,
  };
};
