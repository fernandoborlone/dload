const faker = require('faker-br')

let name = null
let email = null
let password = null
let administrator = null

describe('Service: Create Users', () => {

  before(() => {
    // Clean file users_email
    cy.writeFile('cypress/fixtures/data/users_email.txt', '') // clears the file before each tests
  })

  beforeEach(() => {
    name = faker.name.firstName()
    email = faker.internet.email(name)
    password = faker.internet.password()
    administrator = ['true', 'false']
  })

  // Creates 10 users
  Cypress._.times(10, () => {
    it('POST - Should create user', () => {
      cy.create_user_api(name, email, '123456', administrator[0])
        .then((resp) => {
          expect(resp.status).to.eq(201)
          expect(resp).have.property('statusText').to.eq('Created')
          expect(resp.body).have.property('message', 'Cadastro realizado com sucesso')
        })
      // Creates users_email file
      cy.writeFile('cypress/fixtures/data/users_email.txt', email + ', \n', { flag: 'a+' })
    })
  })
})