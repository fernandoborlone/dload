const faker = require('faker-br')

let id
let name = null
let email = null
let password = null
let administrador = null

describe('Service: Delete Users', () => {

  beforeEach(() => {
    name = faker.name.firstName()
    email = faker.internet.email(name)
    password = faker.internet.password()
    administrador = 'true'

    cy.create_users_api(name, email, password, administrador)
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
          id = resp.body['_id'];
          resolve(id)
          console.log(id)
        })
      })
  })

  it('DELETE - Should delete user', () => {

    cy.delete_users_api(id).then((resp) => {

      expect(resp).property('status').to.equal(200)
      expect(resp.body).to.have.property('message');
      expect(resp.body).property('message').to.be.a('string')
      expect(resp.body).to.contain({
        "message": "Registro excluído com sucesso"
      })
    })
  })
})

describe('Context: Error Messages', () => {
  it('DELETE - Should display an alert when delete users whith invalid id', () => {
    cy.delete_users_api('invalid_id').then((resp) => {

      expect(resp).property('status').to.equal(200)
      expect(resp.body).to.have.property('message');
      expect(resp.body).property('message').to.be.a('string')
      expect(resp.body).to.contain({
        "message": "Nenhum registro excluído"
      })
    })
  })
})