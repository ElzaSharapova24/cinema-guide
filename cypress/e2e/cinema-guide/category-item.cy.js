import {testUrl} from "../../constants.js";

describe('click', () => {
    beforeEach(() => {
        cy.viewport(1300, 800);
        cy.visit(testUrl);
    })
    
    it('should ', function () {
        cy.get('[data-cy="category-movie"]').first().click();
        cy.get('[data-cy="back-button"]').click();
    });
})
