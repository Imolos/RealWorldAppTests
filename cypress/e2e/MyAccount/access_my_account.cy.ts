import {button, chekerURL} from "../../support/PageObject/Utilites";

describe('MyAccount', () => {
    it('AccessingMyAccount', () => {
        cy.login()
        button.clickToMyAccount();
        chekerURL.checkURL('user/settings')
    })
})
