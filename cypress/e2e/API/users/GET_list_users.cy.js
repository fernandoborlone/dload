const userParamters = {
  id: 'wAtZbQe2lUs6Poni',
  name: 'Wadi',
  email: 'Wadi91@gmail.com',
  password: 'D4392Kbu6Tm2F3T',
  administrador: {
    yes: true,
    no: false
  }
}
describe('Service: List Users', () => {

  it('GET - Should List all Users', () => {
    cy.get_list_users()
      .then((resp) => {
        expect(resp).property('status').to.eq(200)
        expect(resp.body).to.have.property('quantidade').not.be.null
        expect(resp.body).to.have.property('usuarios').not.be.null

        // verify property type
        expect(resp.body).to.have.property('quantidade').to.be.a('number')
        expect(resp.body).to.have.property('usuarios').to.be.a('array')
      })
  })

  context('Context: Query Parameters', () => {
    it('GET - Should list user by Id', () => {
      cy.get_list_users_by_id(userParamters.id).then((resp) => {
        expect(resp).property('status').to.eq(200)
        expect(resp.body).to.have.property('quantidade', 1)
        expect(resp.body.usuarios[0]).to.have.property('_id', userParamters.id)
      })
    })

    it('GET - Should list user by name', () => {
      cy.get_list_users_by_name(userParamters.name).then((resp) => {
        expect(resp).property('status').to.eq(200)
        expect(resp.body).to.have.property('quantidade', 1)
        expect(resp.body.usuarios[0]).to.have.property('_id', userParamters.id)
      })
    })

    it('GET - Should list user by email', () => {
      cy.get_list_users_by_email(userParamters.email).then((resp) => {
        expect(resp).property('status').to.eq(200)
        expect(resp.body).to.have.property('quantidade', 1)
        expect(resp.body.usuarios[0]).to.have.property('_id', userParamters.id)
      })
    })
  })
})