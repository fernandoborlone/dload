const faker = require('faker-br')

let name = null
let email = null
let password = null
let administrator = null

const errorMensage = '×Email e/ou senha inválidos'

describe('Login', () => {

  context('Context: Valid Credentials', () => {

    before(() => {
      name = faker.name.firstName()
      email = faker.internet.email(name)
      password = faker.internet.password()
      administrator = 'true'

      // Created user via API
      cy.create_users_api(name, email, password, administrator)
        .then((resp) => {
          return new Promise(resolve => {
            expect(resp).property('status').to.equal(201)
            expect(resp).property('statusText').to.equal('Created')
            expect(resp.body).to.have.property('message');
            expect(resp.body).to.have.property('_id');
            expect(resp.body).property('message').to.be.a('string')
            expect(resp.body).to.contain({
              "message": "Cadastro realizado com sucesso"
            })
            resolve(email, password)
            console.log(resp)
          })
        })
    })

    beforeEach(() => {
      cy.login(email, password)
      cy.visit('/admin/home')
    })

    it('Should login succesfuly', () => {
      let txtWelcome = `Bem Vindo  ${name}`

      cy.get('h1')
        .should('be.visible')
        .and('have.text', txtWelcome)
    })
  })
})

describe('Context: Invalid Credentials', () => {
  it('Should display the Alert: Email e/ou senha inválidos', () => {

    cy.Invalid_login('invalid@email.com.br', 'invalid_password')
    cy.verify_error_mensage(errorMensage)
  })
})