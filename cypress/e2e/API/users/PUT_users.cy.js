const faker = require('faker-br')

let id
let name = null
let email = null
let password = null
let administrator = null

describe('Service: Editions Users', () => {

  beforeEach(() => {
    name = faker.name.firstName()
    email = faker.internet.email(name)
    password = faker.internet.password()
    administrator = 'true'

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
          id = resp.body['_id']
          resolve(id)
          console.log(resp)
        })
      })
  })

  it('PUT - Should edit the name of user', () => {

    cy.edit_user_api(id, name = 'Altered name', email, password, administrator).then((resp) => {
      expect(resp).property('status').to.equal(200)
      expect(resp.body).property('message').to.be.a('string')
      expect(resp.body).to.contain({
        "message": "Registro alterado com sucesso"
      })
    })
  })
})