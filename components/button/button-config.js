const generate = require('./button-generate');
const selectors = require('./button-selectors');
const { flattenDemosObject } = require('../../tools/config');

/**
 * Creates a button template configuration for a variant
 * @type {fractalDemo}
 */
const variants = [];
Object.keys(selectors.variants).forEach(variant => {
  variants.push({
    name: variant,
    label: variant,
    context: generate({
      variant,
    }),
  });
});

/**
 * Creates a button template configuration with the 'small' modifier
 * @type {fractalDemo}
 */
const small = {
  name: 'small',
  label: 'Small',
  context: generate({
    variant: 'primary',
    size: 'small',
  }),
};

const disabled = {
  name: 'disabled',
  label: 'Disabled',
  context: generate({
    disbled: true,
  }),
};

/**
 * Button demos
 * @type {fractalVariants}
 */
const options = {
  variants,
  modifiers: {
    sizes: {
      small,
    },
  },
  // scenarios: {
  //   iconOnly,
  // },
  states: {
    disabled,
  },
  // themes: {
  //   dark,
  // },
  // tests: {
  //   title,
  //   core,
  //   all,
  // },
};

/**
 * Button config
 * @type {global-typedefs.componentConfig}
 */
const component = {
  label: 'Button',
  default: 'primary',
  variants: flattenDemosObject(options),
  generate,
  selectors,
};

module.exports = component;
