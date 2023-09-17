// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import {button, inputField} from "./PageObject/Utilites";

Cypress.Commands.add("login",() =>{

    cy.visit('/')

    inputField.inputUsername('Katharina_Bernier')
    inputField.inputPassword('s3cret')
    button.clickSignButton()
    cy.get('[data-test="sidenav-user-full-name"]').should('contain','Edgar J')

})

Cypress.Commands.add("logout", () => {
    button.clickLogoutButton()
    cy.url().should('contain','/signin')
});
