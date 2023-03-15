let email
let password

const sucessfulyMessage = 'Login realizado com sucesso'
const errorMessage = 'Email e/ou senha inválidos'

describe('Service: Login via API', () => {
  it('POST - Should login', () => {

    cy.login_api().then((resp) => {
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
      cy.login_api( email, '999999').then((resp) => {
        expect(resp).property('status').to.equal(401)
        expect(resp.body).property('message').to.equal(errorMessage)
      })
    })
  })
})