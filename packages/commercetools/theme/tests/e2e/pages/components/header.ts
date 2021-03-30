const header = {

  get cart(): Cypress.Chainable {
    return cy.get('[data-e2e="app-header-cart"]');
  },

  get categories(): Cypress.Chainable {
    return cy.get('[data-e2e*="app-header"]');
  },

  get category() {
    return {
      women: () => cy.get('[data-e2e="app-header-url_women"]'),
      men: () => cy.get('[data-e2e="app-header-url_men"]')
    };
  },

  openCart(): Cypress.Chainable {
    const click = $el => $el.click();
    return this.cart.pipe(click).should(() => {
      expect(Cypress.$('[data-e2e="sidebar-cart"]')).to.exist;
    });
  }

};

export default header;