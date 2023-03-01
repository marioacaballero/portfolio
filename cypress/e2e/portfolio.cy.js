/// <reference types="Cypress" />

const url = 'http://localhost:3000/portfolio/';

describe('Portolio', () => {
  beforeEach(() => {
    cy.visit(url);
  });

  describe('NavBar should be work correctly', () => {
    it('Click on Anchors', () => {
      cy.get('#navGithub').should('have.length', 1);
      cy.get('#navLinkedin').should('have.length', 1);
      cy.get('#navCv').should('have.length', 1);

      cy.contains('About').click();
      cy.url().should('include', '/#about');

      cy.contains('Start').click();
      cy.url().should('include', '/#home');

      cy.contains('Contact').click();
      cy.url().should('include', '/#contact');

      cy.contains('Skills').click();
      cy.url().should('include', '/#skills');

      cy.contains('Projects').click();
      cy.url().should('include', '/#projects');
    });

    it('should works on responsive', () => {
      cy.viewport(400, 700);

      cy.get('#navGithub').should('have.length', 1);
      cy.get('#navLinkedin').should('have.length', 1);
      cy.get('#navCv').should('have.length', 1);

      cy.get('#navBar').click();
      cy.contains('About').click();
      cy.url().should('include', '/#about');

      cy.get('#navBar').click();
      cy.contains('Start').click();
      cy.url().should('include', '/#home');

      cy.get('#navBar').click();
      cy.contains('Contact').click();
      cy.url().should('include', '/#contact');

      cy.get('#navBar').click();
      cy.contains('Skills').click();
      cy.url().should('include', '/#skills');

      cy.get('#navBar').click();
      cy.contains('Projects').click();
      cy.url().should('include', '/#projects');
    });
  });

  describe('Should has info links in each component', () => {
    it('Info links', () => {
      cy.contains('Info').should('have.length', 1);

      cy.contains('About').click();
      cy.contains('Info').should('have.length', 1);

      cy.contains('Skills').click();
      cy.contains('Info').should('have.length', 1);

      cy.contains('Projects').click();
      cy.contains('Info').should('have.length', 1);

      cy.contains('Contact').click();
      cy.contains('Info').should('have.length', 1);
    });
  });

  describe('The bottom to Top should work correctly', () => {
    it('Click to Top', () => {
      cy.scrollTo(0, 1600);
      cy.get('#toTop').click();
      cy.window().its('scrollY').should('equal', 0);
    });

    it('should works equal on responsive screen', () => {
      cy.viewport(400, 700);

      cy.scrollTo(0, 1000);
      cy.get('#toTop').click();
      cy.window().its('scrollY').should('equal', 0);
    });
  });

  describe('Contact form', () => {
    it('Show warning alert if the form is empty', () => {
      cy.contains('Contact').click();

      cy.get('form').find('button').click();
      cy.contains('Something is Missing').should('have.length', 1);
      cy.contains(
        'Please check the form and complete the required fields'
      ).should('have.length', 1);
      cy.contains('Agree').click();
    });

    it('Show warning alert if the form is missing some data', () => {
      cy.contains('Contact').click();

      cy.get('form').find('input[name=name]').type('Mario');
      cy.get('form').find('input[name=subject]').type('Cypress');
      cy.get('form')
        .find('textarea[name=message]')
        .type('Hello, this is a cypress test.');

      cy.get('form').find('button').click();
      cy.contains('Something is Missing').should('have.length', 1);
      cy.contains(
        'Please check the form and complete the required fields'
      ).should('have.length', 1);
      cy.contains('Agree').click();
    });

    it('Show success alert if the message was sent', () => {
      cy.contains('Contact').click();

      cy.get('form').find('input[name=name]').type('Mario');
      cy.get('form').find('input[name=subject]').type('Cypress');
      cy.get('form').find('input[name=email]').type('mario@mario.com');
      cy.get('form')
        .find('textarea[name=message]')
        .type('Hello, this is a cypress test.');

      cy.get('form').find('button').click();
      cy.contains('Thank You').should('have.length', 1);
      cy.contains('Your message was sent successfully').should(
        'have.length',
        1
      );
      cy.contains('Agree').click();
    });

    it('All tests should be running on responsive', () => {
      cy.viewport(400, 700);
      cy.get('#navBar').click();
      cy.contains('Contact').click();

      // empty form
      cy.get('form').find('button').click();
      cy.contains('Something is Missing').should('have.length', 1);
      cy.contains(
        'Please check the form and complete the required fields'
      ).should('have.length', 1);
      cy.contains('Agree').click();

      // missing something
      cy.get('form').find('input[name=email]').type('mario@mario.com');
      cy.get('form')
        .find('textarea[name=message]')
        .type('Hello, this is a cypress test.');

      cy.get('form').find('button').click();
      cy.contains('Something is Missing').should('have.length', 1);
      cy.contains(
        'Please check the form and complete the required fields'
      ).should('have.length', 1);
      cy.contains('Agree').click();

      // passing all values
      cy.get('form').find('input[name=subject]').type('Cypress');
      cy.get('form').find('input[name=name]').type('Mario');

      cy.get('form').find('button').click();
      cy.contains('Thank You').should('have.length', 1);
      cy.contains('Your message was sent successfully').should(
        'have.length',
        1
      );
      cy.contains('Agree').click();
    });
  });
});
