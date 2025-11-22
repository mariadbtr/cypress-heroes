import LoginPage from '../pages/loginPage'
import userData from '../fixtures/userData.json'

const loginPage = new LoginPage

describe('Alerta de Login', () => {
  it('Deve apresentar mensagem que o usuário precisa estar logado para dar like e contratar', () => {
    cy.visit('http://localhost:3000/heroes')
    loginPage.likeButtom()
    loginPage.hireButtom()
    })
})
describe('Login', () => {
  it('Deve apresentar mensagem de login inválido', () => {
    cy.visit('http://localhost:3000/heroes')
    loginPage.loginButtom()
    loginPage.loginWithAnyUser(userData.userFail.email, userData.userFail.password)
    loginPage.checkAcessInvalid()
  
    })
    it('Login válido - Admin', () => {
    cy.visit('http://localhost:3000/heroes')
    loginPage.loginButtom()
    loginPage.loginWithAnyUser(userData.adminAcess.email, userData.adminAcess.password)
  
    })
    it('Login válido - Usuário comum', () => {
    cy.visit('http://localhost:3000/heroes')
    loginPage.loginButtom()
    loginPage.loginWithAnyUser(userData.userSucess.email, userData.userSucess.password)
    
    })

})