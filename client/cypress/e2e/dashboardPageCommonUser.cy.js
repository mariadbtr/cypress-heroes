import LoginPage from '../pages/loginPage'
import userData from '../fixtures/userData.json'
import DashboardPage from '../pages/dashboardPageCommonUser'

const loginPage = new LoginPage
const dashboardPageCommonUser = new DashboardPage

describe('Dashboard Page - Common User', () => {
 it('Realizar comandos com Acesso de usuário comum', () => {
    cy.visit('http://localhost:3000/heroes')
    loginPage.loginButtom()
    loginPage.loginWithAnyUser(userData.userSucess.email, userData.userSucess.password)
    dashboardPageCommonUser.likeButtom()
    dashboardPageCommonUser.hireButtom()
    dashboardPageCommonUser.logoutButtom()    
 })
})
