import HomePage from '../pages/homePage'
import userData from '../fixtures/userData.json'

const homePage = new HomePage

describe('Alerta de Login', () => {
  it('Deve apresentar mensagem que o usuário precisa estar logado para dar like e contratar', () => {
    cy.visit('http://localhost:3000/heroes')
    homePage.likeButtom()
    homePage.hireButtom()
    })
})
describe('Login', () => {
  it('Deve apresentar mensagem de login inválido', () => {
    cy.visit('http://localhost:3000/heroes')
    homePage.loginButtom()
    homePage.loginWithAnyUser(userData.userFail.email, userData.userFail.password)
    homePage.checkAcessInvalid()
  
    })
})