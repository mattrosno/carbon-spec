/**
 * Tests for the Accordion component
 * @module accordion/tests
 */

const run = function(mount) {
  const prefix = this.prefix ? `${this.prefix}` : ``;

  describe('Accordion', () => {
    beforeEach(() => {
      mount();
    });

    describe('Accordion Template', () => {
      it('It shows all headings', () => {
        cy.get(`.${prefix}--accordion > li`).should('have.length', 4);

        cy.get(`.${prefix}--accordion`).contains('Section 1');
        cy.get(`.${prefix}--accordion`).contains('Section 2');
        cy.get(`.${prefix}--accordion`).contains('Section 3');
        cy.get(`.${prefix}--accordion`).contains('Section 4');
      });

      it('It only shows content for expanded items', () => {
        cy.get(`.${prefix}--accordion__item`)
          .first()
          .find(`.${prefix}--accordion__content`)
          .should('be.visible');

        cy.get(`.${prefix}--accordion__item`)
          .eq(1)
          .find(`.${prefix}--accordion__content`)
          .should('not.be.visible');
      });

      it('It should have correct elements', () => {
        cy.get(`.${prefix}--accordion`).should($ul => {
          $ul.map((i, el) => {
            return expect(el.tagName).to.equal('UL');
          });
        });

        cy.get(`.${prefix}--accordion__item`).should($li => {
          $li.map((i, el) => {
            return expect(el.tagName).to.equal('LI');
          });
        });

        cy.get(`.${prefix}--accordion__heading`).should($li => {
          $li.map((i, el) => {
            return expect(el.tagName).to.equal('BUTTON');
          });
        });
      });

      it('It should have correct expanded item and heading classes and attributes', () => {
        cy.get(`.${prefix}--accordion__item`)
          .first()
          .should('have.class', `${prefix}--accordion__item--active`);

        cy.get(`.${prefix}--accordion__item`)
          .first()
          .find(`.${prefix}--accordion__heading`)
          .should('have.attr', 'aria-expanded', 'true');
      });

      it('It should have correct collapsed item and heading classes and attributes', () => {
        cy.get(`.${prefix}--accordion__item`)
          .eq(1)
          .should('not.have.class', `${prefix}--accordion__item--active`);

        cy.get(`.${prefix}--accordion__item`)
          .eq(1)
          .find(`.${prefix}--accordion__heading`)
          .should('have.attr', 'aria-expanded', 'false');
      });

      it('It should have correct icon classes', () => {
        cy.get(`.${prefix}--accordion__heading > svg`).should('have.class', `${prefix}--accordion__arrow`);
      });

      it('It should have correct content classes', () => {
        cy.get(`.${prefix}--accordion__item > div`).should('have.class', `${prefix}--accordion__content`);
      });

      it("It should have item pane id that matches item's aria attribute", () => {
        cy.get(`.${prefix}--accordion__item`).within(() => {
          cy.get(`.${prefix}--accordion__content`)
            .invoke('attr', 'id')
            .then(paneId => {
              cy.get(`.${prefix}--accordion__heading`).should('have.attr', 'aria-controls', paneId);
            });
        });
      });

      it('It should not have duplicate pane ids', () => {
        const ids = [];

        cy.get(`.${prefix}--accordion__content`).then($div => {
          $div.map((i, el) => {
            expect(ids).to.not.include(el.id);
            ids.push(el.id);
          });
        });
      });
    });

    describe('Accordion Interaction', () => {
      it('It should toggle item when clicked', () => {
        cy.get(`.${prefix}--accordion__heading`)
          .first()
          .click()
          .parent()
          .find(`.${prefix}--accordion__content`)
          .should('not.be.visible');
      });

      it('It should toggle item again when clicked again', () => {
        cy.get(`.${prefix}--accordion__heading`)
          .first()
          .click()
          .then($el => {
            cy.wrap($el, { log: false })
              .parent()
              .find(`.${prefix}--accordion__content`)
              .should('not.be.visible');
          })
          .parent()
          .find(`.${prefix}--accordion__heading`)
          .click()
          .then($el => {
            cy.wrap($el, { log: false })
              .parent()
              .find(`.${prefix}--accordion__content`)
              .should('be.visible');
          });
      });

      it('It should not toggle when item content is clicked', () => {
        cy.get(`.${prefix}--accordion__content`)
          .first()
          .click()
          .should('be.visible');
      });

      it('It should preserve custom class names when toggling item', () => {
        cy.get(`.${prefix}--accordion__heading`)
          .first()
          .parent()
          .then($li => {
            $li.addClass('some-class');
          })
          .find(`.${prefix}--accordion__heading`)
          .click()
          .parent()
          .should('have.class', 'some-class');
      });

      it('It should TAB to first item', () => {
        cy.get('body')
          .focus()
          .typeTab()
          .should('have.attr', 'aria-controls')
          .and('eq', 'pane1');
      });

      it('It should TAB to next item', () => {
        cy.get(`.${prefix}--accordion__heading`)
          .first()
          .focus()
          .typeTab()
          .should('have.attr', 'aria-controls')
          .and('eq', 'pane2');
      });

      it('It should toggle item expansion on ENTER key', () => {
        cy.get(`.${prefix}--accordion__heading`)
          .first()
          .focus()
          .typeEnter()
          .siblings(`.${prefix}--accordion__content`)
          .should('not.be.visible');
      });

      it('It should toggle item expansion on SPACE key', () => {
        cy.get(`.${prefix}--accordion__heading`)
          .eq(1)
          .focus()
          .typeSpace()
          .siblings(`.${prefix}--accordion__content`)
          .should('be.visible');
      });

      it('It should not toggle item expansion on ESC key', () => {
        cy.get(`.${prefix}--accordion__heading`)
          .eq(1)
          .focus()
          .typeEsc()
          .siblings(`.${prefix}--accordion__content`)
          .should('not.be.visible');
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
