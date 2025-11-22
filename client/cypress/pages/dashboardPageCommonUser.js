class DashboardPage{
    selectorsList(){
        const selectors = {
            likeButtom: "[data-cy='like']",
            hireButtom: "[data-cy='money']", 
            confirmHireButtom: "button.bg-red-600",  
            hireButtomDenied: ".gap-4 > .gap-2 > .text-gray-800",
            logoutButtom:"button"
        }
        return selectors
    }

    likeButtom(){
        cy.get(this.selectorsList().likeButtom).eq(0).click()
    }
    hireButtom(){
        cy.get(this.selectorsList().hireButtom).eq(0).click()
        cy.get(this.selectorsList().confirmHireButtom).click()
        cy.get(this.selectorsList().hireButtom).eq(0).click()
        cy.get(this.selectorsList().hireButtomDenied).click()
    }
    logoutButtom(){
        cy.get(this.selectorsList().logoutButtom).eq(0).click()
    }
}
export default DashboardPage