const faker = require('faker-br')

let name = null
let email = null
let password = null
let administrador = null

describe('Service: Create Users', () => {

  before(() => {
    cy.writeFile('cypress/fixtures/data/users_email.txt', '') // clears the file before each tests
  })

  beforeEach(() => {
    name = faker.name.firstName()
    email = faker.internet.email(name)
    password = faker.internet.password()
    administrador = 'true'
  })

  Cypress._.times(10, () => {
    it('POST - Should create user', () => {
      cy.create_users_api(name, email, '123456', administrador)
        .then((resp) => {
          expect(resp).property('status').to.equal(201)
          expect(resp).property('statusText').to.equal('Created')
          expect(resp.body).to.have.property('message');
          expect(resp.body).to.have.property('_id');
          expect(resp.body).property('message').to.be.a('string')
          expect(resp.body).to.contain({
            "message": "Cadastro realizado com sucesso"
          })
        })
        cy.writeFile('cypress/fixtures/data/users_email.txt', email + ', \n', { flag: 'a+' })
      })
  })
})