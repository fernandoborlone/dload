const faker = require('faker-br');

let name = null
let email = null
let password = null
const mensage = {
  txtCreateMensage: 'Cadastro realizado com sucesso',
  errorMensage: {
    txtNameRequered: '×Nome é obrigatório',
    txtEmailRequered: '×Email é obrigatório',
    txtEmailInUse: '×Este email já está sendo usado',
    txtPasswordRequered: '×Password é obrigatório'
  }
}

describe('Sign up', () => {

  beforeEach(() => {
    name = faker.name.firstName()
    email = faker.internet.email(name)
    password = faker.internet.password()

    cy.intercept('POST', '**/usuarios').as('postCreateUser')

    cy.visit('/login')
  })

  context('Context: Register User', () => {
    it('Should register admin user', () => {
      let txtWelcome = `Bem Vindo  ${name}`

      cy.create_account(name, email, password)
      cy.awaiting_requisition('@postCreateUser')
      cy.verify_register_succesfuly(mensage.txtCreateMensage, txtWelcome)
    })

    it('Should register user by registration page', () => {

      cy.login()
      cy.visit('/admin/home')

      cy.access_register_users_page()
      cy.create_users(name, email, password)
      cy.awaiting_requisition('@postCreateUser')
      cy.contains(name).should('be.visible')
    })

    context('Context: Error Messages', () => {

      it('Should display the alert: This email is already in use', () => {

        cy.create_account(name, 'admin@user.com.br', password)
        cy.awaiting_requisition('@postCreateUser')
        cy.verify_error_mensage(mensage.errorMensage.txtEmailInUse)
      })

      it('Should display the alert: Name is required', () => {

        cy.access_register_page()
        cy.fill_nameless_form(email, password)
        cy.submit_form()
        cy.awaiting_requisition('@postCreateUser')
        cy.verify_error_mensage(mensage.errorMensage.txtNameRequered)
      })

      it('Should display the alert: Email is required', () => {

        cy.access_register_page()
        cy.fill_emailless_form(name, password)
        cy.submit_form()
        cy.awaiting_requisition('@postCreateUser')
        cy.verify_error_mensage(mensage.errorMensage.txtEmailRequered)
      })

      it('Should display the alert: Password is required', () => {

        cy.access_register_page()
        cy.fill_passwordless_form(name, email)
        cy.submit_form()
        cy.awaiting_requisition('@postCreateUser')
        cy.verify_error_mensage(mensage.errorMensage.txtPasswordRequered)
      })
    })
  })
})