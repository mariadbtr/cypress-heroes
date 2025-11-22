class CreateNewHero{
    selectorsList(){
        const selectors = {
            newHeroButtom: "[href='/heroes/new']",
            nameField: "[name='name']",
            priceField: "[name='price']",
            fansField: "[name='fans']",
            savesField: "[name='saves']",
            powersSelect:"[data-cy='powersSelect']",
            avatarInput: "[data-cy='avatarFile']",
            submitButtom: "button",
            alertMessage: ".text-red-500"

        }
        return selectors
    }
    newHeroSucess(name, price, fans, saves){
        cy.get(this.selectorsList().newHeroButtom).click()
        cy.get(this.selectorsList().nameField).type(name)
        cy.get(this.selectorsList().priceField).type(price)
        cy.get(this.selectorsList().fansField).type(fans)
        cy.get(this.selectorsList().savesField).type(saves)
        cy.get(this.selectorsList().powersSelect).then(($select) => {
            const options = $select.find("option");
            const randomIndex = Math.floor(Math.random() * options.length);
            const randomValue = options.eq(randomIndex).val();
            cy.wrap($select).select(randomValue);
        });
      
        cy.get(this.selectorsList().avatarInput).selectFile(
            "cypress/fixtures/avatar.jpg"
        );
        cy.get(this.selectorsList().submitButtom).eq(2).click()

    }
    newHeroFail(price, fans, saves){
         cy.get(this.selectorsList().newHeroButtom).click()
        cy.get(this.selectorsList().priceField).type(price)
        cy.get(this.selectorsList().fansField).type(fans)
        cy.get(this.selectorsList().savesField).type(saves)
        cy.get(this.selectorsList().powersSelect).then(($select) => {
            const options = $select.find("option");
            const randomIndex = Math.floor(Math.random() * options.length);
            const randomValue = options.eq(randomIndex).val();
            cy.wrap($select).select(randomValue);
        });
      
        cy.get(this.selectorsList().avatarInput).selectFile(
            "cypress/fixtures/avatar.jpg"
        );
        cy.get(this.selectorsList().submitButtom).eq(2).click()

        cy.get(this.selectorsList().alertMessage).eq(0).should('contain', 'Name is required')

    }
}
export default CreateNewHero