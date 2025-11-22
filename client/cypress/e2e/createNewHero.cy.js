import LoginPage from '../pages/loginPage'
import userData from '../fixtures/userData.json'
import CreateNewHero from '../pages/CREATEnEWhERO'


const createNewHero = new CreateNewHero
const loginPage = new LoginPage


describe('Cadastro New Hero', () => {
  it('Deve criar New Hero com sucesso', () => {
    cy.visit('http://localhost:3000/heroes')
    loginPage.loginButtom()
    loginPage.loginWithAnyUser(userData.adminAcess.email, userData.adminAcess.password)
    createNewHero.newHeroSucess(userData.newHero.name, userData.newHero.price, userData.newHero.fans, userData.newHero.saves)
  })
})

describe('Cadastro New Hero com falha', () => {
  it('Deve apresentar mensagem de erro ao criar New Hero com informações faltantes', () => {
    cy.visit('http://localhost:3000/heroes')
    loginPage.loginButtom()
    loginPage.loginWithAnyUser(userData.adminAcess.email, userData.adminAcess.password)
    createNewHero.newHeroFail(userData.newHeroFail.price, userData.newHeroFail.fans, userData.newHeroFail.saves)
  })
})

