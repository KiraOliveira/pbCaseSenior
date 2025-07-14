/// <reference types="cypress" />

import el_challengingDom from "../elements/el_challengingDom";
const url = Cypress.config("baseUrl")

class acessPage {

    acessPage() {

        // Valida que acessou a URL
        cy.visit(url)

        // Validar que está no site correto
        cy.get(el_challengingDom.textHead()).should('not.be.empty')

        cy.contains(el_challengingDom.textP()).should('not.be.empty')
    }
        // Clicar nos botões um após o outro
    clickButton()     {
        cy.get(el_challengingDom.button()).should('exist').and('be.visible').first().click();

        cy.get(el_challengingDom.button()).should('exist').and('be.visible').eq(1).click();

        cy.get(el_challengingDom.button()).should('exist').and('be.visible').last().click();
    }
        // Aqui valida se está na coluna certa
    columnAction()     {
        cy.get(el_challengingDom.columnAction()).should('not.be.empty')
        cy.contains('Action')
    }
        // Clicar em todos os botões Edite  
    buttonEditDelete()     {
        cy.get(el_challengingDom.buttonEdit()).should('exist').and('be.visible').first().click();
        cy.get(el_challengingDom.buttonDelete()).should('exist').and('be.visible').first().click();

        cy.get(el_challengingDom.buttonEdit()).should('exist').and('be.visible').eq(1).click();
        cy.get(el_challengingDom.buttonDelete()).should('exist').and('be.visible').eq(1).click();

        cy.get(el_challengingDom.buttonEdit()).should('exist').and('be.visible').eq(2).click();
        cy.get(el_challengingDom.buttonDelete()).should('exist').and('be.visible').eq(2).click();

        cy.get(el_challengingDom.buttonEdit()).should('exist').and('be.visible').eq(3).click();
        cy.get(el_challengingDom.buttonDelete()).should('exist').and('be.visible').eq(3).click();

        cy.get(el_challengingDom.buttonEdit()).should('exist').and('be.visible').eq(4).click();
        cy.get(el_challengingDom.buttonDelete()).should('exist').and('be.visible').eq(4).click();

        cy.get(el_challengingDom.buttonEdit()).should('exist').and('be.visible').eq(5).click();
        cy.get(el_challengingDom.buttonDelete()).should('exist').and('be.visible').eq(5).click();

        cy.get(el_challengingDom.buttonEdit()).should('exist').and('be.visible').eq(6).click();
        cy.get(el_challengingDom.buttonDelete()).should('exist').and('be.visible').eq(6).click();

        cy.get(el_challengingDom.buttonEdit()).should('exist').and('be.visible').eq(7).click();
        cy.get(el_challengingDom.buttonDelete()).should('exist').and('be.visible').eq(7).click();

        cy.get(el_challengingDom.buttonEdit()).should('exist').and('be.visible').eq(8).click();
        cy.get(el_challengingDom.buttonDelete()).should('exist').and('be.visible').eq(8).click();

        cy.get(el_challengingDom.buttonEdit()).should('exist').and('be.visible').last().click();
        cy.get(el_challengingDom.buttonDelete()).should('exist').and('be.visible').last().click();
    }
}

export default new acessPage();