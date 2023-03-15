const userName = 'Admin User'
let txtWelcome = `Bem Vindo  ${userName}`


describe('Login', () => {

  context('Context: Valid Credentials', () => {

    beforeEach(() => {

      cy.login()
      cy.visit('/admin/home')
    })

    it('Should login succesfuly', () => {
      cy.get('h1')
        .should('be.visible')
        .and('have.text', txtWelcome)
    })
  })

  context('Context: Invalid Credentials', () => {
    const errorMensage = '×Email e/ou senha inválidos'
    it('Should display the Alert: Email e/ou senha inválidos', () => {

      cy.Invalid_login('invalid@email.com.br', 'invalid_password')
      cy.verify_error_mensage(errorMensage)
    })
  })
})