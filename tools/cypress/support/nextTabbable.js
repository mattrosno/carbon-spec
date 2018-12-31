import tabbable from 'tabbable';

export default function nextTabbable($referenceElement, direction = 'forward') {
  if (!(direction === 'forward' || direction === 'backward')) {
    throw new Error('Expected direction to be forward or backward');
  }

  cy.get('body', {
    log: false,
  }).then($body => {
    const element = $referenceElement.get(0);
    const tabbables = tabbable($body[0]);
    const focusIndex = tabbables.indexOf(element);

    if (focusIndex > -1) {
      const nextIndex = focusIndex == tabbables.length - 1 ? 0 : focusIndex + 1;

      return $referenceElement.constructor(tabbables[nextIndex]);
    } else if (tabbables.length) {
      return $referenceElement.constructor(tabbables[0]);
    }

    return $referenceElement.constructor();
  });
}
