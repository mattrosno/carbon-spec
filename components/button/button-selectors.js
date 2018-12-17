const selectors = {
  default: {
    root: 'btn',
    content: 'btn__content',
    icon: 'btn__icon',
  },
  variants: {
    primary: {
      root: 'btn--primary',
    },
    secondary: {
      root: 'btn--secondary',
    },
    tertiary: {
      root: 'btn--tertiary',
    },
    ghost: {
      root: 'btn--ghost',
    },
    danger: {
      root: 'btn--danger',
    },
    dangerPrimary: {
      root: 'btn--danger--primary',
    },
  },
  modifiers: {
    sizes: {
      small: {
        root: 'btn--sm',
      },
    },
  },
};

module.exports = selectors;
