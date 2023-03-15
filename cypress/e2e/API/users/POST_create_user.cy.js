const faker = require('faker-br')

let name = null
let email = null
let password = null
let administrador = null

describe('Service: Create Users', () => {

  beforeEach(() => {
    name = faker.name.firstName()
    email = faker.internet.email(name)
    password = faker.internet.password()
    administrador = 'true'
  })

  Cypress._.times(1, () => {
    it('POST - Should create user', () => {
      cy.create_users_api(name, email, password, administrador)
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
    })

  })

  context('Context: Error Messages', () => {
    it('POST - Should display an alert when property name is null', () => {
      name = null
      cy.create_users_api(name, email, password, administrador)
        .then((resp) => {
          expect(resp).property('status').to.equal(400)
          expect(resp.body).to.have.property('nome', 'nome deve ser uma string')
        })
    })

    it('POST - Should display an alert when property name is empty', () => {
      name = ''
      cy.create_users_api(name, email, password, administrador)
        .then((resp) => {
          expect(resp).property('status').to.equal(400)
          expect(resp.body).to.have.property('nome', 'nome não pode ficar em branco')
        })
    })

    it('POST - Should display an alert when property email is null', () => {
      email = null
      cy.create_users_api(name, email, password, administrador)
        .then((resp) => {
          expect(resp).property('status').to.equal(400)
          expect(resp.body).to.have.property('email', 'email deve ser uma string')
        })
    })

    it('POST - Should display an alert when property email is empty', () => {
      email = ''
      cy.create_users_api(name, email, password, administrador)
        .then((resp) => {
          expect(resp).property('status').to.equal(400)
          expect(resp.body).to.have.property('email', 'email não pode ficar em branco')
        })
    })

    it('POST - Should display an alert when property password is null', () => {
      password = null
      cy.create_users_api(name, email, password, administrador)
        .then((resp) => {
          expect(resp).property('status').to.equal(400)
          expect(resp.body).to.have.property('password', 'password deve ser uma string')
        })
    })

    it('POST - Should display an alert when property password is empty', () => {
      password = ''
      cy.create_users_api(name, email, password, administrador)
        .then((resp) => {
          expect(resp).property('status').to.equal(400)
          expect(resp.body).to.have.property('password', 'password não pode ficar em branco')
        })
    })
  })
})