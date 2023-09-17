
class buttons {
    clickSignButton(){
        cy.get('[data-test="signin-submit"]').click()
    }
    clickToMyAccount(){
        cy.get('[data-test="sidenav-user-settings"]').click()
    }
    clickLogoutButton(){
        cy.get('[data-test="sidenav-signout"]').click()
    }
    clickSaveButtonMyAccount(){
        cy.get('[data-test="user-settings-submit"]').click()
    }

}

class inputFields {

    private elementFirstName = '[data-test="user-settings-firstName-input"]';
    private elementLastName = '[data-test="user-settings-lastName-input"]';
    private elementEmail = '[data-test="user-settings-email-input"]';
    private elementTelNumber = '[data-test="user-settings-phoneNumber-input"]';

    inputUsername(username: string){
        cy.get('#username').type(username);
    }

    inputPassword(password : string){
        cy.get('#password').type(password);
    }

    chekcfFirstNameInput(firstName:string){
        cy.get(this.elementFirstName).should('have.value',firstName);
    }

    checkLastNameInput(lastName:string){
        cy.get(this.elementLastName).should('have.value',lastName)
    }

    checkEmailInput(email:string){
        cy.get(this.elementEmail).should('have.value',email)
    }

    checkTelNumberInput(telNumber:string){
        cy.get(this.elementTelNumber).should('have.value',telNumber)
    }

    changeFirstNameInput(firstName:string){
        cy.get(this.elementFirstName).clear().type(firstName)
    }

    changeLastNameInput(lastName:string){
        cy.get(this.elementLastName).clear().type(lastName)
    }

    changeEmailInput(email:string){
        cy.get(this.elementEmail).clear().type(email)
    }

    changeTelNumber(telNumber:string){
        cy.get(this.elementTelNumber).clear().type(telNumber)
    }

}

class urlChecker {

    checkURL(url:string){
        cy.url().should('contain',url)
    }

}



export const chekerURL = new urlChecker()
export const button = new buttons()
export const inputField = new inputFields()
