/// <reference types="cypress" />

describe('Testing form page', () => {
  it('should render all elements without user cards', () => {
    cy.visit('/form');

    cy.get('#nameInput').should('exist');
    cy.get('#lastNameInput').should('exist');
    cy.get('#birthDayInput').should('exist');
    cy.get('#fileImg').should('exist');
    cy.get('#mealSelect').should('exist');
    cy.get('input[type=radio]').should('exist');
    cy.get('.switch').should('exist');
    cy.get('[data-testid="buttonTest"]').should('exist').should('not.be.disabled');
  });

  it('submit empty form with all errors', () => {
    cy.visit('/form');

    cy.get('[data-testid="buttonTest"]').should('exist').click();
    cy.get('.error-box').should('have.length', 7);
  });

  it('submit empty form with partial errors', () => {
    cy.visit('/form');

    cy.get('#nameInput').type('testTest').should('have.value', 'testTest');
    cy.get('.error-box').first().should('have.text', '');

    cy.get('[data-testid="buttonTest"]').should('exist').click();
    cy.get('.error-box').should('have.length', 7);
  });

  it('submit form correctly with creating new user', () => {
    cy.visit('/form');

    cy.get('#nameInput').type('testTest').should('have.value', 'testTest');
    cy.get('#lastNameInput').type('TestTest2');
    cy.get('#birthDayInput').type('2020-04-11');
    cy.get('#fileImg').selectFile('cypress/fixtures/favicon-phenix.png');
    cy.get('#mealSelect').select(3);
    cy.get('input[type=radio]').check();
    cy.get('.switch').click();

    cy.get('[data-testid="buttonTest"]').click();

    cy.get('[data-testid="testUserList"]').should('exist');
    cy.get('[data-testid="singleUser"]').should('exist').should('have.length', 1);
  });

  it('should works', () => {
    expect(true).to.equal(true);
  });
});
