import {testUrl} from "../../constants.js";

describe('click on movie category', () => {
    beforeEach(() => {
        cy.viewport(1300, 800);
        cy.visit(testUrl);
    })

    it('should ', function () {
        cy.get('[data-cy="category-movie"]').first().click();
        cy.wait(400);
        cy.get('[data-cy="back-button"]').click();
    });

})
