const faker = require('faker-br')

let id = null
let token = null
let name = null
let price = null
let descption = null
let quantity = null

let nameUser = null
let email = null
let password = null
let administrator = null

describe('Service: Create Products', () => {

  before(() => {
    cy.writeFile('cypress/fixtures/data/idProduct.txt', '')

    nameUser = faker.name.firstName()
    email = faker.internet.email(name)
    password = faker.internet.password()
    administrator = 'true'

    // Created user via API
    cy.create_users_api(nameUser, email, password, administrator)
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
    name = faker.commerce.productName()
    price = faker.commerce.price()
    descption = faker.commerce.productMaterial()
    quantity = 2

    cy.login_api(email, password).then((resp) => {
      return new Promise(resolve => {
        expect(resp).property('status').to.equal(200)
        token = resp.body['authorization'];
        resolve(token)
        console.log(token)
      })
    })
  })

  Cypress._.times(10, () => {
    it('POST - Should create products', () => {
      cy.create_produts_api(token, name, price, descption, quantity, id)
        .then((resp) => {
          return new Promise(resolve => {
            expect(resp).property('status').to.equal(201)
            id = resp.body['_id'];
            resolve(id)
            console.log(resp)
            cy.writeFile('cypress/fixtures/data/idProduct.txt', id + ', \n', { flag: 'a+' })
          })
        })
    })
  })
})