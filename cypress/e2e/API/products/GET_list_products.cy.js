
describe('Service: List Products', () => {

  it('GET - Should List Products', () => {
    cy.get_list_products()
      .then((resp) => {
        expect(resp).property('status').to.eq(200)
        expect(resp.body).to.have.property('quantidade').not.be.null
        expect(resp.body).to.have.property('produtos').not.be.null

        // verify property type
        expect(resp.body).to.have.property('quantidade').to.be.a('number')
        expect(resp.body).to.have.property('produtos').to.be.a('array')
      })
  })
})