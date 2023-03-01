/* eslint-disable no-undef */
import Crab from '../../src/components/ImagesComponents/Crab/Crab';

describe('Crab Component', () => {
  it('Check if crab is render correctly', () => {
    cy.mount(<Crab />);
  });
});
