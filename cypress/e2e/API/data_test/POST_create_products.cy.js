const faker = require('faker-br')
let id = null
let token = null
let name = null
let price = null
let descption = null
let quantity = null

describe('Service: Create Products', () => {

  before(() => {
    cy.writeFile('cypress/fixtures/data/idProduct.txt', '')
  })

  beforeEach(() => {
    name = faker.commerce.productName()
    price = faker.commerce.price()
    descption = faker.commerce.productMaterial()
    quantity = 2

    cy.login_api().then((resp) => {
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