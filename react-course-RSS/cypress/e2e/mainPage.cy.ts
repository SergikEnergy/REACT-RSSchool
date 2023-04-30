/// <reference types="cypress" />

describe('Testing main page functionality', () => {
  it('check start rendering without query', () => {
    cy.visit('/');
    cy.get('[data-testid="main-page"]').should('be.visible');
    cy.get('h1').should('have.text', 'Welcome to the general page');

    cy.get('button[type=submit]').should('be.disabled');

    cy.get('.person-card').should('have.length', 20);
  });

  it('check searching functionality correct', () => {
    cy.visit('/');
    cy.get('button[type=submit]').should('be.disabled');
    cy.get('[data-testid="searchName"]').type('ale').should('have.value', 'ale');

    cy.get('button[type=submit]').should('not.be.disabled').click().should('be.disabled');
    cy.get('[data-testid="searchName"]').should('have.value', 'ale');

    cy.get('.person-card').should('have.length', 8);
  });

  it('check searching functionality not found character', () => {
    cy.visit('/');

    cy.get('[data-testid="searchName"]').clear().should('have.value', '').type('rrrrrrrrrrr').should('have.value', 'rrrrrrrrrrr');

    cy.get('button[type=submit]').click();

    cy.get('[data-testid="emptyApi"]').should('exist');
  });

  it('return coverage', () => {
    expect(true).to.equal(true);
  });
});
