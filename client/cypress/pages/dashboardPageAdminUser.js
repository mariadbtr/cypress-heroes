class DashboardPage{
    selectorsList(){
        const selectors = {
            likeButtom: "[data-cy='like']",
            hireButtom: "[data-cy='money']",   
            confirmHireButtom: "button.bg-red-600",  
            hireButtomDenied: ".gap-4 > .gap-2 > .text-gray-800",
            editHero: "[data-cy='pencil']",
            nameField: "[name='name']",
            priceField: "[name='price']",
            fansField: "[name='fans']",
            savesField: "[name='saves']",
            powersSelect:"[data-cy='powersSelect']",
            avatarInput: "[data-cy='avatarFile']",
            submitButtom: "button",
            editDeleteHero: "[type='button']",
            confirmDeleteHero: "button.bg-red-600",
            dashboardPage:"[alt='Cypress Heroes Logo']",
            deleteHero: "[data-cy='trash']",
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
    editHero(name, price, fans, saves){
        cy.get(this.selectorsList().editHero).eq(0).click()
        cy.get(this.selectorsList().nameField).clear().type(name)
        cy.get(this.selectorsList().priceField).clear().type(price)
        cy.get(this.selectorsList().fansField).clear().type(fans)
        cy.get(this.selectorsList().savesField).clear().type(saves)
        cy.get(this.selectorsList().powersSelect).then(($select) => {
            const options = $select.find("option");
            const randomIndex = Math.floor(Math.random() * options.length);
            const randomValue = options.eq(randomIndex).val();
            cy.wrap($select).select(randomValue);
        });
      
        cy.get(this.selectorsList().avatarInput).selectFile(
            "cypress/fixtures/avatar.jpg"
        );
        cy.get(this.selectorsList().submitButtom).eq(3).click()

    }
    editDeleteHero(){
        cy.get(this.selectorsList().editHero).eq(0).click()
        cy.get(this.selectorsList().editDeleteHero).click()
        cy.get(this.selectorsList().confirmDeleteHero).eq(1).click()
    }
    deleteHeroDashboard(){
        cy.get(this.selectorsList().dashboardPage).click()
        cy.get(this.selectorsList().deleteHero).eq(0).click()
        cy.get(this.selectorsList().confirmDeleteHero).click()
    }
    logoutButtom(){
        cy.get(this.selectorsList().logoutButtom).eq(1).click()
    }
}
export default DashboardPage