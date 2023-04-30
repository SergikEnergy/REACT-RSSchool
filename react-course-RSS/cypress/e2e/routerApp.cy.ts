/// <reference types="cypress" />

describe('check routing on App', () => {
  it('checks visit home-about-form-home pages', () => {
    cy.visit('/');

    cy.get('.header_navigation__list_link').contains('About').click();
    cy.url().should('include', '/about');
    cy.get('.about__title').contains('About Page');

    cy.get('.header_navigation__list_link').contains('Form').click();
    cy.url().should('include', '/form');
    cy.get('.form__title').contains(/fill in this blank/);

    cy.get('.header_navigation__list_link').contains('Home').click();
    cy.url().should('include', '/');
    cy.get('[data-testid="mainTitle"]').contains(/general page/);
  });

  it('checks redirect to Not Found Page', () => {
    cy.visit('/rrrrrr');

    cy.url().should('include', '404');
    cy.get('[data-testid="imgNotFound"]').should('exist');

    cy.get('[data-testid="home_link"]').should('exist').click();
    cy.url().should('include', '/');
    cy.get('[data-testid="mainTitle"]').contains(/general page/);
  });

  it('return coverage', () => {
    expect(true).to.equal(true);
  });
});
