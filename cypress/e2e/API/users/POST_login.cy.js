const faker = require('faker-br')

let name = null
let email = null
let password = null
let administrator = null

const sucessfulyMessage = 'Login realizado com sucesso'
const errorMessage = 'Email e/ou senha inválidos'

describe('Service: Login via API', () => {

  beforeEach(() => {
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

  it('POST - Should login', () => {

    cy.login_api(email, password).then((resp) => {
      expect(resp).property('status').to.equal(200)
      expect(resp.body).property('message').to.equal(sucessfulyMessage)
    })
  })

  context('Context: Error Messages', () => {
    it('POST - Should display an alert when login whith invalid email', () => {
      cy.login_api('invalid@email.com.br', password).then((resp) => {
        expect(resp).property('status').to.equal(401)
        expect(resp.body).property('message').to.equal(errorMessage)
      })
    })

    it('POST - Should display an alert when login whith invalid password', () => {
      cy.login_api(email, '999999').then((resp) => {
        expect(resp).property('status').to.equal(401)
        expect(resp.body).property('message').to.equal(errorMessage)
      })
    })
  })
})