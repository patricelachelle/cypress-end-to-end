describe('Testing form inputs', () => { // you can use context instead of describe
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });
    it('adding text to inputs and submits the form', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-cy=name]')
        .type('Patrice')
        .should('have.value', 'Patrice');
        cy.get('[data-cy=email]')
        .type('patrice@email.com')
        .should('have.value', 'patrice@email.com')
        cy.get('[data-cy=motivation]')
        .type('I want to help')
        .should('have.value', 'I want to help')
        cy.get('[data-cy=positions]')
        .select('Tabling')
        .should('have.value', 'Tabling')
        cy.get('[data-cy=terms]')
        .check()
        .should('be.checked')
        cy.get('[data-cy=submit]')
        .click()
    });
});