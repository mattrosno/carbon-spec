/**
 * Available CSS selectors for Accordion component
 * @module accordion/selectors
 */
const selectors = {
  default: {
    root: 'accordion',
    item: 'accordion__item',
    heading: 'accordion__heading',
    icon: 'accordion__arrow',
    title: 'accordion__title',
    content: 'accordion__content',
  },
  modifiers: {
    active: {
      item: 'accordion__item--active',
    },
  },
};

module.exports = selectors;
