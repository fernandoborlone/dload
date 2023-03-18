const faker = require('faker-br')

let name = null
let email = null
let password = null
let administrator = null
let token = null

let productName = null
let price = null
let description = null
let quantity = null
let id = null

describe('Service: Create Products', () => {

  before(() => {
    // Clean file idProducts
    cy.writeFile('cypress/fixtures/data/idProduct.txt', '')

    name = faker.name.firstName()
    email = faker.internet.email(name)
    password = faker.internet.password()
    administrator = ['true', 'false']

    // Created user by API
    cy.create_user_api(name, email, password, administrator[0])
      .then((resp) => {
        return new Promise(resolve => {
          expect(resp).property('status').to.equal(201)
          expect(resp).property('statusText').to.equal('Created')
          expect(resp.body).to.have.property('message')
          expect(resp.body).to.have.property('_id')
          expect(resp.body).property('message').to.be.a('string')
          expect(resp.body).to.contain({
            "message": "Cadastro realizado com sucesso"
          })
          resolve(email, password)
        })
      })
  })

  beforeEach(() => {

    productName = faker.commerce.productName()
    price = faker.commerce.price()
    description = faker.commerce.productMaterial()
    quantity = 2

    cy.login_api(email, password).then((resp) => {
      return new Promise(resolve => {
        expect(resp).property('status').to.equal(200)
        token = resp.body['authorization']
        resolve(token)
      })
    })
  })

  // Creates 10 products
  Cypress._.times(10, () => {
    it('POST - Should create products', () => {
      cy.create_produt_api(token, productName, price, description, quantity, id)
        .then((resp) => {
          expect(resp.status).to.eq(201)
          expect(resp).have.property('statusText').to.eq('Created')
          expect(resp.body).have.property('message', 'Cadastro realizado com sucesso')

          // Creates idProduct file
          cy.writeFile('cypress/fixtures/data/idProduct.txt', id + ', \n', { flag: 'a+' })
        })
    })
  })
})