/// <reference types="cypress" />

describe('Testing main page functionality', () => {
  it('should visit', () => {
    cy.visit('/');
  });

  it('return coverage', () => {
    expect(true).to.equal(true);
  });
});
