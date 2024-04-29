import {testUrl} from "../../constants.js";

describe('click', () => {
    beforeEach(() => {
        cy.viewport(1300, 800);
        cy.visit(testUrl + 'rating');
    })
    
    it('should n', function () {
        cy.get('[data-cy="movie"]').first().click();
        cy.get('[data-cy="back-button"]').click();
    });
})
