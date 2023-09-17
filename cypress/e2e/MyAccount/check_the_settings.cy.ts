import {button, chekerURL, inputField} from "../../support/PageObject/Utilites";

describe('Checking Settings', () => {
    it('Checking the input fields', () => {
        cy.login()
        button.clickToMyAccount()
        chekerURL.checkURL('user/settings')
        });
        it('', () => {

        inputField.chekcfFirstNameInput('Edgar')
        inputField.checkLastNameInput('Johns')
        inputField.checkEmailInput('Norene39@yahoo.com')
        inputField.checkTelNumberInput('625-316-9882')
    })
})
