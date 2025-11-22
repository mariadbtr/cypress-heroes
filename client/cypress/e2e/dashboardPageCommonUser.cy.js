import LoginPage from '../pages/loginPage'
import userData from '../fixtures/userData.json'
import DashboardPage from '../pages/dashboardPageCommonUser'

const loginPage = new LoginPage
const dashboardPageCommonUser = new DashboardPage

 it('Login válido - Usuário comum', () => {
    cy.visit('http://localhost:3000/heroes')
    loginPage.loginButtom()
    loginPage.loginWithAnyUser(userData.userSucess.email, userData.userSucess.password)
    dashboardPageCommonUser.likeButtom()
    dashboardPageCommonUser.hireButtom()
    dashboardPageCommonUser.logoutButtom()    
 })
