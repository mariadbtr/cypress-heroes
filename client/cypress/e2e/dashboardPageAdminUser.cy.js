import LoginPage from '../pages/loginPage'
import userData from '../fixtures/userData.json'
import DashboardPage from '../pages/dashboardPageAdminUser'

const loginPage = new LoginPage
const dashboardPageAdminUser = new DashboardPage

describe('Dashboard Page - Admin', () => {
 it('Realizar comandos com Acesso Admin', () => {
    cy.visit('http://localhost:3000/heroes')
    loginPage.loginButtom()
    loginPage.loginWithAnyUser(userData.adminAcess.email, userData.adminAcess.password)
    dashboardPageAdminUser.likeButtom()
    dashboardPageAdminUser.hireButtom()
    dashboardPageAdminUser.editHero(userData.newHero.name, userData.newHero.price, userData.newHero.fans, userData.newHero.saves)
    dashboardPageAdminUser.editDeleteHero()
    dashboardPageAdminUser.deleteHeroDashboard()
    dashboardPageAdminUser.logoutButtom()    
   })
})
    