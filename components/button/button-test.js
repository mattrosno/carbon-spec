/**
 * Tests for the Button component
 * @module button/tests
 */

// TODO SPEC could do better at generating tests, e.g. disabled anchor, small secondary, etc.

const run = function(mount) {
  const prefix = this.prefix ? `${this.prefix}` : ``;

  describe('Button', () => {
    describe('Button Template', () => {
      beforeEach(() => {
        mount('variants.primary');
      });

      it('It shows button content', () => {
        cy.get(`.${prefix}--btn`).contains('Button');
      });

      it('It should have currect `button` element', () => {
        cy.get(`.${prefix}--btn`).should($btn => {
          $btn.map((i, el) => {
            return expect(el.tagName).to.equal('BUTTON');
          });
        });
      });

      it('It should have currect `button` attributes', () => {
        cy.get(`.${prefix}--btn`).should('not.have.attr', 'href');

        cy.get(`.${prefix}--btn`)
          .should('have.attr', 'type')
          .then($type => {
            expect(['button', 'input', 'reset']).to.include($type);
          });
      });
    });

    describe('Anchor Template', () => {
      beforeEach(() => {
        mount('modifiers.types.anchor');
      });

      it('It shows button content', () => {
        cy.get(`.${prefix}--btn`).contains('Button');
      });

      it('It should have currect `a` element', () => {
        cy.get(`.${prefix}--btn`).should($btn => {
          $btn.map((i, el) => {
            return expect(el.tagName).to.equal('A');
          });
        });
      });

      it('It should have currect `a` attributes', () => {
        cy.get(`.${prefix}--btn`)
          .should('not.have.attr', 'type', 'button')
          .and('have.attr', 'role', 'button')
          .and('have.attr', 'href');
      });
    });

    describe('Disabled Button', () => {
      beforeEach(() => {
        mount('states.disabled');
      });

      it('It should have currect disabled attributes', () => {
        cy.get(`.${prefix}--btn`).should('have.attr', 'disabled');
      });
    });

    describe('Small Button', () => {
      beforeEach(() => {
        mount('modifiers.sizes.small');
      });

      it('It should have small styling', () => {
        cy.get(`.${prefix}--btn`).should('have.class', `${prefix}--btn--sm`);
      });
    });

    describe('Primary Button', () => {
      beforeEach(() => {
        mount('variants.primary');
      });

      it('It should have primary styling', () => {
        cy.get(`.${prefix}--btn`).should('have.class', `${prefix}--btn--primary`);
      });
    });

    describe('Secondary Button', () => {
      beforeEach(() => {
        mount('variants.secondary');
      });

      it('It should have secondary styling', () => {
        cy.get(`.${prefix}--btn`).should('have.class', `${prefix}--btn--secondary`);
      });
    });

    describe('Tertiary Button', () => {
      beforeEach(() => {
        mount('variants.tertiary');
      });

      it('It should have tertiary styling', () => {
        cy.get(`.${prefix}--btn`).should('have.class', `${prefix}--btn--tertiary`);
      });
    });

    describe('Ghost Button', () => {
      beforeEach(() => {
        mount('variants.ghost');
      });

      it('It should have ghost styling', () => {
        cy.get(`.${prefix}--btn`).should('have.class', `${prefix}--btn--ghost`);
      });
    });

    describe('Danger Button', () => {
      beforeEach(() => {
        mount('variants.danger');
      });

      it('It should have danger styling', () => {
        cy.get(`.${prefix}--btn`)
          .should('have.class', `${prefix}--btn--danger`)
          .should('have.attr', 'aria-label', 'danger');
      });

      it('It should have danger attributes', () => {
        cy.get(`.${prefix}--btn`).should('have.attr', 'aria-label', 'danger');
      });
    });

    describe('Danger Primary Button', () => {
      beforeEach(() => {
        mount('variants.dangerPrimary');
      });

      it('It should have danger primary styling', () => {
        cy.get(`.${prefix}--btn`).should('have.class', `${prefix}--btn--danger--primary`);
      });

      it('It should have danger attributes', () => {
        cy.get(`.${prefix}--btn`).should('have.attr', 'aria-label', 'danger');
      });
    });
  });
};

module.exports = prefix => {
  const config = {
    prefix,
  };

  return {
    run: run.bind(config),
  };
};
