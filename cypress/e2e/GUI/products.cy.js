describe('Products', () => {
  describe('Context: List Products', () => {

    beforeEach(() => {

      cy.intercept('GET', '**/produtos').as('getProducts')

      cy.login()
      cy.visit('/admin/home')
    })
  })
})