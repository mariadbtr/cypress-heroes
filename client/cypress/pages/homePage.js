class HomePage{
    selectorsList(){
        const selectors = {
            likeButtom: "[data-cy='like']",
            Alert: "body .relative",
            hireButtom: "[data-cy='money']",   
            loginButtom: 'li > .undefined',
            emailField: "[name='email']",
            passwordField: "[name='password']",
            signInButtom: "[novalidate=''] button",
            invalidAcess: ".text-red-500"
    
        }
        return selectors
    }

    likeButtom(){
        cy.get(this.selectorsList().likeButtom).eq(0).click()
        cy.get(this.selectorsList().Alert)
        cy.get('.gap-4 > .gap-2 > .undefined').click()
    }
    hireButtom(){
        cy.get(this.selectorsList().hireButtom).eq(0).click()
        cy.get(this.selectorsList().Alert)
        cy.get('.gap-4 > .gap-2 > .undefined').click()
    }
    loginButtom(){
        cy.get(this.selectorsList().loginButtom).click()
    }
    loginWithAnyUser(email, password){
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButtom).click()
    }
    checkAcessInvalid(){
        cy.get(this.selectorsList().invalidAcess)
    }
}
export default HomePage