import {button, inputField} from "../../support/PageObject/Utilites";

describe('Change Inputs', () => {
    it('login', () => {
        cy.login()
        button.clickToMyAccount()
    });
    it('Changing Inputs', () => {
        inputField.changeFirstNameInput('Gayle')
        inputField.changeLastNameInput('Heaney')
        inputField.changeEmailInput('Ocie_Effertz@hotmail.com')
        inputField.changeTelNumber('0396 814 8785')
    })
    it('Check the input', () => {
        inputField.chekcfFirstNameInput('Gayle')
        inputField.checkLastNameInput('Heaney')
        inputField.checkEmailInput('Ocie_Effertz@hotmail.com')
        inputField.checkTelNumberInput('0396 814 8785')
        button.clickSaveButtonMyAccount()
    });
    it('Change it back', () => {
        inputField.changeFirstNameInput('Edgar')
        inputField.changeLastNameInput('Johns')
        inputField.changeEmailInput('Norene39@yahoo.com')
        inputField.changeTelNumber('625-316-9882')

        inputField.chekcfFirstNameInput('Edgar')
        inputField.checkLastNameInput('Johns')
        inputField.checkEmailInput('Norene39@yahoo.com')
        inputField.checkTelNumberInput('625-316-9882')
        button.clickSaveButtonMyAccount()

    });
    it('logout', () => {
        cy.logout()
    });
})
